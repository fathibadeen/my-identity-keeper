import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

const REVEAL = ".section-title, .section-lead, .eyebrow, .partner-card, .service-tile, .service-card, .project-card, .project-showcase, .value-card, .journey-step, .contact-card, .contact-form, .ai-panel, .page-title, .page-description, .cta-section h2";
const TILT = ".partner-card, .service-tile, .service-card, .project-card, .value-card";

export function MotionEffects() {
  const bar = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    document.documentElement.classList.add("motion-on");
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => {
      const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--reveal-delay", `${Math.min(sib, 6) * 80}ms`);
      el.classList.add("reveal"); io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    if (reduce || !fine) return () => removeEventListener("scroll", onScroll);

    let tilted: HTMLElement | null = null;
    const onMove = (ev: PointerEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${ev.clientX - 200}px, ${ev.clientY - 200}px)`;
      const t = ev.target as HTMLElement;
      const card = t.closest?.(TILT) as HTMLElement | null;
      if (tilted && tilted !== card) { tilted.style.transform = ""; tilted = null; }
      if (card) {
        const r = card.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
        card.style.setProperty("--mx", `${x * 100}%`); card.style.setProperty("--my", `${y * 100}%`);
        tilted = card;
      }
      document.querySelectorAll<HTMLElement>(".royal-button").forEach((b) => {
        const r = b.getBoundingClientRect();
        const dx = ev.clientX - (r.left + r.width / 2), dy = ev.clientY - (r.top + r.height / 2);
        b.style.translate = Math.hypot(dx, dy) < 110 ? `${dx * 0.2}px ${dy * 0.3}px` : "0 0";
      });
      const stage = document.querySelector<HTMLElement>(".hero-brand-stage");
      if (stage) stage.style.transform = `perspective(1000px) rotateY(${(ev.clientX / innerWidth - 0.5) * 12}deg) rotateX(${(0.5 - ev.clientY / innerHeight) * 10}deg)`;
    };
    addEventListener("pointermove", onMove, { passive: true });
    return () => { removeEventListener("scroll", onScroll); removeEventListener("pointermove", onMove); };
  }, []);

  return <><div ref={bar} className="scroll-progress" aria-hidden /><div ref={glow} className="cursor-glow" aria-hidden /></>;
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return <div className="marquee" aria-hidden><div className="marquee-track">{row.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div></div>;
}

export function SplitWords({ text }: { text: string }) {
  return <>{text.split(" ").map((w, i) => <span key={i} className="word" style={{ animationDelay: `${i * 90 + 150}ms` }}>{w}&nbsp;</span>)}</>;
}
