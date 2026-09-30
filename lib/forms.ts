import { z } from "zod";
const text = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min, `En az ${min} karakter girin.`)
    .max(max, `En fazla ${max} karakter girin.`)
    .refine(
      (v) => !/[<>\u0000-\u0008]/.test(v),
      "Geçersiz karakterleri kaldırın.",
    );
const phone = z
  .string()
  .trim()
  .refine(
    (v) =>
      /^[+\d\s()-]+$/.test(v) &&
      /^(?:0|90)?[2-5]\d{9}$/.test(v.replace(/[^\d]/g, "")),
    "Geçerli bir Türkiye telefon numarası girin (05xx xxx xx xx).",
  );
export const contactSchema = z.object({
  name: text(2, 100),
  phone,
  email: z.email("Geçerli bir e-posta adresi girin.").max(150),
  subject: text(3, 150),
  message: text(10, 3000),
  consent: z.literal(true, {
    error: "Devam etmek için aydınlatma metnini okuduğunuzu onaylayın.",
  }),
  website: z.string().max(0, "İstek doğrulanamadı."),
});
export const quoteSchema = contactSchema.omit({ subject: true }).extend({
  company: text(2, 150),
  location: text(2, 150),
  group: text(2, 100),
  need: text(2, 300),
});
export type FormValues = Record<string, string | boolean>;
export async function submitInquiry(
  values: FormValues,
  kind: "contact" | "quote",
): Promise<{ mode: "demo" | "sent" }> {
  const schema = kind === "quote" ? quoteSchema : contactSchema;
  schema.parse(values);
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    return { mode: "demo" };
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, ...values }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(
      "Talebiniz gönderilemedi. Lütfen tekrar deneyin veya telefonla ulaşın.",
    );
  return { mode: "sent" };
}
