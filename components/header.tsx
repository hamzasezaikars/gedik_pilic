"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { categories } from "@/data/categories";
import { contact } from "@/data/contact";
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, []);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Gedik Piliç Düzce Bayisi</span>
          <span>
            Fevzi Çakmak Mah. · Merkez / Düzce{" "}
            <span className="top-divider">|</span>{" "}
            <a href={contact.mobileHref}>{contact.mobile}</a>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link
            className="wordmark"
            href="/"
            aria-label="Düzce Gedik Piliç ana sayfa"
          >
            <Image
              className="brand-image"
              src="/brand/logo.png"
              alt="Gedik Piliç"
              width={111}
              height={50}
              priority
            />
            <small>DÜZCE BAYİSİ</small>
          </Link>
          <nav className="desktop-nav" aria-label="Ana menü">
            {navigation.map((n) => (
              <div className="nav-item" key={n.href}>
                <Link
                  className={
                    (n.href === "/" ? path === "/" : path.startsWith(n.href))
                      ? "active"
                      : ""
                  }
                  href={n.href}
                >
                  {n.label}
                  {n.href === "/urunler" && <ChevronDown size={13} />}
                </Link>
                {n.href === "/urunler" && (
                  <div className="dropdown">
                    {categories.map((c) => (
                      <Link href={`/urunler/${c.slug}`} key={c.slug}>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={contact.phoneHref}>
              <Phone size={17} />
              <span>{contact.phone}</span>
            </a>
            <Link className="button primary compact" href="/kurumsal-satis">
              Teklif / Sipariş Talebi
            </Link>
          </div>
          <button
            className="menu-toggle"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="mobile-menu" id="mobile-menu" aria-label="Mobil menü">
            {navigation.map((n) => (
              <div key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={path === n.href ? "page" : undefined}
                >
                  {n.label}
                </Link>
                {n.href === "/urunler" &&
                  categories.map((c) => (
                    <Link
                      className="mobile-sub"
                      href={`/urunler/${c.slug}`}
                      key={c.slug}
                      onClick={() => setOpen(false)}
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            ))}
            <Link
              className="button primary"
              href="/kurumsal-satis"
              onClick={() => setOpen(false)}
            >
              Teklif / Sipariş Talebi
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
