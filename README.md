# Template-trackingstorepersonal
Development of fareezonzz - menyediakan template projek jejak pesanan kedai sendiri yang menyokong peta dan jejak


cara penggunaan:

## ✅ Langkah 1: Google Sheet Header (WAJIB TEPAT)

Pastikan **Sheet1** mempunyai header dalam **turutan ini**:

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Tracking Number | Status Pesanan | Nama Pembeli | Nombor Telefon | Jenis Pembayaran | Pesanan | Kuantiti | Jumlah Keseluruhan Harga | Tarikh Pesanan Dibuat | Tarikh Pesanan Selesai | Lokasi Koordinat | History Note |

> Contoh data **Lokasi Koordinat**:  
> `2.9265,101.6487;2.9300,101.6520;2.9350,101.6580`

---

## 🧠 Langkah 2: Google Apps Script (Backend)

Gantikan dengan kod ini (pastikan `doGet` pulangkan **namaPembeli**):
paste kode.gs di appscript dan simpan sebagai web app dan anyone.
## 💻 Langkah 3: HTML + CSS + JS (Frontend Lengkap)
paste html kode ini bebas dimana² web atau panel..dan lengkapkan web app link
Simpan sebagai `index.html`:

## ✨ Ciri Baru dalam Versi Ini:

- ✅ **Nama pembeli dipaparkan pada setiap pin** (dengan label "Mula", "Titik 2", dll)
- ✅ **Garis merah automatik** dari koordinat pertama ke terakhir
- ✅ Format koordinat: `lat,lng;lat,lng` (gunakan **`;`** sebagai pemisah titik)
- ✅ Tarikh dibuat auto-set ke hari ini
- ✅ Antara muka lebih bersih & profesional

---

## 📌 Peringatan Penting:

1. **Gantikan `YOUR_WEB_APP_URL`** dengan URL Web App sebenar.
2. Pastikan **koordinat valid** (contoh: `2.9265,101.6487` — bukan `1.000.129`)
3. Jika tiada koordinat, peta **tidak akan muncul** (normal).

