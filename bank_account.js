let saldo = 0;

const tambahSaldo = (jumlah) => {
  jumlah = window.prompt('Masukkan jumlah saldo yang ingin ditambahkan:')
  jumlah = parseInt(jumlah)
  return saldo += jumlah;
}

const kurangiSaldo = (jumlah) => {
  jumlah = window.prompt('Masukkan jumlah saldo yang ingin dikurangi:');
  jumlah = parseInt(jumlah)
  return saldo -= jumlah;
}

const tampilkanSaldo = () => {
  return window.alert(`Saldo saat ini adalah: Rp${saldo.toLocaleString('id-ID')}`);
}

const main = () => {
  let pilihan = window.prompt(`Saldo saat ini: Rp${saldo.toLocaleString('id-ID')} \n\n  Pilih menu: \n1. Tambah saldo \n2. Kurangi saldo \n3. Tampilkan saldo \n4. Keluar`);
  // perulangan akan terus berjalan selama user tidak memilih menu 4 atau menekan tombol cancel
  while (pilihan !== '4' && pilihan !== null) {
    switch (pilihan) {
      case '1':
        tambahSaldo();
        tampilkanSaldo();
        break;
      case '2':
        kurangiSaldo();
        tampilkanSaldo();
        break;
      case '3':
        tampilkanSaldo();
        break;
      default:
        window.alert('Pilihan tidak valid');
        break;
    }
    pilihan = window.prompt(`Saldo saat ini: ${saldo.toLocaleString('id-ID')} \n\n  Pilih menu: \n1. Tambah saldo \n2. Kurangi saldo \n3. Tampilkan saldo \n4. Keluar`);
  }
}

// main();