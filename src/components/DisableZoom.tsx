"use client";

import { useEffect } from "react";

export default function DisableZoom() {
  useEffect(() => {
    let lastTouchEnd = 0;

    function preventDefaultIfMultitouch(e: TouchEvent) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }

    function preventDoubleTap(e: TouchEvent) {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }

    function preventGesture(e: Event) {
      e.preventDefault();
    }

    function preventWheelZoom(e: WheelEvent) {
      if (e.ctrlKey) e.preventDefault();
    }

    // Add event listeners with passive: false where needed
    document.addEventListener("touchstart", preventDefaultIfMultitouch, { passive: false });
    document.addEventListener("touchmove", preventDefaultIfMultitouch, { passive: false });
    document.addEventListener("touchend", preventDoubleTap, { passive: false });
    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("wheel", preventWheelZoom, { passive: false });

    return () => {
      document.removeEventListener("touchstart", preventDefaultIfMultitouch);
      document.removeEventListener("touchmove", preventDefaultIfMultitouch);
      document.removeEventListener("touchend", preventDoubleTap);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("wheel", preventWheelZoom);
    };
  }, []);

  return null;
}
