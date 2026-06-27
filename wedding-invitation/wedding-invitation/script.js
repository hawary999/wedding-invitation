/*
  Wedding Invitation Configuration
  عدل بيانات الدعوة من هنا فقط، وسيتم تحديث الموقع بالكامل.
*/
const weddingConfig = {
  groomArabic: "عفيف",
  brideArabic: "ميسا",
  coupleEnglish: "Afif & Misa",
  monogramLeft: "A",
  monogramRight: "M",

  // Switzerland summer time is UTC+02:00 on 29 August 2026.
  eventDateISO: "2026-08-29T17:00:00+02:00",
  eventEndISO: "2026-08-29T22:00:00+02:00",

  dateTextAr: "السبت 29 أغسطس 2026",
  dateTextFr: "Samedi 29 août 2026",
  timeTextAr: "الخامسة مساءً",
  timeTextFr: "17h00",

  venueName: "Salle polyvalente des Cimes",
  venueAddress: "1261 Le Vaud\nSwitzerland",
  mapURL: "https://www.google.com/maps/search/?api=1&query=Salle%20polyvalente%20des%20Cimes%201261%20Le%20Vaud%20Switzerland",

  // ضع رقم واتساب بصيغة دولية بدون + مثال: 201000000000
  // اتركه فارغاً لفتح واتساب برسالة جاهزة فقط.
  whatsappNumber: "",
  whatsappMessageAr: "مرحباً، نؤكد حضورنا حفل زفاف عفيف وميسا بإذن الله.",
  whatsappMessageFr: "Bonjour, nous confirmons notre présence au mariage d’Afif et Misa.",

  // يمكن استبدال الملفات داخل هذه المسارات.
  venueImage: "assets/images/venue-placeholder.svg",
  videoSrc: "assets/video/wedding.mp4",
  musicSrc: "assets/audio/wedding-music.mp3",

  defaultLang: "ar"
};

