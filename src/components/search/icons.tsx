export function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s-7-6.06-7-11a7 7 0 1 1 14 0c0 4.94-7 11-7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconCalendar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconUsers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 4.5c1.7.4 3 2 3 3.9 0 1.9-1.3 3.5-3 3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18.5 14.2c2 .6 3.5 2.4 3.5 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 16v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2.5 2v1.5L11 20.5l3.5 1V20l-2.5-2v-4.5L21 16Z" />
    </svg>
  );
}

export function IconHotel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 21V6l7-3 7 3v15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 21v-5h4v5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M16 13h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 16v-3.5L6 8h12l2 4.5V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="2.5" y="16" width="19" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7" cy="19.5" r="1.3" fill="currentColor" />
      <circle cx="17" cy="19.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconPackage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 8 12 3.5 20.5 8 12 12.5 3.5 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3.5 8v9L12 21.5 20.5 17V8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12.5V21.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconFlightHotel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 13.5 12 9l10 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 13v7.5M18 13v7.5M2 20.5h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCompass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMinus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
