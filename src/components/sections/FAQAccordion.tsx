"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="flex flex-col divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <div key={index}>
          <dt>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-[var(--color-ink)] font-semibold text-base sm:text-lg hover:text-[var(--color-accent)] transition-colors duration-150"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              {item.question}
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 7l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </dt>
          <dd
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
            }`}
          >
            <p className="text-body text-[var(--color-muted)]">{item.answer}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
