"use client";

import { NextUIProvider } from "@nextui-org/react";

function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default AppProviders;
