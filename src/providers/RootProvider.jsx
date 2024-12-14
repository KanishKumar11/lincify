"use client";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./theme-provider";
import SmoothScrolling from "./SmoothScrolling";
import { Toaster } from "@/components/ui/sonner";

export default function RootProvider({ children }) {
  return (
    <NextUIProvider>
      {" "}
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {/* <SmoothScrolling> */}
        <Toaster position="top-center" />
        {children}
        {/* </SmoothScrolling> */}
      </ThemeProvider>
    </NextUIProvider>
  );
}
