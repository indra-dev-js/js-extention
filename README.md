# js-extensions

🛠️ **Kumpulan static method dan helper** untuk `Array`, `Object`, dan tipe bawaan JavaScript lainnya.  
Tujuannya: menambahkan method custom dengan gaya native, mirip API bawaan (`Array.isArray`, `Object.keys`, dll).

---

## ✨ Features

- 🔹 Tambahkan method baru tanpa polusi `prototype`  
- 🔹 Gunakan `Object.defineProperty` agar method aman (non-enumerable, non-writable, configurable)  
- 🔹 Ringan & dependency-free  
- 🔹 Dokumentasi bergaya _MDN-style_

---

## 📦 Installation

**Syntax**:

```bash
# install package
npm install js-extensions

# cek versi npm
npm -v
```

---

## 📚 API

### Array.isEmpty(array)

Static method untuk mengecek apakah sebuah array:

- **Kosong** (`[]`)  
- **Mengandung string kosong saja** (`[""]`)  

Lebih aman dibanding cek manual karena sudah menangani tipe data non-array dan string kosong.

**Syntax**:

```js
Array.isEmpty(array)
```

**Parameter**:

| Parameter | Tipe   | Keterangan                  |
|-----------|-------|-----------------------------|
| array     | Array | Array yang ingin dicek      |

**Contoh**:

```js
Array.isEmpty([])          // true
Array.isEmpty([""])        // true
Array.isEmpty([1,2,3])     // false
Array.isEmpty("not array") // false
```
