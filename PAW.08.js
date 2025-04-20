// Data awal barang
let barangToko = [
  { nama: "Pulpen", harga: 3000, stok: 100 },
  { nama: "Buku Tulis", harga: 5000, stok: 200 },
  { nama: "Penggaris", harga: 2500, stok: 80 },
];

// Fungsi menampilkan semua barang
function tampilkanBarang() {
  console.log("Daftar Barang di Toko:");
  barangToko.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.nama} | Harga: Rp${item.harga} | Stok: ${item.stok}`
    );
  });
  console.log(); // garis kosong
}

// Fungsi menambah barang
function tambahBarang(nama, harga, stok) {
  barangToko.push({ nama, harga, stok });
  console.log(`Barang "${nama}" berhasil ditambahkan.`);
}

// Fungsi edit barang
function editBarang(nama, dataBaru) {
  const index = barangToko.findIndex((item) => item.nama === nama);
  if (index !== -1) {
    barangToko[index] = { ...barangToko[index], ...dataBaru };
    console.log(`"${nama}" berhasil diedit.`);
  } else {
    console.log(`Barang "${nama}" tidak ditemukan.`);
  }
}

// Fungsi hapus barang
function hapusBarang(nama) {
  const index = barangToko.findIndex((item) => item.nama === nama);
  if (index !== -1) {
    barangToko.splice(index, 1);
    console.log(`"${nama}" berhasil dihapus.`);
  } else {
    console.log(`Barang "${nama}" tidak ditemukan.`);
  }
}

// Fungsi menampilkan barang termurah
function tampilkanBarangTermurah() {
  const termurah = barangToko.reduce(
    (min, item) => (item.harga < min.harga ? item : min),
    barangToko[0]
  );
  console.log(
    `Barang dengan harga termurah:\n${termurah.nama} → Harga: Rp${termurah.harga}`
  );
}

// Fungsi menampilkan barang termahal
function tampilkanBarangTermahal() {
  const termahal = barangToko.reduce(
    (max, item) => (item.harga > max.harga ? item : max),
    barangToko[0]
  );
  console.log(
    `Barang dengan harga termahal:\n${termahal.nama} → Harga: Rp${termahal.harga}`
  );
}

// Fungsi menampilkan rata-rata harga
function tampilkanRataRataHarga() {
  const total = barangToko.reduce((sum, item) => sum + item.harga, 0);
  const rata2 = Math.round(total / barangToko.length);
  console.log(`Rata-rata harga barang : Rp${rata2}`);
}

