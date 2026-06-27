/*
  عدل بيانات الدعوة من هنا فقط.
  جميع النصوص والأزرار والروابط تعتمد على هذا الإعداد.
*/
const weddingConfig = {
  groomArabic: "عفيف",
  brideArabic: "ميسا",
  coupleEnglish: "Afif & Misa",
  monogramLeft: "A",
  monogramRight: "M",
  dateISO: "2026-08-29T17:00:00+02:00",
  dateArabic: "السبت 29 أغسطس 2026",
  dateFrench: "Samedi 29 août 2026",
  timeArabic: "الخامسة مساءً",
  timeFrench: "17h00",
  venueName: "Salle polyvalente des Cimes",
  venueAddress: "1261 Le Vaud, Switzerland",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Salle%20polyvalente%20des%20Cimes%201261%20Le%20Vaud%20Switzerland",
  whatsappNumber: "201000000000",
  whatsappMessage: "مرحباً، نؤكد حضورنا حفل زفاف عفيف وميسا بإذن الله.",
  defaultLang: "ar",
  calendarTitle: "Wedding Afif & Misa",
  calendarDetails: "Wedding invitation for Afif & Misa",
  calendarLocation: "Salle polyvalente des Cimes, 1261 Le Vaud, Switzerland"
};

const translations = {
  ar: {
    coverLabel: "دعوة زفاف فاخرة",
    coverTitle: "يسرنا دعوتكم لمشاركتنا أجمل أيام حياتنا",
    coverSubtitle: "حضوركم يضيف لفرحتنا معنى لا ينسى",
    openInvitation: "افتح الدعوة",
    heroLabel: "بكل الحب والسرور",
    heroText: "نتشرف بدعوتكم لحضور حفل زفافنا ومشاركتنا لحظات الفرح",
    dateLabel: "التاريخ",
    timeLabel: "الوقت",
    countdownTitle: "العد التنازلي للفرحة",
    days: "يوم",
    hours: "ساعة",
    minutes: "دقيقة",
    seconds: "ثانية",
    venueLabel: "مكان الحفل",
    mapButton: "افتح الموقع على الخريطة",
    atmosphereLabel: "الأجواء",
    atmosphereText: "ورود، شموع، وذهب فاخر",
    welcomeMessageTitle: "رسالة ترحيب",
    welcomeMessage: "بقلوب تغمرها السعادة، يسعدنا أن تشاركونا بداية حكايتنا الجديدة.",
    wishTitle: "عبارة تهنئة",
    wishText: "دعواتكم لنا بحياة يملؤها الحب والسكينة والبركة.",
    kidsTitle: "ملاحظة",
    kidsText: "نرجو منكم تفهم رغبتنا بإبقاء الحفل خالياً من الأطفال، شاكرين لكم تقديركم.",
    videoLabel: "فيديو الدعوة",
    videoTitle: "لحظة من الحلم",
    videoText: "ضع الفيديو داخل assets/video باسم wedding.mp4 وسيظهر هنا مباشرة.",
    rsvpTitle: "تأكيد الحضور",
    rsvpText: "يسعدنا تأكيد حضوركم عبر واتساب أو إضافة الموعد للتقويم.",
    calendarButton: "إضافة للتقويم",
    guestBookTitle: "اكتب تهنئتك للعروسين",
    sendWish: "إرسال التهنئة عبر واتساب",
    videoMissingTitle: "لم يتم إضافة الفيديو بعد",
    videoMissingText: "ارفع الفيديو باسم wedding.mp4 داخل مجلد assets/video.",
    footerText: "في انتظاركم لتكتمل فرحتنا بحضوركم"
  },
  fr: {
    coverLabel: "Invitation de mariage de luxe",
    coverTitle: "Nous avons le plaisir de vous inviter à partager le plus beau jour de notre vie",
    coverSubtitle: "Votre présence donnera à notre joie un souvenir inoubliable",
    openInvitation: "Ouvrir l'invitation",
    heroLabel: "Avec amour et bonheur",
    heroText: "Nous serions honorés de votre présence pour célébrer notre mariage.",
    dateLabel: "Date",
    timeLabel: "Heure",
    countdownTitle: "Compte à rebours",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    venueLabel: "Lieu de la cérémonie",
    mapButton: "Ouvrir la carte",
    atmosphereLabel: "Ambiance",
    atmosphereText: "Fleurs, bougies et touches dorées",
    welcomeMessageTitle: "Message d'accueil",
    welcomeMessage: "Le cœur rempli de joie, nous serons heureux de partager avec vous le début de notre nouvelle histoire.",
    wishTitle: "Vœux",
    wishText: "Vos prières et vos vœux seront notre plus beau cadeau.",
    kidsTitle: "Note",
    kidsText: "Nous vous remercions de respecter notre souhait de garder la célébration sans enfants.",
    videoLabel: "Vidéo d'invitation",
    videoTitle: "Un instant de rêve",
    videoText: "Ajoutez votre vidéo sous le nom wedding.mp4 dans assets/video pour l'afficher ici.",
    rsvpTitle: "Confirmation",
    rsvpText: "Merci de confirmer votre présence via WhatsApp ou d'ajouter la date à votre calendrier.",
    calendarButton: "Ajouter au calendrier",
    guestBookTitle: "Écrivez vos félicitations",
    sendWish: "Envoyer via WhatsApp",
    videoMissingTitle: "La vidéo n'a pas encore été ajoutée",
    videoMissingText: "Téléversez la vidéo sous le nom wedding.mp4 dans le dossier assets/video.",
    footerText: "Nous vous attendons pour compléter notre joie par votre présence"
  }
};

