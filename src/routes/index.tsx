import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/site-shell";
import { brandAssets, partners } from "@/components/site/brand-assets";
import { Marquee, SplitWords } from "@/components/site/motion";
import { HomeTabs, StatsStrip } from "@/components/site/home-tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مسور المتطورة | تطوير المواقع والأنظمة وحلول الذكاء الاصطناعي" },
      { name: "description", content: "شركة تقنية سعودية تطور المواقع والمنصات والأنظمة وحلول الذكاء الاصطناعي لرفع كفاءة الأعمال وصناعة منتجات رقمية قابلة للنمو." },
      { property: "og:title", content: "مسور المتطورة | حلول رقمية وذكاء اصطناعي للأعمال" },
      { property: "og:description", content: "نحوّل احتياجات الأعمال إلى مواقع وأنظمة وحلول ذكاء اصطناعي عملية تصنع أثرًا قابلًا للقياس." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://meswar.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "مسور المتطورة | حلول رقمية وذكاء اصطناعي للأعمال" },
      { name: "twitter:description", content: "نحوّل احتياجات الأعمال إلى مواقع وأنظمة وحلول ذكاء اصطناعي عملية." },
    ],
    links: [{ rel: "canonical", href: "https://meswar.com/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", "@id": "https://meswar.com/#organization", name: "مسور المتطورة", url: "https://meswar.com/", telephone: "+966530044027", logo: "https://meswar.com/favicon.png", description: "شركة تقنية سعودية متخصصة في تطوير المواقع والأنظمة وحلول الذكاء الاصطناعي.", areaServed: { "@type": "Country", name: "المملكة العربية السعودية" } },
          { "@type": "WebSite", "@id": "https://meswar.com/#website", url: "https://meswar.com/", name: "مسور المتطورة", inLanguage: "ar", publisher: { "@id": "https://meswar.com/#organization" } },
        ],
      }),
    }],
  }),
  component: HomePage,
});

function HeroVisual() {
  return <div className="hero-showcase" aria-label="مسور المتطورة">
    <div className="hero-brand-stage"><span className="hero-orbit" /><img src={brandAssets.logo} alt="شعار مسور" /><div className="hero-signal"><span>وكيل صوتي بلهجة سعودية</span><span>أتمتة واتساب</span><span>مواقع وأنظمة ذكية</span></div></div>
  </div>;
}

function HomePage() {
  return <SiteLayout>
    <section className="hero-section">
      <div className="site-container grid items-center gap-14 py-16 lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="relative z-10 animate-rise">
          <span className="eyebrow"><span className="status-dot" /> من الفكرة إلى منتج يعمل وينمو</span>
          <h1 className="hero-title">مسور المتطورة<br /><span><SplitWords text="نبني التحوّل، لا الواجهة فقط." /></span></h1>
          <p className="hero-copy">نفهم تحدي عملك، نكتشف الفرصة، ثم نصمم ونطور منتجًا رقميًا أو حل ذكاء اصطناعي يرفع الكفاءة ويمنح عملاءك تجربة تستحق العودة.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="premium"><Link to="/projects">استكشف مشاريعنا <ArrowLeft /></Link></Button>
            <Button asChild size="lg" variant="glass"><Link to="/contact">تواصل معنا</Link></Button>
          </div>
          <div className="hero-trust"><div><strong>نفهم</strong><span>العمل قبل التقنية</span></div><div><strong>نبني</strong><span>منتجًا قابلًا للنمو</span></div><div><strong>نطوّر</strong><span>الأثر بعد الإطلاق</span></div></div>
        </div>
        <HeroVisual />
      </div>
    </section>

    <Marquee items={["مواقع","أنظمة","ذكاء اصطناعي","أتمتة","صوتي","استشارتك"]} />

    <section className="partners-section section-block">
      <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><span className="eyebrow">شركاء مسور</span><h2 className="section-title">منظومة واحدة.<br /><span>خبرات تكمل بعضها.</span></h2></div><p className="section-lead">نجمع الاستشارة الذكية، الحلول الصوتية، والتنفيذ التقني تحت رؤية واحدة؛ لتنتقل شركتك من سؤال «ماذا نحتاج؟» إلى حل يعمل فعلًا.</p></div>
      <div className="site-container partners-grid mt-12">
        {partners.map((partner, index) => <article className={`partner-card partner-card-${index + 1}`} key={partner.name}><div className="partner-visual"><img src={partner.image} alt={`شعار ${partner.name}`} /></div><div className="partner-content"><span>0{index + 1} / منظومة مسور</span><h3>{partner.name}</h3><p>{partner.description}</p>{partner.href.startsWith("http") ? <a className="partner-link" href={partner.href} target="_blank" rel="noreferrer">{partner.action}<ArrowUpLeft /></a> : <Link className="partner-link" to="/about">{partner.action}<ArrowLeft /></Link>}</div></article>)}
      </div>
    </section>

    <StatsStrip />

    <HomeTabs />

    <section className="section-block bg-accent-soft">
      <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center"><div className="ai-panel"><div className="ai-grid" /><span className="ai-chip"><Bot /> ذكاء اصطناعي عربي</span><div className="ai-wave">{Array.from({ length: 12 }, (_, i)=><span key={i} />)}</div><div className="ai-message">مرحبًا، كيف أستطيع مساعدتك اليوم؟</div></div><div><span className="eyebrow">ذكاء ينجز أكثر</span><h2 className="section-title">حلول ذكية تفهم<br /><span>أعمالك وعملاءك.</span></h2><p className="section-lead mt-6">نوظف الذكاء الاصطناعي في خدمة أهداف واضحة: استجابة أسرع، عمليات أكثر كفاءة، وقرارات مبنية على بيانات أفضل.</p><ul className="mt-7 grid gap-3 text-sm text-foreground"><li><CheckCircle2 /> وكلاء صوتيون ومساعدون أذكياء</li><li><CheckCircle2 /> أتمتة الردود والعمليات المتكررة</li><li><CheckCircle2 /> حلول عربية تلائم السوق المحلي</li></ul></div></div>
    </section>

    <section className="cta-section"><div className="site-container relative z-10 text-center"><span className="eyebrow">لنبنِ الخطوة القادمة</span><h2>لديك فكرة؟ نحن نحوّلها<br /><span>إلى واقع رقمي.</span></h2><p>شاركنا احتياجك، وسنساعدك في اختيار الحل التقني الأنسب لمشروعك.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild size="lg" variant="premium"><Link to="/contact">اطلب مشروعك الآن <ArrowLeft /></Link></Button><Button asChild size="lg" variant="glass"><a href="tel:+966530044027" dir="ltr">053 004 4027</a></Button></div></div></section>
  </SiteLayout>;
}