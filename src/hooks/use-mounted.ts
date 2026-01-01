"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect if component is mounted
 * Useful for preventing hydration mismatches
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
