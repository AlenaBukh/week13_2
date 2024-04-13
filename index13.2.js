function getDaysUntilBday() {
  const birthdayValue = document.getElementById("bday").value;
  const birthday = new Date(birthdayValue);
  const today = new Date();
  const thisYear = today.getFullYear();
  const birthdayInThisYear = birthday.setFullYear(thisYear);

  const resultElement = document.getElementById("result");

  // Очищение сообщения результата и устанавка цвета по умолчанию (черный)
  resultElement.textContent = "";
  resultElement.style.color = "black";

  // Если пользователь не выбрал дату, выводим сообщение красным цветом
  if (birthdayValue === "") {
    resultElement.textContent = "Пожалуйста, выберите дату.";
    resultElement.style.color = "red";
    return;
  }

  let declensionDays = "дней";
  let amountOfDays = Math.floor(
    (birthdayInThisYear - today) / (1000 * 60 * 60 * 24)
  );

  if (amountOfDays < 0) {
    amountOfDays = amountOfDays + 365;
  }

  const endingsDays = getDaysEnding(amountOfDays);

  if (endingsDays === 1) declensionDays = "день";
  else if (endingsDays > 1 && endingsDays < 5) declensionDays = "дня";
  if (amountOfDays > 10 && amountOfDays < 21) declensionDays = "дней";

  document.getElementById(
    "result"
  ).textContent = `До Вашего дня рождения осталось: ${amountOfDays} ${declensionDays}`;
}

function getDaysEnding(number) {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;
  if (number < 10) return number;
  if (number > 11 && number < 100) return lastDigit;
  return lastTwoDigits;
}
