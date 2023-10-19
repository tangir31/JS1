let money = 10000;

let name = prompt('Как вас зовут?');

if (name.toLowerCase().trim() !== 'alex') {
  alert('Пользователь не найден');
} else {
  let accountNumber = prompt('Номер счета?');
  accountNumber = parseInt(accountNumber);

  if (accountNumber !== 7777) {
    alert('Пользователь не найден');
  } else {
    let amountToWithdraw = prompt('Сколько обналичить?');
    amountToWithdraw = parseInt(amountToWithdraw);

    if (amountToWithdraw >= 0 && amountToWithdraw <= 10000) {
      let remainingBalance = money - amountToWithdraw;
      alert('Все отлично');
      alert('Вы сняли ' + amountToWithdraw);
      alert('Ваш баланс ' + remainingBalance);
    } else {
      alert('Недостаточно средств');
    }
  }
}


let klab = prompt('Как вас зовут?');

if (klab.toLowerCase().charAt(0) !== 'a') {
  alert('ты не изнашей банды');
} else {
  let age = parseInt(prompt('Сколько вам лет?'));

  if (age >= 20 && age <= 40) {
    let money = parseInt(prompt('Сколько у вас денег?'));

    if (money >= 100) {
      alert('Провалилай нишеброд');
    } else {
      alert('Добро пожаловать');
    }
  } else {
    alert('Вход запрещен');
  }
}