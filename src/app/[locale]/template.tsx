"use client";
import { usePathname } from "@/libs/i18n/navigation";
import { formatPathname } from "@/utils/helpers";
import { RoutingTracking } from "@/utils/mixpanel";
import React, { useEffect } from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    RoutingTracking(formatPathname(pathname));
  }, [pathname]);

  return children;
}