const translations = {
  ar: {
    coverInvite: "يسرنا دعوتكم",
    coverShare: "لمشاركتنا أجمل أيام حياتنا",
    enterInvitation: "دخول الدعوة",
    weddingInvitation: "دعوة زفاف",
    remainingTime: "الوقت المتبقي",
    days: "يوم",
    hours: "ساعة",
    minutes: "دقيقة",
    seconds: "ثانية",
    partyDetails: "تفاصيل الحفل",
    openMap: "عرض على الخريطة",
    invitationVideo: "فيديو الدعوة",
    videoMemory: "ذكرى تبقى للأبد",
    watchVideo: "مشاهدة الفيديو",
    rsvpNote: "نرجو تأكيد حضوركم لنحجز لكم مكاناً خاصاً",
    confirmWhatsapp: "تأكيد الحضور عبر واتساب",
    addCalendar: "إضافة إلى التقويم",
    childrenIntro: "نرجو منكم تفهم رغبتنا",
    childrenFree: "بإبقاء الحفل خالياً من الأطفال،",
    childrenThanks: "شاكرين لكم تعاونكم وتقديركم",
    fallbackVideoTitle: "فيديو الدعوة",
    fallbackVideoText: "ضع ملف الفيديو باسم wedding.mp4 داخل مجلد assets/video ليعمل هنا مباشرة."
  },
  fr: {
    coverInvite: "Nous avons le plaisir de vous inviter",
    coverShare: "à partager le plus beau jour de notre vie",
    enterInvitation: "Ouvrir l’invitation",
    weddingInvitation: "Invitation de mariage",
    remainingTime: "Temps restant",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    partyDetails: "Détails de la cérémonie",
    openMap: "Voir sur la carte",
    invitationVideo: "Vidéo d’invitation",
    videoMemory: "Un souvenir pour toujours",
    watchVideo: "Regarder la vidéo",
    rsvpNote: "Merci de confirmer votre présence afin de vous réserver une place spéciale",
    confirmWhatsapp: "Confirmer via WhatsApp",
    addCalendar: "Ajouter au calendrier",
    childrenIntro: "Nous vous remercions de comprendre notre souhait",
    childrenFree: "de célébrer sans enfants,",
    childrenThanks: "merci pour votre coopération et votre considération",
    fallbackVideoTitle: "Vidéo d’invitation",
    fallbackVideoText: "Ajoutez votre fichier nommé wedding.mp4 dans assets/video pour l’afficher ici."
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const welcomeScreen = $("#welcomeScreen");
const invitationScreen = $("#invitationScreen");
const enterBtn = $("#enterBtn");
const musicBtn = $("#musicBtn");
const mapBtn = $("#mapBtn");
const whatsappBtn = $("#whatsappBtn");
const calendarBtn = $("#calendarBtn");
const topBtn = $("#topBtn");
const videoBtn = $("#videoBtn");
const videoPlayIcon = $("#videoPlayIcon");
const videoModal = $("#videoModal");
const closeVideo = $("#closeVideo");
const weddingVideo = $("#weddingVideo");

let currentLang = weddingConfig.defaultLang;
let audio = null;
let audioContext = null;
let generatedNodes = [];
let isMusicPlaying = false;

function init() {
  applyConfig();
  setLanguage(weddingConfig.defaultLang);
  startCountdown();
  setInterval(startCountdown, 1000);
  setupReveal();
  bindEvents();
  setTimeout(() => $$(".reveal").forEach((item) => item.classList.add("show")), 120);
}

function applyConfig() {
  $("#groomNameAr").textContent = weddingConfig.groomArabic;
  $("#brideNameAr").textContent = weddingConfig.brideArabic;
  $("#coupleNameEn").textContent = weddingConfig.coupleEnglish;
  $("#venueName").textContent = weddingConfig.venueName;
  $("#venueAddress").innerHTML = weddingConfig.venueAddress.replace(/\n/g, "<br>");
  $("#venueImage").src = weddingConfig.venueImage;
  $("#venueImage").alt = weddingConfig.venueName;
  $("#monoLeft").textContent = weddingConfig.monogramLeft;
  $("#monoRight").textContent = weddingConfig.monogramRight;

  const seal = document.querySelector(".seal");
  if (seal) seal.innerHTML = `${weddingConfig.monogramLeft}<br>${weddingConfig.monogramRight}`;

  const footerSpans = document.querySelectorAll(".cover-footer span");
  if (footerSpans[0]) footerSpans[0].textContent = weddingConfig.coupleEnglish;
  if (footerSpans[1]) footerSpans[1].textContent = formatFooterDate(weddingConfig.eventDateISO);

  const source = weddingVideo.querySelector("source");
  if (source) source.src = weddingConfig.videoSrc;

  audio = new Audio(weddingConfig.musicSrc);
  audio.loop = true;
  audio.volume = 0.52;
  audio.addEventListener("error", () => {
    if (isMusicPlaying && !audioContext) startGeneratedMusic();
  });
}

function bindEvents() {
  enterBtn.addEventListener("click", () => {
    welcomeScreen.classList.remove("active");
    invitationScreen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    $$(".invitation-screen .reveal").forEach((item, index) => {
      setTimeout(() => item.classList.add("show"), index * 90);
    });
  });

  $$(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  musicBtn.addEventListener("click", toggleMusic);

  mapBtn.addEventListener("click", () => {
    window.open(weddingConfig.mapURL, "_blank", "noopener,noreferrer");
  });

  whatsappBtn.addEventListener("click", () => {
    const message = currentLang === "fr" ? weddingConfig.whatsappMessageFr : weddingConfig.whatsappMessageAr;
    const base = weddingConfig.whatsappNumber
      ? `https://wa.me/${weddingConfig.whatsappNumber}`
      : "https://wa.me/";
    window.open(`${base}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });

  calendarBtn.addEventListener("click", () => {
    window.open(buildGoogleCalendarURL(), "_blank", "noopener,noreferrer");
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  [videoBtn, videoPlayIcon].forEach((element) => {
    element.addEventListener("click", openVideoModal);
  });

  closeVideo.addEventListener("click", closeVideoModal);
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) closeVideoModal();
  });

  weddingVideo.addEventListener("canplay", () => {
    videoModal.classList.remove("fallback");
  });

  weddingVideo.addEventListener("error", () => {
    videoModal.classList.add("fallback");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoModal.classList.contains("active")) closeVideoModal();
  });
}

function setLanguage(lang) {
  currentLang = lang === "fr" ? "fr" : "ar";
  const dictionary = translations[currentLang];

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  $("#eventDateText").textContent = currentLang === "fr" ? weddingConfig.dateTextFr : weddingConfig.dateTextAr;
  $("#eventTimeText").textContent = currentLang === "fr" ? weddingConfig.timeTextFr : weddingConfig.timeTextAr;

  $$(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
}

function startCountdown() {
  const eventTime = new Date(weddingConfig.eventDateISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, eventTime - now);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / second);

  $("#days").textContent = String(days).padStart(3, "0");
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
}

async function toggleMusic() {
  if (isMusicPlaying) {
    stopMusic();
    return;
  }

  isMusicPlaying = true;
  musicBtn.classList.add("playing");

  try {
    await audio.play();
  } catch (error) {
    startGeneratedMusic();
  }
}

function stopMusic() {
  isMusicPlaying = false;
  musicBtn.classList.remove("playing");

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  generatedNodes.forEach((node) => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (_) {}
  });

  generatedNodes = [];

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

// موسيقى كلاسيكية بسيطة مولدة تلقائياً كبديل، حتى يعمل الزر بدون ملف صوت.
function startGeneratedMusic() {
  if (!isMusicPlaying || audioContext) return;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  audioContext = new AudioCtx();
  const master = audioContext.createGain();
  master.gain.value = 0.045;
  master.connect(audioContext.destination);

  const notes = [261.63, 329.63, 392.0, 523.25];
  notes.forEach((frequency, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = index % 2 ? "triangle" : "sine";
    osc.frequency.value = frequency;
    gain.gain.value = index < 2 ? 0.42 : 0.18;
    osc.connect(gain);
    gain.connect(master);
    osc.start();
    generatedNodes.push(osc, gain);
  });

  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  lfo.frequency.value = 0.08;
  lfoGain.gain.value = 0.015;
  lfo.connect(lfoGain);
  lfoGain.connect(master.gain);
  lfo.start();
  generatedNodes.push(lfo, lfoGain, master);
}

function openVideoModal() {
  videoModal.classList.add("active");
  videoModal.classList.add("fallback");

  weddingVideo.load();
  weddingVideo
    .play()
    .then(() => {
      videoModal.classList.remove("fallback");
    })
    .catch(() => {
      videoModal.classList.add("fallback");
    });
}

function closeVideoModal() {
  videoModal.classList.remove("active");
  weddingVideo.pause();
}

function buildGoogleCalendarURL() {
  const start = toGoogleDate(new Date(weddingConfig.eventDateISO));
  const end = toGoogleDate(new Date(weddingConfig.eventEndISO));
  const title = currentLang === "fr"
    ? `Mariage ${weddingConfig.coupleEnglish}`
    : `حفل زفاف ${weddingConfig.groomArabic} و${weddingConfig.brideArabic}`;

  const details = currentLang === "fr"
    ? "Nous serions heureux de partager cette journée spéciale avec vous."
    : "يسعدنا مشاركتكم أجمل أيام حياتنا.";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    details,
    location: `${weddingConfig.venueName}, ${weddingConfig.venueAddress.replace(/\n/g, ", ")}`
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function toGoogleDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function formatFooterDate(isoDate) {
  const date = new Date(isoDate);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach((item) => item.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.15 });

  $$(".reveal").forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", init);
