# Portfolio Tab Configuration Guide

Sistem tab portfolio ini dibuat untuk sangat mudah dikonfigurasi dan dimodifikasi. Anda hanya perlu mengubah data array tanpa menyentuh kode UI.

## 🎯 Cara Kerja

### 1. Konfigurasi Tab Categories (Line 6-34)
```javascript
const tabCategories = [
  {
    key: 'shortVideos',
    label: 'Short Videos', 
    icon: '🎬'
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: '📷'
  },
  // Tambah tab baru di sini
]
```

### 2. Data Companies (Line 49+)
Setiap company memiliki struktur:
```javascript
{
  id: "unique_id",
  name: "Company Name",
  description: "Company description...",
  heroImage: "/path/to/image.jpg",
  sections: {
    shortVideos: {
      description: "Section description...",
      images: ["image1.jpg", "image2.jpg", ...]
    },
    // Tambah section lain sesuai key di tabCategories
  }
}
```

## ✨ Fitur

- **Auto-generated Tabs**: Tab akan otomatis muncul berdasarkan sections yang ada di data company
- **Dynamic Layout**: Grid layout menyesuaikan dengan jumlah tabs
- **Icon Support**: Setiap tab punya icon dan label
- **Responsive**: Tab menyesuaikan dengan ukuran layar
- **Fallback System**: Jika tab config tidak ditemukan, akan menggunakan fallback

## 🚀 Cara Menambah Tab Baru

### 1. Tambah di tabCategories:
```javascript
{
  key: 'linkedin',
  label: 'LinkedIn', 
  icon: '💼'
}
```

### 2. Tambah section di company data:
```javascript
linkedin: {
  description: "Professional LinkedIn content and posts...",
  images: Array(5).fill("https://example.com/linkedin-image.jpg")
}
```

### 3. Done! ✅
Tab akan otomatis muncul untuk company yang memiliki section tersebut.

## 🔧 Contoh Use Cases

### Menambah Company Baru:
```javascript
{
  id: "company4",
  name: "New Client",
  description: "Client description...",
  heroImage: "/images/new-client-logo.jpg",
  sections: {
    shortVideos: { /* data */ },
    instagram: { /* data */ },
    // hanya section yang dibutuhkan
  }
}
```

### Mengubah Tab untuk Company Tertentu:
Company 1: `shortVideos`, `youtube`, `contentPlan`
Company 2: `shortVideos`, `instagram`, `tiktok`, `youtube`
Company 3: `contentPlan`, `insightAnalyst`

Setiap company otomatis hanya menampilkan tab yang relevan!

## 📝 Tips

1. **Key harus sama**: Key di `tabCategories` harus sama dengan key di `company.sections`
2. **Order matters**: Urutan di `tabCategories` menentukan urutan tab yang muncul
3. **Fallback**: Jika tab tidak ada di config, akan menggunakan key sebagai label
4. **Icons optional**: Icon akan disembunyikan di mobile untuk menghemat space
5. **Images flexible**: Bisa gunakan array URL atau generate dengan `Array(n).fill(url)`

## 🎨 Customization

- Edit `tabCategories` untuk mengubah label dan icon
- Edit `companies` array untuk mengubah data
- Tab layout dan styling sudah responsive dan animate
- Grid otomatis menyesuaikan jumlah tab (1-6 tabs tested)

---

**Powerful & Flexible!** 🚀 Sistem ini memungkinkan Anda mengubah portfolio structure hanya dengan edit data array.
