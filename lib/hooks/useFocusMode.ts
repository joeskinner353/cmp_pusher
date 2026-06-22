// useFocusMode Hook

'use client';

import { useState, useEffect, useCallback } from 'react';

export function useFocusMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const openFocus = useCallback((id: string) => {
    setFocusedId(id);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeFocus = useCallback(() => {
    setIsOpen(false);
    setFocusedId(null);
    document.body.style.overflow = 'unset';
  }, []);

  const toggleFocus = useCallback(
    (id: string) => {
      if (isOpen && focusedId === id) {
        closeFocus();
      } else {
        openFocus(id);
      }
    },
    [isOpen, focusedId, openFocus, closeFocus]
  );

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeFocus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeFocus]);

  return {
    isOpen,
    focusedId,
    openFocus,
    closeFocus,
    toggleFocus,
  };
}
