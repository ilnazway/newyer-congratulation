function play() {
  console.log("ok");
  const startBlock = document.querySelector(".congrat-start");
  startBlock.style.display = "none";

  const preSecondBlock = document.querySelector(".congrat-presecond");
  setTimeout(function () {
    preSecondBlock.classList.add("congrat-presecond_open");
  }, 2000);
  setTimeout(function () {
    preSecondBlock.classList.remove("congrat-presecond_open");
  }, 12000);

  const secondBlock = document.querySelector(".congrat-second");
  setTimeout(function () {
    secondBlock.classList.add("congrat-second_open");
  }, 13100);
  setTimeout(function () {
    secondBlock.classList.remove("congrat-second_open");
  }, 20000);

  const preThreeBlock = document.querySelector(".congrat-prethree");
  setTimeout(function () {
    preThreeBlock.classList.add("congrat-prethree_open");
  }, 21100);
  setTimeout(function () {
    preThreeBlock.classList.remove("congrat-prethree_open");
  }, 28000);

  const threeBlock = document.querySelector(".congrat-three");
  const threeTitle = document.querySelector(".congrat-three__title");
  const threeTimer = document.querySelector(".congrat-three__timer");
  const threeImg = document.querySelector(".congrat-three__img");
  setTimeout(function () {
    threeBlock.classList.add("congrat-three_open");
    threeTitle.classList.add("congrat-three__title_open");
  }, 29100);
  setTimeout(function () {
    threeTimer.classList.add("congrat-three__timer_open");
  }, 32500);
  setTimeout(function () {
    threeImg.classList.add("congrat-three__img_open");
  }, 40000);

  // preSecondBlock.style.opacity = 1;
  // preSecondBlock.style.display = "block";
}

timeend = new Date();
// IE и FF по разному отрабатывают getYear()
timeend = new Date(timeend.getYear() > 1900 ? timeend.getYear() + 1 : timeend.getYear() + 1901, 0, 1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
  today = new Date();
  today = Math.floor((timeend - today) / 1000);
  tsec = today % 60;
  today = Math.floor(today / 60);
  if (tsec < 10) tsec = "0" + tsec;
  tmin = today % 60;
  today = Math.floor(today / 60);
  if (tmin < 10) tmin = "0" + tmin;
  thour = today % 24;
  today = Math.floor(today / 24);
  timestr = today + " дней " + thour + " часов " + tmin + " минут " + tsec + " секунд";
  document.getElementById("t").innerHTML = timestr;
  window.setTimeout("time()", 1000);
}
