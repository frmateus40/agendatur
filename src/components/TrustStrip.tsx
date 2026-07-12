function IconDigital({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 9.5l2 2 2-3M13.5 9h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2.5c-5.26 0-9.53 4.27-9.53 9.53 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.87-1.24a9.5 9.5 0 0 0 4.65 1.2h.01c5.26 0 9.53-4.27 9.53-9.53s-4.27-9.43-9.54-9.43Zm0 17.4a7.8 7.8 0 0 1-3.99-1.09l-.28-.17-2.9.74.78-2.83-.19-.29a7.85 7.85 0 0 1-1.2-4.21c0-4.34 3.53-7.87 7.88-7.87 2.1 0 4.08.82 5.57 2.31a7.83 7.83 0 0 1 2.3 5.57c0 4.34-3.53 7.84-7.87 7.84Z" />
    </svg>
  );
}

function IconCredit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const ITEMS = [
  { icon: IconDigital, text: "Agencia 100% digital" },
  { icon: IconShield, text: "RNT 279917" },
  { icon: IconWhatsapp, text: "Atención personalizada por WhatsApp" },
  { icon: IconCredit, text: "Financiación / línea de crédito" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-100 bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary-medium shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-gray-700">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
