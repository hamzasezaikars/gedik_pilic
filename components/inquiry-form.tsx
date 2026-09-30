"use client";
import Link from "next/link";
import { useState } from "react";
import {
  contactSchema,
  quoteSchema,
  submitInquiry,
  type FormValues,
} from "@/lib/forms";
import { contact } from "@/data/contact";
export function InquiryForm({
  kind = "contact",
}: {
  kind?: "contact" | "quote";
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "demo" | "sent" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const quote = kind === "quote";
  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values: FormValues = Object.fromEntries(fd.entries()) as Record<
      string,
      string
    >;
    values.consent = fd.get("consent") === "on";
    const result = (quote ? quoteSchema : contactSchema).safeParse(values);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      setStatus("idle");
      const first = form.elements.namedItem(Object.keys(next)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const result = await submitInquiry(values, kind);
      setStatus(result.mode);
      if (result.mode === "sent") form.reset();
    } catch (e) {
      setStatus("error");
      setMessage(
        e instanceof Error
          ? e.message
          : "Bir hata oluştu. Lütfen tekrar deneyin.",
      );
    }
  }
  function field(
    name: string,
    label: string,
    type = "text",
    full = false,
    required = true,
  ) {
    return (
      <div className={`field ${full ? "full" : ""}`} key={name}>
        <label htmlFor={`${kind}-${name}`}>
          {label}
          {required ? " *" : ""}
        </label>
        <input
          id={`${kind}-${name}`}
          name={name}
          type={type}
          autoComplete={
            name === "name"
              ? "name"
              : name === "phone"
                ? "tel"
                : name === "email"
                  ? "email"
                  : name === "company"
                    ? "organization"
                    : "off"
          }
          inputMode={type === "tel" ? "tel" : undefined}
          placeholder={type === "tel" ? "05xx xxx xx xx" : undefined}
          maxLength={name === "phone" ? 20 : 300}
          required={required}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${kind}-${name}-error` : undefined}
        />
        {errors[name] && (
          <p className="field-error" id={`${kind}-${name}-error`}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  }
  return (
    <form className="form" noValidate onSubmit={submit}>
      <h2>{quote ? "Teklif / Sipariş Talebi" : "Bize yazın"}</h2>
      <p>
        Yıldızlı alanlar zorunludur.{" "}
        {process.env.NEXT_PUBLIC_FORM_ENDPOINT
          ? "Talebinizi aşağıdaki form ile iletebilirsiniz."
          : "Form şu anda demo modundadır; bilgileriniz gönderilmez veya kaydedilmez. Gerçek talepler için telefon ya da WhatsApp kullanın."}
      </p>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${kind}-website`}>Web sitesi</label>
        <input
          id={`${kind}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="form-grid">
        {field("name", "Ad Soyad")}
        {quote && field("company", "Firma Adı")}
        {field("phone", "Telefon", "tel")}
        {field("email", "E-posta", "email")}
        {quote ? (
          <>
            {field("location", "İl / İlçe")}
            <div className="field">
              <label htmlFor="quote-group">İlgilenilen Ürün Grubu *</label>
              <select
                id="quote-group"
                name="group"
                aria-invalid={!!errors.group}
                aria-describedby={errors.group ? "group-error" : undefined}
              >
                <option value="">Seçiniz</option>
                <option>Piliç Ürünleri</option>
                <option>Yemeye Hazır</option>
                <option>Şarküteri</option>
                <option>Birden Fazla Ürün Grubu</option>
              </select>
              {errors.group && (
                <p className="field-error" id="group-error">
                  {errors.group}
                </p>
              )}
            </div>
            {field("need", "Tahmini İhtiyaç", "text", true)}
          </>
        ) : (
          field("subject", "Konu", "text", true)
        )}
        <div className="field full">
          <label htmlFor={`${kind}-message`}>Mesaj *</label>
          <textarea
            id={`${kind}-message`}
            name="message"
            rows={5}
            maxLength={3000}
            required
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? `${kind}-message-error` : undefined
            }
          />
          {errors.message && (
            <p className="field-error" id={`${kind}-message-error`}>
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <label className="consent">
        <input
          name="consent"
          type="checkbox"
          required
          aria-invalid={!!errors.consent}
          aria-describedby={
            errors.consent ? `${kind}-consent-error` : undefined
          }
        />
        <span>
          <Link href="/kvkk" target="_blank">
            KVKK aydınlatma metnini
          </Link>{" "}
          okudum; talebimin yanıtlanması için paylaştığım bilgilerin
          kullanılmasına ilişkin bilgilendirildim.
        </span>
      </label>
      {errors.consent && (
        <p className="field-error" id={`${kind}-consent-error`}>
          {errors.consent}
        </p>
      )}
      <button
        type="submit"
        className="button primary"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Kontrol ediliyor…" : "Gönder"}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "demo" && (
          <div className="form-status">
            <strong>Form kontrolü başarılı — demo önizlemesi.</strong>
            <p>
              Talebiniz gönderilmedi ve bilgileriniz kaydedilmedi. İletişime
              geçmek için <a href={contact.whatsapp}>WhatsApp’tan yazın</a> veya{" "}
              <a href={contact.phoneHref}>{contact.phone}</a> numarasını arayın.
            </p>
          </div>
        )}
        {status === "sent" && (
          <div className="form-status">
            Talebiniz iletildi. Bizimle iletişime geçtiğiniz için teşekkür
            ederiz.
          </div>
        )}
        {status === "error" && (
          <div className="form-status error" role="alert">
            {message}
          </div>
        )}
      </div>
    </form>
  );
}