let currentLang = weddingConfig.defaultLang || "ar";
let audioStarted = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function pad(value, size = 2) {
  return String(value).padStart(size, "0");
}

function setText(selector, text) {
  const element = $(selector);
  if (element) element.textContent = text;
}

function applyConfig() {
  setText("#brideArabic", weddingConfig.brideArabic);
  setText("#groomArabic", weddingConfig.groomArabic);
  setText("#coupleEnglish", weddingConfig.coupleEnglish);
  setText("#footerCouple", weddingConfig.coupleEnglish);
  setText("#coverCouple", weddingConfig.coupleEnglish);
  setText("#monoA", weddingConfig.monogramLeft);
  setText("#monoM", weddingConfig.monogramRight);
  setText("#venueName", weddingConfig.venueName);
  setText("#venueAddress", weddingConfig.venueAddress);
  setText("#coverDate", formatCoverDate());
}

function formatCoverDate() {
  const eventDate = new Date(weddingConfig.dateISO);
  return `${pad(eventDate.getDate())} / ${pad(eventDate.getMonth() + 1)} / ${eventDate.getFullYear()}`;
}

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("fr", lang === "fr");

  $$('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });

  $$('[data-lang]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === lang);
  });

  setText("#eventDateText", lang === "ar" ? weddingConfig.dateArabic : weddingConfig.dateFrench);
  setText("#eventTimeText", lang === "ar" ? weddingConfig.timeArabic : weddingConfig.timeFrench);

  const guestName = $('#guestName');
  const guestMessage = $('#guestMessage');
  if (guestName) guestName.placeholder = lang === 'ar' ? guestName.dataset.placeholderAr : guestName.dataset.placeholderFr;
  if (guestMessage) guestMessage.placeholder = lang === 'ar' ? guestMessage.dataset.placeholderAr : guestMessage.dataset.placeholderFr;
}

