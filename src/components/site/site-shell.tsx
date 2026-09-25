import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { brandAssets } from "@/components/site/brand-assets";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "عن مسور" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "مشاريعنا" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Brand() {
  return (
    <Link to="/" className="brand-link" aria-label="مسور المتطورة - الرئيسية">
      <img src={brandAssets.logo} alt="مسور" />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="site-header">
      <div className="site-container flex h-20 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className={`nav-link ${pathname === item.to ? "nav-link-active" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="premium" size="lg"><Link to="/contact">اطلب مشروعك <ArrowLeft /></Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="mobile-menu lg:hidden">
          <nav className="site-container flex flex-col gap-1 py-4" aria-label="التنقل للجوال">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="mobile-nav-link">{item.label}</Link>
            ))}
            <Button asChild variant="premium" className="mt-3"><Link to="/contact" onClick={() => setOpen(false)}>اطلب مشروعك <ArrowLeft /></Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border bg-surface-deep">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><Brand /><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">منظومة تقنية سعودية تحول احتياج الأعمال إلى منتجات رقمية وحلول ذكاء اصطناعي تصنع أثرًا قابلًا للقياس.</p></div>
        <div>
          <h2 className="text-sm font-bold text-foreground">روابط سريعة</h2>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link to="/services" className="footer-link">الخدمات</Link><Link to="/projects" className="footer-link">المشاريع</Link><Link to="/about" className="footer-link">عن الشركة</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-foreground">تواصل معنا</h2>
          <a href="tel:+966530044027" dir="ltr" className="mt-4 flex w-fit items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-primary"><Phone className="size-4 text-primary" /> 053 004 4027</a>
          <p className="mt-3 text-xs text-muted-foreground">الرقم الوطني الموحد: <span dir="ltr">7050514673</span></p>
        </div>
      </div>
      <div className="border-t border-border"><div className="site-container flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 مسور المتطورة. جميع الحقوق محفوظة.</span><span>صُنع في المملكة العربية السعودية</span></div></div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div dir="rtl" className="min-h-screen bg-background text-foreground"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="site-container"><span className="eyebrow">{eyebrow}</span><h1 className="page-title">{title}</h1><p className="page-description">{description}</p></div></section>;
}
