# Luxury Wedding Invitation

موقع دعوة زفاف فاخر بالوردي والذهبي، مبني بـ HTML + CSS + JavaScript فقط، وجاهز للنشر على Vercel أو GitHub Pages.

## تعديل معلومات الدعوة

افتح ملف:

```txt
script.js
```

وعدّل البيانات داخل object اسمه:

```js
weddingConfig
```

يمكنك تغيير:

- اسم العريس
- اسم العروس
- التاريخ والوقت
- القاعة والعنوان
- رابط الخريطة
- رقم واتساب
- رسالة واتساب
- صورة القاعة
- ملف الفيديو
- ملف الموسيقى
- اللغة الافتراضية

## إضافة فيديو الدعوة

ضع الفيديو هنا:

```txt
assets/video/wedding.mp4
```

وسيعمل زر “مشاهدة الفيديو” مباشرة.

## إضافة الموسيقى

ضع ملف الموسيقى هنا:

```txt
assets/audio/wedding-music.mp3
```

إذا لم تضف ملف موسيقى، سيعمل زر الموسيقى بموسيقى ناعمة مولدة تلقائياً كبديل.

## تغيير صورة القاعة

ضع صورة القاعة مثلاً:

```txt
assets/images/venue.jpg
```

ثم في `script.js` غيّر:

```js
venueImage: "assets/images/venue.jpg"
```

## النشر على Vercel

1. افتح Vercel.
2. اضغط Add New Project.
3. اختر مستودع GitHub الذي يحتوي على الملفات.
4. اضغط Deploy.
5. سيتم إنشاء رابط مباشر للموقع.

## الملفات

- `index.html`
- `style.css`
- `script.js`
- `assets/images/venue-placeholder.svg`
- `assets/video/README.md`
- `assets/audio/README.md`
