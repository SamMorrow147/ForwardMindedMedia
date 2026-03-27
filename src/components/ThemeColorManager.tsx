"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Dynamically updates the Safari theme-color meta tag based on the current page.
 * This ensures the iOS Liquid Glass bottom bar blends with the page background.
 */
export default function ThemeColorManager() {
  const pathname = usePathname();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    // Case study / project pages use dark purple backgrounds
    if (pathname.startsWith('/case-studies')) {
      meta.setAttribute('content', '#2a1232');
    } else {
      // Homepage and other pages use black
      meta.setAttribute('content', '#000000');
    }
  }, [pathname]);

  return null;
}
