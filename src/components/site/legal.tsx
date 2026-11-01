import { PageIntro, SiteLayout } from "@/components/site/site-shell";

export type LegalSection = { title: string; body: string[] };

export function LegalPage({ eyebrow, title, description, sections }: { eyebrow: string; title: string; description: string; sections: LegalSection[] }) {
  return (
    <SiteLayout>
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      <section className="section-block pt-0">
        <div className="site-container max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <article key={s.title} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">{i + 1}. {s.title}</h2>
              {s.body.map((p) => <p key={p} className="leading-8 text-muted-foreground">{p}</p>)}
            </article>
          ))}
          <p className="border-t border-border pt-6 text-sm text-muted-foreground">آخر تحديث: نوفمبر 2026 — مسور المتطورة، الرقم الوطني الموحد <span dir="ltr">7050514673</span>، للتواصل: <a href="tel:+966530044027" dir="ltr" className="text-primary">053 004 4027</a></p>
        </div>
      </section>
    </SiteLayout>
  );
}

export function legalHead(path: string, title: string, description: string) {
  const url = `https://meswar.com${path}`;
  return {
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
