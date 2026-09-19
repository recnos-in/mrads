import React from 'react';

const WHATSAPP_HREF =
  "https://wa.me/919686544644?text=Hi%2C%20I%27m%20interested%20in%20advertising%20with%20Mr.%20Ads.%20Please%20share%20available%20locations%2C%20pricing%2C%20and%20current%20slot%20availability.";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mr. Ads on WhatsApp"
      className="fixed bottom-24 right-4 z-[200] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.32 4.94L2 22l5.2-1.36a9.95 9.95 0 0 0 4.84 1.24h.01c5.52 0 10-4.48 10-10s-4.49-9.88-10.01-9.88Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.82-3-.2-.31a8.18 8.18 0 0 1-1.26-4.32c0-4.52 3.68-8.2 8.22-8.2 2.2 0 4.26.86 5.82 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.53-3.68 8.14-8.22 8.14Zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}
