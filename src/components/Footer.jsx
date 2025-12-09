import React from 'react'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="main-footer">
      <div className="footer-grid">

        <div className="footer-section logos-section">
          <img src="/assests/OIP.webp" alt="govt-logo" className="footer-logo" />
          <img src="https://via.placeholder.com/40" alt="Govt Logo 2" className="footer-logo" />
        </div>

        <div className="footer-section">
          <h4>{t("quick_links")}</h4>
          <ul>
            <li><a href="#">{t("about_us")}</a></li>
            <li><a href="#">{t("faqs")}</a></li>
            <li><a href="#">{t("sitemap")}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("contact_us")}</h4>
          <p>{t("email")}: contact@portal.gov.in</p>
          <p>{t("phone")}: 1800-123-4567</p>
        </div>

      </div>
    </footer>
  );
}
