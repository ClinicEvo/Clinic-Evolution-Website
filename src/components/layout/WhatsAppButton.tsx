"use client";

import { events } from "@/lib/analytics";

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent("Hi Clinic Evo, I'd like to enquire about your services.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => events.whatsappClick()}
      /* --sticky-cta-h is published by StickyMobileCta on the pages that carry
         one. Both are fixed to this corner at z-40, so without the offset the
         bar lands on top of the bubble. Unset everywhere else, hence the 0px
         fallback. Transition the transform, not `bottom`. */
      style={{ transform: "translateY(calc(-1 * var(--sticky-cta-h, 0px)))" }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#1aad52] transition-[background-color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M14 2.33C7.56 2.33 2.33 7.56 2.33 14c0 2.03.54 3.94 1.49 5.59L2.33 25.67l6.26-1.64A11.6 11.6 0 0014 25.67c6.44 0 11.67-5.23 11.67-11.67S20.44 2.33 14 2.33zm0 21c-1.85 0-3.59-.5-5.08-1.36l-.36-.21-3.72.97.99-3.62-.24-.38A9.3 9.3 0 014.66 14c0-5.15 4.19-9.33 9.34-9.33s9.33 4.18 9.33 9.33S19.15 23.33 14 23.33zm5.13-6.97c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.18 0-.49.07-.74.35-.26.28-.98.96-.98 2.33 0 1.38 1 2.71 1.14 2.9.14.18 1.97 3 4.77 4.21.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.13-.26-.2-.54-.34z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
