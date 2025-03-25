import { AnimatedSpan, Terminal, TypingAnimation } from "./terminal";

export function TerminalDemo() {
  return (
    <Terminal className="whitespace-pre-wrap break-words break-all max-w-full">
      <TypingAnimation>&gt; Elevating Digital Experiences...</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Web & Ecommerce Development</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ App Development</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ UI/UX Designing</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ SEO</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Logo Designing</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Power BI</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ QA</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Cyber Security</span>
      </AnimatedSpan>

      <TypingAnimation delay={5500} className="text-muted-foreground">
        by SystemR
      </TypingAnimation>

      <TypingAnimation delay={6000} className="text-muted-foreground">
        We are flexible with time zone communication
      </TypingAnimation>
    </Terminal>
  );
}
