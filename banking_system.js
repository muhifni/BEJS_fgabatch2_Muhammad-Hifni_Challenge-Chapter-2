// class BankAccount
class BankAccount {
  constructor(amount) {
    this.amount = amount
  }

  checkAmount() {
    return this.amount
  }

  deposit(amount) {
    // tambah saldo
    this.amount += amount
  }

  withDraw(amount) {
    if (this.amount >= amount) { // jika saldo cukup
      this.amount -= amount; // kurangi saldo
    } else {
      window.alert('Saldo tidak cukup')
    }
  }
}

const bankAccount = new BankAccount(0);
const deposit = () => {
  let jumlah = window.prompt('Masukkan jumlah saldo yang ingin dideposit:')
  jumlah = parseInt(jumlah)
  bankAccount.deposit(jumlah)
  window.alert("Jumlah saldo sekarang: " + bankAccount.checkAmount().toLocaleString('id-ID'));
}

const withdraw = () => {
  let jumlah = window.prompt('Masukkan jumlah saldo yang ingin ditarik:')
  jumlah = parseInt(jumlah)
  if(jumlah < bankAccount.checkAmount()){
    bankAccount.withDraw(jumlah)
    window.alert("Jumlah saldo sekarang: " + bankAccount.checkAmount().toLocaleString('id-ID'));
  } else {
    bankAccount.withDraw (jumlah);
  }
  
}

const main = () => {
  let pilihan = window.prompt(`Saldo saat ini: Rp${bankAccount.checkAmount().toLocaleString('id-ID')} \n\n  Pilih menu: \n1. Deposit \n2. Withdraw \n3. Keluar`);
  // perulangan akan terus berjalan selama user tidak memilih menu 3 atau menekan tombol cancel
  while (pilihan !== '3' && pilihan !== null) {
    switch (pilihan) {
      case '1':
        deposit();
        break;
      case '2':
        withdraw();
        break;
      default:
        window.alert('Pilihan tidak valid');
        break;
    }
    pilihan = window.prompt(`Saldo saat ini: Rp${bankAccount.checkAmount()} \n\n  Pilih menu: \n1. Deposit \n2. Withdraw \n3. Keluar`);
  }
}

main();
