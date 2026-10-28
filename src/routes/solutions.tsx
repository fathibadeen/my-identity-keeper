import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteLayout } from "@/components/site/site-shell";
import { SectorsSection, sectors } from "@/components/site/sectors";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "حلولنا | وكيل صوتي بلهجة سعودية وواتساب وكول سنتر ذكي | مسور" },
      { name: "description", content: "حلول مسور: كول سنتر ذكي ووكيل صوتي يتكلم باللهجة السعودية وأتمتة واتساب للعيادات والمطاعم والصالونات والعقار والنقل والمحاماة." },
      { property: "og:title", content: "حلول مسور | وكيل صوتي سعودي وواتساب" },
      { property: "og:description", content: "رد فوري على عملائك بالمكالمات وواتساب بلهجة سعودية طبيعية، على مدار الساعة." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://meswar.com/solutions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://meswar.com/solutions" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "حلول مسور", itemListElement: sectors.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Service", name: s.title, description: s.pain, provider: { "@id": "https://meswar.com/#organization" } } })) }) }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return <SiteLayout>
    <PageIntro eyebrow="حلولنا" title="وكيل ذكي يكلّم عملاءك بلهجتهم." description="كول سنتر ذكي ووكيل صوتي بلهجة سعودية طبيعية، مع أتمتة واتساب — يرد خلال ثانيتين، 24/7، ويحوّل للموظف متى احتاج العميل." />
    <SectorsSection />
    <section className="section-block"><div className="site-container">
      <span className="eyebrow">تفاصيل الحلول</span>
      <h2 className="section-title">حل لكل قطاع،<br /><span>بنفس الذكاء.</span></h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map(({ icon: Icon, image, title, pain, points, badge }) => <article className="solution-card" key={title}>
          <img src={image} alt={title} loading="lazy" width={1024} height={768} />
          <div className="sc-body"><span className="eyebrow"><Icon className="inline size-4" /> {badge}</span><h3>{title}</h3><p>{pain}</p>
            <ul>{points.map((p) => <li key={p}><Check />{p}</li>)}</ul></div>
        </article>)}
      </div>
    </div></section>
    <section className="compact-cta"><div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2>جرّب الوكيل الصوتي على نشاطك</h2><p>نجهز لك تجربة مخصصة بلهجة سعودية وواتساب.</p></div><Button asChild size="lg" variant="premium"><Link to="/contact">اطلب تجربة مخصصة <ArrowLeft /></Link></Button></div></section>
  </SiteLayout>;
}
