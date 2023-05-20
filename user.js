// const user = 'Oleg';
// const salary = 1500;
// const info = user + salary;
// console.log(info);
// console.log(typeof info);

class User {
  // JS не знає, що таке "Oleh" і "Taya". Тому ми маємо це вказати

  constructor(name) {
    this.name = name;
  }

  getInfo() {
    console.log(this.name);
  }
}
// Instance
const oleg = new User('Oleg'); // To instantiate
const taya = new User('Taya'); // To instantiate
// console.log('oleg:', oleg.name);
// console.log('taya:', taya.name);

// oleg.getInfo();
// taya.getInfo();

// alert('hello 01');
// window.alert('hello 02');
// this.alert('hello 03');

function sayHelloCall(clb) {
  clb;
}

function sayHelloBind(clb) {
  clb();
}
sayHelloCall(oleg.getInfo.call(oleg)); // я викликаю функцію
sayHelloBind(taya.getInfo.bind(taya)); // викликає функцію самостійно
// bind - треба викликати функцію: clb()
// call - викликає функцію самостійно: clb
