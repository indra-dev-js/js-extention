# js-extensions

🛠️ Kumpulan static method dan helper untuk `Array`, `Object`, dan tipe bawaan JavaScript lainnya.  
Tujuannya: nambahin method custom dengan gaya native, mirip API bawaan (`Array.isArray`, `Object.keys`, dll).  

---

## ✨ Features
- 🔹 Tambahin method baru tanpa polusi `prototype`
- 🔹 Gunakan `Object.defineProperty` agar method aman (non-enumerable, non-writable)
- 🔹 Ringan & dependency-free
- 🔹 Bergaya *MDN-style documentation*

---

## 📦 Installation
Belum tersedia di npm (WIP). Untuk saat ini cukup copy-paste utility yang lo butuhkan.

---

## 📚 API

### `Array.empty(array)`

Static method untuk mengecek apakah sebuah array tidak kosong dan tidak mengandung string kosong.

**Syntax**
```js
Array.empty(array)
