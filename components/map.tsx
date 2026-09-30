"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { contact } from "@/data/contact";
export function Map() {
  const [enabled, setEnabled] = useState(false);
  return enabled ? (
    <iframe
      className="map-frame"
      src={contact.mapEmbed}
      title="Düzce Gedik Piliç adres haritası"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  ) : (
    <div className="map-placeholder">
      <MapPin size={38} />
      <h3>Fevzi Çakmak Mahallesi</h3>
      <p>Bolu Caddesi No:227 · Merkez / Düzce</p>
      <button className="button outline" onClick={() => setEnabled(true)}>
        Google Haritasını Göster
      </button>
      <small>Haritayı açtığınızda Google ile bağlantı kurulur.</small>
    </div>
  );
}