function startCountdown() {
  const targetDate = new Date(weddingConfig.dateISO).getTime();

  function updateCountdown() {
    const now = Date.now();
    const diff = Math.max(0, targetDate - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setText('#days', pad(days, 3));
    setText('#hours', pad(hours));
    setText('#minutes', pad(minutes));
    setText('#seconds', pad(seconds));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function openInvitation() {
  const page = $('#invitationPage');
  if (page) page.scrollIntoView({ behavior: 'smooth' });
  tryStartAudio();
}

function tryStartAudio() {
  const audio = $('#weddingAudio');
  const button = $('#soundToggle');
  if (!audio || audioStarted) return;
  audio.volume = 0.45;
  audio.play()
    .then(() => {
      audioStarted = true;
      button?.classList.remove('muted');
    })
    .catch(() => {
      button?.classList.add('muted');
    });
}

function toggleAudio() {
  const audio = $('#weddingAudio');
  const button = $('#soundToggle');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      audioStarted = true;
      button?.classList.remove('muted');
    }).catch(() => button?.classList.add('muted'));
  } else {
    audio.pause();
    button?.classList.add('muted');
  }
}

function openMap() {
  window.open(weddingConfig.mapUrl, '_blank', 'noopener,noreferrer');
}

function buildWhatsappLink(message) {
  const cleanNumber = weddingConfig.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

function confirmWhatsapp() {
  const message = currentLang === 'ar'
    ? weddingConfig.whatsappMessage
    : "Bonjour, nous confirmons notre présence au mariage de Afif et Misa.";
  window.open(buildWhatsappLink(message), '_blank', 'noopener,noreferrer');
}

function submitGuestMessage(event) {
  event.preventDefault();
  const name = $('#guestName')?.value.trim() || '';
  const wish = $('#guestMessage')?.value.trim() || '';
  const message = currentLang === 'ar'
    ? `تهنئة للعروسين عفيف وميسا%0Aالاسم: ${name || 'ضيف'}%0Aالرسالة: ${wish || 'أجمل التهاني والتبريكات'}`
    : `Félicitations à Afif et Misa%0ANom: ${name || 'Invité'}%0AMessage: ${wish || 'Toutes nos félicitations'}`;
  window.open(buildWhatsappLink(message), '_blank', 'noopener,noreferrer');
}

function googleCalendarLink() {
  const start = new Date(weddingConfig.dateISO);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const toCalendarFormat = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: weddingConfig.calendarTitle,
    dates: `${toCalendarFormat(start)}/${toCalendarFormat(end)}`,
    details: weddingConfig.calendarDetails,
    location: weddingConfig.calendarLocation
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function addToCalendar() {
  window.open(googleCalendarLink(), '_blank', 'noopener,noreferrer');
}

function openVideo() {
  const modal = $('#videoModal');
  const video = $('#weddingVideo');
  modal?.classList.add('is-open');
  modal?.setAttribute('aria-hidden', 'false');
  if (video) {
    video.currentTime = 0;
    video.play().catch(() => {});
  }
}

function closeVideo() {
  const modal = $('#videoModal');
  const video = $('#weddingVideo');
  modal?.classList.remove('is-open');
  modal?.setAttribute('aria-hidden', 'true');
  if (video) video.pause();
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  $$('.reveal').forEach((section) => observer.observe(section));
}

function setupCursorGlow() {
  const glow = $('.cursor-glow');
  if (!glow) return;
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

function bindEvents() {
  $('#openInvitation')?.addEventListener('click', openInvitation);
  $('#soundToggle')?.addEventListener('click', toggleAudio);
  $('#scrollTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#mapButton')?.addEventListener('click', openMap);
  $('#whatsappButton')?.addEventListener('click', confirmWhatsapp);
  $('#calendarButton')?.addEventListener('click', addToCalendar);
  $('#videoButton')?.addEventListener('click', openVideo);
  $('#videoButton')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') openVideo();
  });
  $('#closeVideo')?.addEventListener('click', closeVideo);
  $('#closeVideoBackdrop')?.addEventListener('click', closeVideo);
  $('#guestForm')?.addEventListener('submit', submitGuestMessage);

  $$('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeVideo();
  });
}

function init() {
  applyConfig();
  applyLanguage(currentLang);
  startCountdown();
  bindEvents();
  revealOnScroll();
  setupCursorGlow();
}

document.addEventListener('DOMContentLoaded', init);
