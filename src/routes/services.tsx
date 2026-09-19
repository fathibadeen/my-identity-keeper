import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Compass, PenTool, Rocket, Settings2 } from "lucide-react";
import { services } from "@/components/site/content";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteLayout } from "@/components/site/site-shell";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [
  { title: "خدماتنا | مسور المتطورة" }, { name: "description", content: "تطوير مواقع وأنظمة ومنصات وحلول ذكاء اصطناعي وتصميم تجارب رقمية للأعمال." },
  { property: "og:title", content: "خدمات مسور المتطورة" }, { property: "og:description", content: "خدمات تقنية متكاملة من الفكرة والتصميم إلى التطوير والدعم." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ServicesPage });
function ServicesPage(){return <SiteLayout><PageIntro eyebrow="خدماتنا" title="كل ما يحتاجه مشروعك لينطلق بثقة." description="خدمات رقمية مترابطة، تُبنى حسب احتياج عملك وتجمع بين التقنية الحديثة والتجربة الواضحة." />
<section className="section-block"><div className="site-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({icon:Icon,title,description},i)=><article className="service-card" key={title}><span className="service-index">0{i+1}</span><Icon/><h2>{title}</h2><p>{description}</p><ul><li><Check/>تحليل واضح للاحتياج</li><li><Check/>تنفيذ قابل للتطوير</li><li><Check/>جودة وتجربة متناسقة</li></ul></article>)}</div></section>
<section className="section-block border-y border-border bg-surface-deep"><div className="site-container"><div className="text-center"><span className="eyebrow">رحلة المشروع</span><h2 className="section-title">منهج عمل يحافظ على<br/><span>وضوح كل خطوة.</span></h2></div><div className="mt-12 grid gap-4 md:grid-cols-4">{[{icon:Compass,t:"اكتشاف",d:"نفهم أهدافك والجمهور والتحدي."},{icon:PenTool,t:"تصميم",d:"نرسم التجربة ونختبر مساراتها."},{icon:Settings2,t:"تطوير",d:"نبني الحل بمعايير تقنية حديثة."},{icon:Rocket,t:"إطلاق",d:"نختبر ونطلق ونواصل التحسين."}].map(({icon:Icon,t,d},i)=><article className="journey-step" key={t}><span>0{i+1}</span><Icon/><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
<section className="compact-cta"><div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2>أي خدمة تناسب مشروعك؟</h2><p>نساعدك على تحديد الحل المناسب قبل البدء.</p></div><Button asChild size="lg" variant="premium"><Link to="/contact">اطلب استشارة <ArrowLeft/></Link></Button></div></section></SiteLayout>}
