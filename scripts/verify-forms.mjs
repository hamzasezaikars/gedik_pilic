import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";
const source = await readFile("lib/forms.ts", "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { writeFile, unlink } = await import("node:fs/promises");
await writeFile("scripts/.forms-test.mjs", js);
try {
  const { contactSchema, quoteSchema, submitInquiry } =
    await import("./.forms-test.mjs");
  const valid = {
    name: "Test Kullanıcı",
    phone: "+90 552 313 99 33",
    email: "test@example.com",
    subject: "Ürün bilgisi",
    message: "Ürün grupları hakkında test talebi.",
    consent: true,
    website: "",
  };
  assert(contactSchema.safeParse(valid).success);
  for (const phone of [
    "123",
    "abc05523139933",
    "+44 552 313 99 33",
    "00000000000",
  ])
    assert(!contactSchema.safeParse({ ...valid, phone }).success);
  assert(!contactSchema.safeParse({ ...valid, consent: false }).success);
  assert(!contactSchema.safeParse({ ...valid, email: "bozuk" }).success);
  assert(
    !contactSchema.safeParse({ ...valid, message: "<script>alert(1)</script>" })
      .success,
  );
  assert(!contactSchema.safeParse({ ...valid, website: "spam" }).success);
  const quote = {
    ...valid,
    company: "Test İşletmesi",
    location: "Düzce / Merkez",
    group: "Piliç Ürünleri",
    need: "Haftalık talep",
  };
  assert(quoteSchema.safeParse(quote).success);
  assert(!quoteSchema.safeParse({ ...quote, company: "" }).success);
  delete process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  assert.deepEqual(await submitInquiry(valid, "contact"), { mode: "demo" });
  process.env.NEXT_PUBLIC_FORM_ENDPOINT = "https://example.invalid/form";
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("", { status: 500 });
  await assert.rejects(() => submitInquiry(valid, "contact"));
  globalThis.fetch = oldFetch;
  console.log(
    "PASS: contact/quote schemas, Turkish phones, consent, email, XSS characters, honeypot, demo and API error handling.",
  );
} finally {
  await unlink("scripts/.forms-test.mjs");
}
