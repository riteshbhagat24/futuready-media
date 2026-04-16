'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQBlock({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => setOpenIndex(isOpen ? null : i)}>
              {faq.question}
              <div className="icon">
                <span className="icon-h" />
                <span className="icon-v" />
              </div>
            </div>
            <div className="faq-a">{faq.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
