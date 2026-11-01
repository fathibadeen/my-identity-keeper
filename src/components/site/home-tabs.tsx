import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, ChevronLeft, Headphones, Layers3, MessageCircle, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { projects, services } from "@/components/site/content";

const productList = [
  { icon: Headphones, title: "الكول سنتر الذكي", description: "وكيل صوتي ذكي يرد على مكالمات عملائك بلهجة سعودية طبيعية على مدار الساعة.", url: "https://www.sawti-ai.com/" },
  { icon: MessageCircle, title: "أتمتة واتساب للأعمال", description: "رد فوري على استفسارات العملاء والحجوزات والطلبات عبر واتساب.", url: "https://www.sawti-ai.com/" },
  ...projects.map((p) => ({ icon: p.icon, title: p.title, description: p.description, url: (p as { url?: string }).url })),
];

type Panel = "services" | "products" | null;

export function HomeTabs() {
  const [open, setOpen] = useState<Panel>(null);
  const toggle = (p: Exclude<Panel, null>) => setOpen((o) => (o === p ? null : p));
  const cards = [
    { id: "services" as const, icon: Layers3, title: "خدماتنا", text: "نقدم في مسور حلولًا تقنية حسب احتياجكم، من تصميم وتطوير المواقع والتطبيقات إلى حلول الذكاء الاصطناعي المخصّصة لأعمالكم.", btn: "استعرض الخدمات" },
    { id: "products" as const, icon: Package, title: "منتجاتنا", text: "نقدم في مسور منتجات تقنية جاهزة صُمّمت لتلبية احتياجات مختلف الأعمال.", btn: "استعرض المنتجات" },
  ];
  return (
    <section className="section-block border-y border-border bg-surface-deep">
      <div className="site-container offer-grid">
        {cards.map(({ id, icon: Icon, title, text, btn }) => (
          <button key={id} type="button" className="offer-card" aria-expanded={open === id} onClick={() => toggle(id)}>
            <div className="relative z-10"><span className="offer-icon"><Icon /></span><h2>{title}</h2><p>{text}</p></div>
            <span className="offer-btn">{btn} <ChevronLeft /></span>
          </button>
        ))}
      </div>

      {open === "services" && (
        <div key="s" className="offer-panel site-container mt-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }, i) => (
              <article className="service-card tab-item" style={{ animationDelay: `${i * 70}ms` }} key={title}>
                <span className="service-index">0{i + 1}</span><Icon /><h3>{title}</h3><p>{description}</p>
                <ul><li><Check />تحليل واضح للاحتياج</li><li><Check />تنفيذ قابل للتطوير</li><li><Check />جودة وتجربة متناسقة</li></ul>
                <Button asChild variant="premium" className="service-cta"><Link to="/contact">تواصل معنا <ArrowLeft /></Link></Button>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end"><Button asChild variant="glass"><Link to="/services">عرض جميع الخدمات <ArrowLeft /></Link></Button></div>
        </div>
      )}
      {open === "products" && (
        <div key="p" className="offer-panel site-container mt-10">
          <div className="grid gap-5 md:grid-cols-2">
            {productList.map(({ icon: Icon, title, description, url }, i) => (
              <article key={title} className="product-card tab-item" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="top"><Icon /><span className="service-index">0{i + 1}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <Button asChild variant="premium" className="service-cta">{url ? <a href={url} target="_blank" rel="noreferrer">استعرض المشروع <ArrowLeft /></a> : <Link to="/projects">استعرض المشروع <ArrowLeft /></Link>}</Button>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end"><Button asChild variant="glass"><Link to="/projects">عرض جميع المشاريع <ArrowLeft /></Link></Button></div>
        </div>
      )}
    </section>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const items = [{ n: projects.length, l: "مشاريع مطلقة" }, { n: services.length, l: "خدمات متكاملة" }, { n: 24, s: "/7", l: "وكيل ذكي يرد" }, { n: 100, s: "%", l: "حلول عربية" }];
  const [vals, setVals] = useState(items.map(() => 0));
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const tick = (t: number) => { const p = Math.min((t - start) / 1400, 1); setVals(items.map((x) => Math.round(x.n * (1 - Math.pow(1 - p, 3))))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <section className="site-container py-12"><div ref={ref} className="stats-strip">{items.map((x, i) => <div key={x.l}><strong>{vals[i]}{x.s ?? "+"}</strong><span>{x.l}</span></div>)}</div></section>;
}
