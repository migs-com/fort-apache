'use client';

import { openConsentSettings } from '@/lib/analytics';

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className="hover:text-cream underline-offset-2">
      {label}
    </button>
  );
}
