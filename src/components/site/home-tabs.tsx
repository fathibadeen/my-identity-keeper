import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { projects, services } from "@/components/site/content";
import { projectImages } from "@/components/site/project-images";

const tabs = [
  { id: "services", label: "خدماتنا" },
  { id: "projects", label: "مشاريعنا" },
] as const;

export function HomeTabs() {
  const [active, setActive] = useState<"services" | "projects">("services");
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = refs.current[active];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <section className="section-block border-y border-border bg-surface-deep">
      <div className="site-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div><span className="eyebrow">ماذا نقدم</span><h2 className="section-title">خدمات تصنع الأثر،<br /><span>ومشاريع تثبته.</span></h2></div>
        <div className="home-tabs-bar" role="tablist" aria-label="الخدمات والمشاريع">
          <span className="home-tab-pill" style={{ left: pill.left, width: pill.width }} aria-hidden />
          {tabs.map((t) => (
            <button key={t.id} ref={(el) => { refs.current[t.id] = el; }} role="tab" aria-selected={active === t.id} className="home-tab" onClick={() => setActive(t.id)}>{t.label}</button>
          ))}
        </div>
      </div>

      {active === "services" ? (
        <div key="s" className="site-container mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {services.map(({ icon: Icon, title, description }, i) => (
            <article className="service-card tab-item" style={{ animationDelay: `${i * 70}ms` }} key={title}>
              <span className="service-index">0{i + 1}</span><Icon /><h3>{title}</h3><p>{description}</p>
              <ul><li><Check />تحليل واضح للاحتياج</li><li><Check />تنفيذ قابل للتطوير</li><li><Check />جودة وتجربة متناسقة</li></ul>
              <Button asChild variant="premium" className="service-cta"><Link to="/contact">تواصل معنا <ArrowLeft /></Link></Button>
            </article>
          ))}
        </div>
      ) : (
        <div key="p" className="site-container mt-12 grid gap-5 lg:grid-cols-2" role="tabpanel">
          {projects.map(({ title, category, description, icon: Icon, number, accent, url }, i) => (
            <article key={title} style={{ animationDelay: `${i * 90}ms` }} className={`tab-item project-card project-${accent} ${projectImages[title] ? "project-card-image" : ""}`}>
              {projectImages[title] && <img src={projectImages[title]} alt={`واجهة مشروع ${title}`} />}
              <div className="project-overlay" />
              <div className="relative z-10 flex items-center justify-between"><span className="project-number">{number}</span><span className="project-icon"><Icon /></span></div>
              <div className="project-card-copy"><span className="project-category">{category}</span><h3>{title}</h3><p>{description}</p></div>
              {url ? <a href={url} target="_blank" rel="noreferrer" className="project-link" aria-label={`زيارة مشروع ${title}`}><ArrowUpLeft /></a> : <Link to="/projects" className="project-link" aria-label={`تفاصيل مشروع ${title}`}><ArrowUpLeft /></Link>}
            </article>
          ))}
        </div>
      )}

      <div className="site-container mt-8 flex justify-end">
        <Button asChild variant="glass">{active === "services" ? <Link to="/services">عرض جميع الخدمات <ArrowLeft /></Link> : <Link to="/projects">كل المشاريع <ArrowLeft /></Link>}</Button>
      </div>
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
