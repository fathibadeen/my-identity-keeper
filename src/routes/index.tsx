import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, Bot, CheckCircle2, Code2, Cpu, Gavel, Palette, Route as RouteIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, services } from "@/components/site/content";
import { SiteLayout } from "@/components/site/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "مسور المتطورة | حلول رقمية تصنع الفرق" },
    { name: "description", content: "نطور المواقع والأنظمة وحلول الذكاء الاصطناعي التي تساعد الشركات على النمو وتحسين عملياتها." },
    { property: "og:title", content: "مسور المتطورة | حلول رقمية تصنع الفرق" },
    { property: "og:description", content: "شركة تقنية سعودية تبني مواقع وأنظمة وحلول ذكاء اصطناعي متطورة." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

function TechVisual() {
  return <div className="tech-visual" aria-label="منظومة حلول مسور التقنية">
    <div className="orbit orbit-one"><span /></div><div className="orbit orbit-two"><span /></div>
    <div className="visual-core"><span className="visual-kicker">MESWAR</span><Cpu className="size-12" /><strong>تقنية تصنع<br />المستقبل</strong></div>
    <div className="float-node node-one"><Bot /><span>ذكاء اصطناعي</span></div>
    <div className="float-node node-two"><Code2 /><span>أنظمة متطورة</span></div>
    <div className="float-node node-three"><Sparkles /><span>تجربة استثنائية</span></div>
  </div>;
}

function HomePage() {
  return <SiteLayout>
    <section className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="site-container grid items-center gap-14 py-16 lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="relative z-10 animate-rise">
          <span className="eyebrow"><span className="status-dot" /> شريكك التقني نحو المستقبل</span>
          <h1 className="hero-title">نبني حلولًا رقمية<br /><span>تصنع الفرق</span></h1>
          <p className="hero-copy">في مسور المتطورة نحول الأفكار إلى مواقع وأنظمة وحلول تقنية متطورة تساعد الشركات على النمو، وتحسين عملياتها، وتقديم تجربة رقمية أفضل لعملائها.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="premium"><Link to="/projects">استكشف مشاريعنا <ArrowLeft /></Link></Button>
            <Button asChild size="lg" variant="glass"><Link to="/contact">تواصل معنا</Link></Button>
          </div>
          <div className="hero-trust"><div><strong>حلول مخصصة</strong><span>لا قوالب جاهزة</span></div><div><strong>تقنيات حديثة</strong><span>لبناء أسرع وأذكى</span></div><div><strong>دعم مستمر</strong><span>بعد إطلاق مشروعك</span></div></div>
        </div>
        <TechVisual />
      </div>
    </section>

    <section className="section-block border-y border-border bg-surface-deep">
      <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="eyebrow">ما الذي نقدمه</span><h2 className="section-title">تقنية تخدم هدفك،<br /><span>لا تعقّده.</span></h2></div>
        <p className="section-lead">نبدأ بفهم التحدي، ثم نبني الحل الأنسب بأدوات حديثة وتجربة استخدام واضحة، من الفكرة الأولى حتى الإطلاق والتطوير المستمر.</p>
      </div>
      <div className="site-container mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map(({ icon: Icon, title, description }, index) => <article className="service-tile" key={title}><span className="service-index">0{index + 1}</span><Icon className="service-icon" /><h3>{title}</h3><p>{description}</p></article>)}
      </div>
      <div className="site-container mt-8 flex justify-end"><Button asChild variant="glass"><Link to="/services">عرض جميع الخدمات <ArrowLeft /></Link></Button></div>
    </section>

    <section className="section-block">
      <div className="site-container flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><span className="eyebrow">منتجات صنعتها مسور</span><h2 className="section-title">مشاريع تتحول من<br /><span>فكرة إلى أثر.</span></h2></div><Button asChild variant="glass"><Link to="/projects">كل المشاريع <ArrowUpLeft /></Link></Button></div>
      <div className="site-container mt-12 grid gap-5 lg:grid-cols-2">
        {projects.slice(0, 4).map(({ title, category, description, icon: Icon, number, accent }) => <article key={title} className={`project-card project-${accent}`}><div className="flex items-center justify-between"><span className="project-number">{number}</span><span className="project-icon"><Icon /></span></div><div className="mt-20"><span className="project-category">{category}</span><h3>{title}</h3><p>{description}</p></div><Link to="/projects" className="project-link" aria-label={`تفاصيل مشروع ${title}`}><ArrowUpLeft /></Link></article>)}
      </div>
    </section>

    <section className="section-block bg-accent-soft">
      <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center"><div className="ai-panel"><div className="ai-grid" /><span className="ai-chip"><Bot /> ذكاء اصطناعي عربي</span><div className="ai-wave">{[22,42,30,62,46,76,34,58,28,68,44,24].map((h,i)=><span key={i} style={{height:`${h}px`}} />)}</div><div className="ai-message">مرحبًا، كيف أستطيع مساعدتك اليوم؟</div></div><div><span className="eyebrow">ذكاء ينجز أكثر</span><h2 className="section-title">حلول ذكية تفهم<br /><span>أعمالك وعملاءك.</span></h2><p className="section-lead mt-6">نوظف الذكاء الاصطناعي في خدمة أهداف واضحة: استجابة أسرع، عمليات أكثر كفاءة، وقرارات مبنية على بيانات أفضل.</p><ul className="mt-7 grid gap-3 text-sm text-foreground"><li><CheckCircle2 /> وكلاء صوتيون ومساعدون أذكياء</li><li><CheckCircle2 /> أتمتة الردود والعمليات المتكررة</li><li><CheckCircle2 /> حلول عربية تلائم السوق المحلي</li></ul></div></div>
    </section>

    <section className="cta-section"><div className="site-container relative z-10 text-center"><span className="eyebrow">لنبنِ الخطوة القادمة</span><h2>لديك فكرة؟ نحن نحوّلها<br /><span>إلى واقع رقمي.</span></h2><p>شاركنا احتياجك، وسنساعدك في اختيار الحل التقني الأنسب لمشروعك.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild size="lg" variant="premium"><Link to="/contact">اطلب مشروعك الآن <ArrowLeft /></Link></Button><Button asChild size="lg" variant="glass"><a href="tel:+966530044027" dir="ltr">053 004 4027</a></Button></div></div></section>
  </SiteLayout>;
}