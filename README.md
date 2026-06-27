# Luxury Wedding Invitation - Afif & Misa

نسخة مطورة وفاخرة من موقع دعوة الزفاف بالوردي والذهبي، مستوحاة من الصور المرجعية المرفقة.

## طريقة التعديل

كل بيانات الدعوة موجودة في بداية ملف:

```js
script.js
```

ابحث عن:

```js
const weddingConfig = {
```

وعدل:

- أسماء العروسين
- التاريخ والوقت
- القاعة والعنوان
- رابط الخريطة
- رقم واتساب
- رسالة تأكيد الحضور

## إضافة الموسيقى

ضع ملف الموسيقى داخل:

```text
assets/audio/music.mp3
```

## إضافة الفيديو

ضع ملف الفيديو داخل:

```text
assets/video/wedding.mp4
```

## النشر على Vercel

ارفع الملفات إلى GitHub ثم اربط المستودع مع Vercel.

الإعدادات:

```text
Framework Preset: Other
Build Command: فارغ
Output Directory: .
Install Command: فارغ
```
