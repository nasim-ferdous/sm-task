"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const LenisProvider = ReactLenis as any;

  return (
    <LenisProvider root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </LenisProvider>
  );
}
