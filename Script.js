const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".countertimer");

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
  now = `${mm}/${dd}/${yyyy}`;

  const enteredDay = prompt("Enter day").padStart(2, "0");
  const enteredMOnth = prompt("EnterMonth").padStart(2, "0");

  let targetDate = `${enteredMOnth}/${enteredDay}/${yyyy}`;

  if (now > targetDate)
    targetDate = `${enteredMOnth}/${enteredDay}/${yyyy + 1}`;

  const IntervalId = setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const diffrence = timer - today;
    const leftDay = Math.floor(diffrence / day);
    const leftHour = Math.floor((diffrence % day) / hour);
    const leftMinute = Math.floor((diffrence % hour) / minute);
    const leftSecond = Math.floor((diffrence % minute) / second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if (diffrence < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "time's Up";
      clearInterval(IntervalId);
    }
  }, 0);
};

timerFunction();
