import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Home, Mic, MessageCircle, Scale, Stethoscope, UtensilsCrossed } from "lucide-react";
import clinic from "@/assets/sectors/clinic.jpg";
import law from "@/assets/sectors/law.jpg";
import realestate from "@/assets/sectors/realestate.jpg";
import restaurant from "@/assets/sectors/restaurant.jpg";

const sectors = [
  { icon: Stethoscope, image: clinic, title: "العيادات والمراكز الطبية", badge: "الأكثر طلبًا", pain: "مواعيد ضائعة ومكالمات بلا رد وقت الذروة.", channel: "مكالمة", ChannelIcon: Mic, status: "رد فوري", ask: "أحتاج موعد أسنان بكرة", reply: "تم تأكيد موعدك غدًا 4:00م مع الطبيب وأرسلنا الموقع 📍", points: ["حجز وتعديل المواعيد حسب جدول كل طبيب", "تذكير قبل 24 ساعة وساعتين لتقليل التغيب", "تحويل الحالات الطارئة فورًا لموظف"] },
  { icon: Scale, image: law, title: "مكاتب المحاماة والاستشارات", badge: "سرية تامة", pain: "اتصالات العملاء تضيع أثناء الجلسات والاجتماعات.", channel: "واتساب", ChannelIcon: MessageCircle, status: "24/7", ask: "عندي استشارة عمالية مستعجلة", reply: "سجّلنا التفاصيل وحجزنا لك استشارة اليوم ⏳", points: ["استقبال الاستشارات الأولية وجمع بيانات القضية", "جدولة مواعيد مع المحامي المختص", "رد 24/7 بأسلوب مهني"] },
  { icon: Home, image: realestate, title: "العقارات وإدارة الأملاك", badge: "عملاء جادّون", pain: "تأخر الرد على المهتمين بالإعلانات يضيّع الصفقة.", channel: "واتساب", ChannelIcon: MessageCircle, status: "رد فوري", ask: "مهتم بالفيلا المعروضة", reply: "أرسلنا التفاصيل والموقع. تحب نحجز موعد معاينة؟ 🏡", points: ["فرز العملاء الجادين تلقائيًا", "حجز مواعيد المعاينة", "إرسال تفاصيل العقار عبر واتساب"] },
  { icon: UtensilsCrossed, image: restaurant, title: "المطاعم والمقاهي", badge: "وقت الذروة", pain: "ضغط المكالمات وطلبات الحجز في وقت الذروة.", channel: "مكالمة", ChannelIcon: Mic, status: "رد فوري", ask: "حجز طاولة لـ4 الجمعة", reply: "تم تأكيد حجزك الجمعة وأرسلنا المنيو ✅", points: ["تأكيد حجوزات الطاولات", "إرسال المنيو والموقع", "الرد على الأسئلة المتكررة"] },
];

export function SectorsSection() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    setStep(0);
    const a = setTimeout(() => setStep(1), 500), b = setTimeout(() => setStep(2), 1700);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [active]);
  const s = sectors[active] ?? sectors[0]!;

  return <section className="section-block sectors-section">
    <div className="site-container">
      <span className="eyebrow">حلول حسب قطاعك</span>
      <h2 className="section-title">حلول مصممة<br /><span>لنشاطك.</span></h2>
      <p className="section-lead mt-5">اختر قطاعك واكتشف كيف يرد «صوتي» على عملائك فعليًا.</p>
      <div className="sector-stats"><div><strong>2 ث</strong><span>متوسط زمن الرد</span></div><div><strong>24/7</strong><span>بدون توقف</span></div><div><strong>+80%</strong><span>مكالمات مُجابة</span></div></div>
      <div className="sector-tabs" role="tablist">
        {sectors.map(({ icon: Icon, title }, i) => <button key={title} role="tab" aria-selected={i === active} className="sector-tab" onClick={() => setActive(i)}><Icon />{title}</button>)}
      </div>
      <div className="sector-panel" key={active}>
        <div className="sector-media"><img src={s.image} alt={s.title} loading="lazy" width={1024} height={768} /><span className="sector-badge">{s.badge}</span></div>
        <div className="sector-body">
          <h3>{s.title}</h3><p>{s.pain}</p>
          <div className="sector-chat">
            <div className="sector-chat-head"><span><s.ChannelIcon /> {s.channel}</span><span><i className="status-dot" /> {s.status}</span></div>
            {step >= 1 && <div className="bubble bubble-in">{s.ask}</div>}
            {step === 1 && <div className="bubble bubble-out typing"><i /><i /><i /></div>}
            {step >= 2 && <div className="bubble bubble-out">{s.reply}</div>}
          </div>
          <ul>{s.points.map((p) => <li key={p}><Check />{p}</li>)}</ul>
          <Link to="/contact" className="partner-link">اطلب تجربة مخصصة <ArrowLeft /></Link>
        </div>
      </div>
    </div>
  </section>;
}
