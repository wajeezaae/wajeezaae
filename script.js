(function () {
  var AR = {
    brandSub: "للطباعة والاستوديو", navServices: "خدماتنا", navPopular: "الأكثر طلباً", navProcess: "كيف نعمل", navContact: "تواصل معنا",
    whatsapp: "واتساب",
    eyebrow: "شركات، العين · الإمارات العربية المتحدة",
    h1a: "معاملاتك الحكومية،", h1b: "بكل سهولة.",
    lead: "من الهوية الإماراتية وتأشيرات العائلة إلى الترجمة المعتمدة وتجديد الملكية، نتولى نحن النماذج والطوابير والمتابعة نيابة عنك.",
    ctaWa: "تواصل عبر واتساب", ctaCall: "اتصل الآن",
    pt1: "خدمة سريعة", pt2: "استلام وتوصيل", pt3: "العربية والإنجليزية",
    hcTitle: "الأكثر طلباً", hcPill: "متاحون للاستفسار",
    hc1t: "تأشيرة عائلية", hc1d: "من فتح الملف حتى الهوية والختم",
    hc2t: "تغيير التأشيرة بالباص", hc2d: "تأشيرة زيارة ورسوم الحدود وتذاكر الباص",
    hc3t: "تجديد الملكية", hc3d: "مع خدمة الاستلام والتوصيل",
    hc4t: "ترجمة معتمدة", hc4d: "قانونية وفنية وتعليمية",
    s1b: "العين", s1s: "شركات، بالقرب من مدرسة الإمارات لتعليم القيادة مزيد",
    s2b: "+12", s2s: "مجال للخدمات الحكومية والتجارية",
    s3b: "2", s3s: "اللغات: العربية والإنجليزية",
    s4b: "فريق واحد", s4s: "مكان واحد للطباعة والتأشيرات والترجمة",
    svEyebrow: "خدماتنا", svTitle: "كل ما تحتاجه معاملاتك تحت سقف واحد",
    svSub: "خدمات مركز الطباعة والاستوديو للأفراد والعائلات والشركات في جميع أنحاء الإمارات.",
    v1t: "خدمات مندوب", v1d: "أعمال المندوب والتجديدات والمتابعة الحكومية نيابة عنك.",
    v2t: "هوية إماراتية", v2d: "طلبات جديدة وتجديد وبدل فاقد.",
    v3t: "هيئة الصحة", v3d: "إجراءات الفحص الطبي والبطاقة الصحية والتأمين.",
    v4t: "إدارة المرور", v4d: "ملكية جديدة وتجديد ودعم تسجيل المركبات.",
    v5t: "وزارة العمل", v5d: "تصاريح العمل والعقود ومعاملات العمل.",
    v6t: "دائرة الهجرة", v6d: "تصاريح الدخول وتغيير الحالة وإجراءات الإقامة.",
    v7t: "عملية التأشيرة", v7d: "تأشيرات الزيارة والسياحة والإقامة من البداية للنهاية.",
    v8t: "إعداد الأعمال", v8d: "دعم الترخيص وتأسيس الشركات.",
    v9t: "خدمات عبر الإنترنت", v9d: "تقديم الطلبات والطباعة عبر البوابات الحكومية رقمياً.",
    v10t: "تخليص المعاملات", v10d: "تخليص المعاملات للأفراد والشركات.",
    v11t: "ترجمة", v11d: "ترجمة قانونية معتمدة، دقيقة وفي الموعد.",
    v12t: "تصديق", v12d: "دعم تصديق الشهادات والمستندات.",
    pEyebrow: "الباقات الشائعة", pTitle: "الخدمات الأكثر طلباً",
    p1tag: "عائلة", p1t: "تأشيرة عائلية للإمارات", p1d: "قرّب أحباءك منك بحلول تأشيرة عائلية سريعة وموثوقة وبأسعار مناسبة.",
    p1a: "فتح ملف وتصريح دخول", p1b: "تغيير الحالة", p1c: "الفحص الطبي والتأمين الصحي", p1d2: "الهوية الإماراتية وختم التأشيرة", p1e: "تأشيرة مولود جديد", p1f: "تأشيرة خادمة وزيارة عائلية",
    askNow: "اسأل عبر واتساب ←", bookNow: "احجز عبر واتساب ←",
    p2tag: "سفر", p2t: "تغيير التأشيرة بالباص", p2d: "طريقة سهلة ومريحة لتغيير حالة تأشيرة الزيارة.",
    p2a: "تأشيرة زيارة 30 / 60 يوماً", p2b: "إقامة ليوم واحد", p2c: "رسوم الحدود", p2d2: "تذكرة باص ذهاب وإياب",
    p3tag: "سياحة", p3t: "تأشيرة سياحية سعودية", p3d: "تحلم بزيارة السعودية؟ احصل على تأشيرتك السياحية بسرعة وسهولة.",
    p3a: "صورة جواز السفر", p3b: "الهوية الإماراتية", p3c: "صورة شخصية", p3d2: "مدة المعالجة المعتادة: 4 إلى 5 أيام عمل",
    p4tag: "مركبات", p4t: "ملكية جديدة وتجديد", p4d: "جدد تسجيل مركبتك بدون عناء.",
    p4a: "خدمة سريعة", p4b: "استلام وتوصيل", p4c: "أفضل سعر",
    p5tag: "ترجمة", p5t: "ترجمة قانونية معتمدة", p5d: "المستندات القانونية تحتاج أكثر من كلمات. نقدم ترجمات معتمدة تلبي متطلباتك في الوقت المحدد.",
    p5a: "مستندات تجارية وقانونية", p5b: "مستندات مالية وفنية", p5c: "شهادات تعليمية", p5d2: "محتوى إعلامي وتسويقي", p5e: "تقارير إعلامية",
    prEyebrow: "كيف نعمل", prTitle: "ثلاث خطوات بسيطة",
    st1t: "أخبرنا بما تحتاجه", st1d: "راسلنا عبر واتساب أو اتصل بنا وشاركنا الخدمة ومستنداتك.",
    st2t: "نتولى الإجراءات", st2d: "يتولى فريقنا الطباعة والطلبات والمتابعة.",
    st3t: "استلم أو اطلب التوصيل", st3d: "استلم من مكتبنا في العين، أو اسأل عن التوصيل حيثما توفر.",
    cEyebrow: "تواصل معنا", cTitle: "زرنا أو راسلنا اليوم", cSub: "أخبرنا بما تحتاجه وسنرشدك إلى المستندات المطلوبة.",
    cWa: "واتساب", cMob: "الجوال", cLand: "المكتب", cMail: "البريد الإلكتروني", cAddr: "العنوان",
    addr: "شركات، العين، أبوظبي، الإمارات. بالقرب من مدرسة الإمارات لتعليم القيادة مزيد.",
    dir: "احصل على الاتجاهات",
    fTitle: "أرسل لنا رسالة سريعة", fName: "اسمك", fSvc: "الخدمة المطلوبة", fMsg: "رسالة (اختياري)",
    o1: "تأشيرة عائلية", o2: "تغيير التأشيرة بالباص", o3: "تأشيرة سياحية سعودية", o4: "تجديد الملكية", o5: "هوية إماراتية", o6: "ترجمة / تصديق", o7: "إعداد أعمال / خدمات مندوب", o8: "أخرى",
    fSend: "إرسال عبر واتساب", fNote: "سيفتح واتساب مع رسالتك جاهزة للإرسال.",
    fTag: "للطباعة والاستوديو · بكل سهولة", rights: "جميع الحقوق محفوظة."
  };

  var els = document.querySelectorAll("[data-i18n]");
  els.forEach(function (el) { el.dataset.en = el.innerHTML; });

  var btn = document.getElementById("langBtn");
  var cur = "en";
  try { if (localStorage.getItem("wj-lang") === "ar") setLang("ar"); } catch (e) {}

  function setLang(l) {
    cur = l;
    var ar = l === "ar";
    document.documentElement.lang = l;
    document.documentElement.dir = ar ? "rtl" : "ltr";
    els.forEach(function (el) {
      var k = el.dataset.i18n;
      el.innerHTML = ar && AR[k] ? AR[k] : el.dataset.en;
    });
    btn.textContent = ar ? "English" : "العربية";
    try { localStorage.setItem("wj-lang", l); } catch (e) {}
  }
  btn.addEventListener("click", function () { setLang(cur === "en" ? "ar" : "en"); });

  // nav
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("solid", window.scrollY > 20); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var burger = document.getElementById("burger"), menu = document.getElementById("menu");
  burger.addEventListener("click", function () {
    var o = menu.classList.toggle("open");
    nav.classList.toggle("menu-open", o);
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); nav.classList.remove("menu-open"); });
  });

  // reveal
  var targets = document.querySelectorAll(".card,.pcard,.steps li,.sec-head,.c-form,.c-info,.strip-in div");
  targets.forEach(function (t) { t.classList.add("rv"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  } else { targets.forEach(function (t) { t.classList.add("in"); }); }

  // WhatsApp form
  document.getElementById("waForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var msg = "Hello Wajeeza, my name is " + f.name.value + ". I need help with: " + f.service.value + "." + (f.msg.value ? " " + f.msg.value : "");
    window.open("https://wa.me/971566075854?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  document.getElementById("yr").textContent = new Date().getFullYear();
})();
