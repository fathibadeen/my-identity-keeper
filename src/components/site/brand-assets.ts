import meswarLogoDark from "@/assets/brand/meswar-logo-2026-11.png.asset.json";
import aiConsulting from "@/assets/partners/ai-consulting.png.asset.json";
import sawtiAi from "@/assets/partners/sawti-meswar-logo.jpeg.asset.json";

export const brandAssets = {
  logo: meswarLogoDark.url,
};

export const partners = [
  {
    name: "استشارات الذكاء",
    image: aiConsulting.url,
    description: "نكتشف فرص الذكاء الاصطناعي داخل شركتك، ونحوّلها إلى أولويات واضحة وخطة تنفيذ عملية.",
    href: "https://meswar.com/Agent/",
    action: "ابدأ التقييم",
  },
  {
    name: "صوتي مسور",
    image: sawtiAi.url,
    description: "وكيل صوتي ذكي يتحدث العربية، يستقبل عملاءك ويمنحهم استجابة أسرع وتجربة أكثر طبيعية.",
    href: "https://www.sawti-ai.com/",
    action: "اكتشف صوتي",
  },
  {
    name: "مسور",
    image: meswarLogoDark.url,
    description: "المظلة التقنية التي تربط الفكرة والاستشارة بالتصميم والتطوير، حتى يصبح الحل منتجًا قابلًا للنمو.",
    href: "/about",
    action: "تعرف على مسور",
  },
] as const;