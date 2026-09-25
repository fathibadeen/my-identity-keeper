import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";
import { projects } from "@/components/site/content";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteLayout } from "@/components/site/site-shell";
import { projectImages } from "@/components/site/project-images";
export const Route = createFileRoute("/projects")({ head: () => ({
  meta: [
    { title: "مشاريع مسور | منصات رقمية وحلول ذكاء اصطناعي" }, { name: "description", content: "استكشف مشاريع مسور المتطورة في الذكاء الاصطناعي والأسواق الرقمية والخدمات اللوجستية والقانونية، ومن بينها صوتي واستشارتك." },
    { property: "og:title", content: "مشاريع مسور | منتجات رقمية تصنع أثرًا" }, { property: "og:description", content: "منصات وأنظمة وحلول ذكاء اصطناعي طورتها مسور لخدمة احتياجات حقيقية في قطاعات متنوعة." }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://meswar.com/projects" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "مشاريع مسور المتطورة" }, { name: "twitter:description", content: "منتجات رقمية وأنظمة وحلول ذكاء اصطناعي مبنية للنمو." },
  ],
  links: [{ rel: "canonical", href: "https://meswar.com/projects" }],
  scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "مشاريع مسور المتطورة", url: "https://meswar.com/projects", inLanguage: "ar", mainEntity: { "@type": "ItemList", itemListElement: projects.map((project, index) => ({ "@type": "ListItem", position: index + 1, name: project.title, description: project.description, ...(project.url ? { url: project.url } : {}) })) } }) }],
}), component: ProjectsPage });
function ProjectsPage(){return <SiteLayout><PageIntro eyebrow="مشاريعنا" title="منتجات رقمية بُنيت لتصنع أثرًا." description="مجموعة من الأنظمة والمنصات التي طورتها مسور لحل احتياجات حقيقية في قطاعات متنوعة." />
<section className="section-block"><div className="site-container grid gap-6 lg:grid-cols-2">{projects.map(({title,category,description,icon:Icon,number,accent,url},i)=><article key={title} className={`project-showcase project-${accent} ${projectImages[title]?"project-showcase-image":""} ${i===4?"lg:col-span-2":""}`}>{projectImages[title]&&<img src={projectImages[title]} alt={`واجهة مشروع ${title}`}/>}<div className="project-showcase-shade"/><div className="project-showcase-head"><span>{number}</span><div><Icon/><small>{category}</small></div></div><div className="project-showcase-copy"><h2>{title}</h2><p>{description}</p><div className="mt-8 flex flex-wrap gap-3">{url&&<Button asChild variant="premium"><a href={url} target="_blank" rel="noreferrer">زيارة المشروع <ArrowUpLeft/></a></Button>}<Button asChild variant="glass"><Link to="/contact">اطلب مشروعًا مشابهًا <ArrowLeft/></Link></Button></div></div></article>)}</div></section>
<section className="compact-cta"><div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2>مشروعك قد يكون التالي</h2><p>نحوّل متطلباتك إلى منتج رقمي واضح وقابل للنمو.</p></div><Button asChild size="lg" variant="premium"><Link to="/contact">ابدأ مشروعك <ArrowLeft/></Link></Button></div></section></SiteLayout>}
