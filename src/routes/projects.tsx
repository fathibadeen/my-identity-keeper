import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";
import { projects } from "@/components/site/content";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteLayout } from "@/components/site/site-shell";
import { projectImages } from "@/components/site/project-images";
export const Route = createFileRoute("/projects")({ head: () => ({ meta: [
  { title: "مشاريعنا | مسور المتطورة" }, { name: "description", content: "استكشف مشاريع مسور المتطورة في الذكاء الاصطناعي والأسواق الرقمية والخدمات اللوجستية والقانونية." },
  { property: "og:title", content: "مشاريع مسور المتطورة" }, { property: "og:description", content: "منتجات وأنظمة رقمية صُممت لتترك أثرًا ملموسًا." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ProjectsPage });
function ProjectsPage(){return <SiteLayout><PageIntro eyebrow="مشاريعنا" title="منتجات رقمية بُنيت لتصنع أثرًا." description="مجموعة من الأنظمة والمنصات التي طورتها مسور لحل احتياجات حقيقية في قطاعات متنوعة." />
<section className="section-block"><div className="site-container grid gap-6 lg:grid-cols-2">{projects.map(({title,category,description,icon:Icon,number,accent},i)=><article key={title} className={`project-showcase project-${accent} ${projectImages[title]?"project-showcase-image":""} ${i===4?"lg:col-span-2":""}`}>{projectImages[title]&&<img src={projectImages[title]} alt={`واجهة مشروع ${title}`}/>}<div className="project-showcase-shade"/><div className="project-showcase-head"><span>{number}</span><div><Icon/><small>{category}</small></div></div><div className="project-showcase-copy"><h2>{title}</h2><p>{description}</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="glass"><Link to="/contact">اطلب مشروعًا مشابهًا <ArrowLeft/></Link></Button><Button asChild variant="ghost" size="icon"><Link to="/contact" aria-label={`استفسر عن ${title}`}><ArrowUpLeft/></Link></Button></div></div></article>)}</div></section>
<section className="compact-cta"><div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2>مشروعك قد يكون التالي</h2><p>نحوّل متطلباتك إلى منتج رقمي واضح وقابل للنمو.</p></div><Button asChild size="lg" variant="premium"><Link to="/contact">ابدأ مشروعك <ArrowLeft/></Link></Button></div></section></SiteLayout>}
