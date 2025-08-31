# Interactive Contact Section Guide

Contact section telah dibuat fully interactive dengan deep links yang langsung membuka aplikasi yang sesuai. Saat di-klik, contact cards akan langsung membuka aplikasi atau layanan yang terkait.

## 🎯 Fitur Deep Links

### 1. WhatsApp 📞
```javascript
// WhatsApp deep link dengan pesan otomatis
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
```
- **Mobile**: Langsung buka WhatsApp app
- **Desktop**: Buka WhatsApp Web
- **Pesan otomatis**: "Hi! I saw your portfolio and would like to discuss a project."
- **Fallback**: Copy nomor ke clipboard jika gagal

### 2. Email ✉️
```javascript
// Email deep link dengan subject dan body
const emailUrl = `mailto:email@domain.com?subject=${subject}&body=${body}`;
```
- **Langsung buka**: Email client default (Gmail, Outlook, Apple Mail, dll)
- **Subject otomatis**: "Portfolio Inquiry"
- **Body template**: Template pesan professional
- **Universal**: Bekerja di semua platform

### 3. LinkedIn 💼
```javascript
// LinkedIn dengan fallback strategy
const mobileUrl = `linkedin://messaging/compose?recipient=${profile}`;
const webUrl = `https://www.linkedin.com/in/${profile}/`;
```
- **Mobile**: Coba buka LinkedIn app dulu → fallback ke web
- **Desktop**: Langsung buka profil LinkedIn di browser
- **Smart detection**: Deteksi mobile device otomatis

## 🛠️ Konfigurasi Data

### Contact Data Structure:
```javascript
const contactData = [
  {
    type: 'whatsapp',           // Unique identifier
    label: 'Phone',             // Display label
    value: '+628222902671',     // Actual value
    displayValue: '+62822...',  // What user sees
    icon: '📞',                 // Emoji icon
    gradient: 'from-purple-..', // Tailwind gradient
    action: () => { ... }       // Click handler function
  }
]
```

## 📱 Mobile vs Desktop Behavior

### Mobile Experience:
- **WhatsApp**: Buka app langsung dengan pesan
- **Email**: Buka Gmail/email app dengan template
- **LinkedIn**: Coba app → fallback browser

### Desktop Experience:
- **WhatsApp**: Buka WhatsApp Web
- **Email**: Buka email client (Outlook/Thunderbird/dll)
- **LinkedIn**: Buka profil di browser baru

## ✨ Visual Feedback

### Hover Effects:
- Card scale & slide animation
- Icon rotation & scale
- Background color transition
- Hover indicator dot

### Tap Effects:
- Scale down animation (0.98x)
- Spring physics animation
- Smooth transitions

### Loading States:
- Individual card animation delays
- Progressive reveal (stagger effect)

## 🔧 Cara Mengubah Data Kontak

### 1. Edit Phone/WhatsApp:
```javascript
{
  type: 'whatsapp',
  value: '+6281234567890',     // Ubah nomor
  displayValue: '+6281234567890',
  action: () => {
    const phoneNumber = '6281234567890'; // Tanpa + untuk WhatsApp API
    const message = 'Custom message here';
    // ...
  }
}
```

### 2. Edit Email:
```javascript
{
  type: 'email',
  value: 'newemail@domain.com',
  displayValue: 'newemail@domain.com',
  action: () => {
    const subject = 'New Subject';
    const body = 'New email template';
    // ...
  }
}
```

### 3. Edit LinkedIn:
```javascript
{
  type: 'linkedin',
  value: 'new-linkedin-username',
  displayValue: 'New Display Name',
  action: () => {
    const linkedinProfile = 'new-linkedin-profile-id';
    // ...
  }
}
```

## 🎨 Menambah Contact Method Baru

```javascript
{
  type: 'telegram',
  label: 'Telegram',
  value: '@username',
  displayValue: '@username',
  icon: '✈️',
  gradient: 'from-blue-400 to-blue-600',
  action: () => {
    const telegramUrl = `https://t.me/username`;
    window.open(telegramUrl, '_blank');
  }
}
```

## 📊 Analytics Integration (Optional)

Bisa ditambahkan tracking untuk setiap contact method:

```javascript
action: () => {
  // Track di Google Analytics atau analytics lainnya
  gtag('event', 'contact_click', {
    method: 'whatsapp',
    contact_type: 'phone'
  });
  
  // Lanjut dengan action
  window.open(whatsappUrl, '_blank');
}
```

## 🔍 Testing

### Test di berbagai platform:
- [ ] iOS Safari (WhatsApp, Email, LinkedIn app)
- [ ] Android Chrome (WhatsApp, Gmail, LinkedIn app)
- [ ] Desktop Chrome/Firefox (WhatsApp Web, email client, LinkedIn web)
- [ ] Fallback scenarios (no app installed)

---

**Smart & Universal!** 🌐 System ini bekerja di semua device dengan fallback yang cerdas dan UX yang smooth.
