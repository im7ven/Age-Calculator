// Global variables
let yearOutput = document.getElementById("yearCount");
let monthOutput = document.getElementById("monthCount");
let dayOutput = document.getElementById("dayCount");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const handleOutput = () => {
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;

  const d = document.getElementById("day");
  const m = document.getElementById("month");
  const y = document.getElementById("year");

  // Validation

  const daysInMon = new Date(currentYear, currentMonth - 1, 0).getDate();

  if (dayInput > daysInMon) {
    const error = document.getElementById("invalidDay");
    error.style.display = "block";
  } else {
    const error = document.getElementById("invalidDay");
    error.style.display = "none";
  }

  if (d.value === "") {
    const error = document.getElementById("emptyDay");
    error.style.display = "block";
  } else {
    const error = document.getElementById("emptyDay");
    error.style.display = "none";
  }

  if (yearInput > currentYear) {
    const error = document.getElementById("invalidYear");
    error.style.display = "block";
  } else {
    const error = document.getElementById("invalidYear");
    error.style.display = "none";
  }

  if (y.value === "") {
    const error = document.getElementById("emptyYear");
    error.style.display = "block";
  } else {
    const error = document.getElementById("emptyYear");
    error.style.display = "none";
  }

  if (monthInput > 12) {
    const error = document.getElementById("invalidMonth");
    error.style.display = "block";
  } else {
    const error = document.getElementById("invalidMonth");
    error.style.display = "none";
  }

  if (m.value === "") {
    const error = document.getElementById("emptyMonth");
    error.style.display = "block";
  } else {
    const error = document.getElementById("emptyMonth");
    error.style.display = "none";
  }

  if (
    y.value === "" ||
    m.value === "" ||
    d.value === "" ||
    dayInput > daysInMon ||
    yearInput > currentYear ||
    monthInput > 12
  ) {
    const inputs = Array.from(document.getElementsByClassName("form-input"));
    inputs.forEach(
      (e) => (e.style.boxShadow = "0px 0px 0px 1px hsl(0, 100%, 67%)")
    );
    const labels = Array.from(document.getElementsByClassName("form-label"));
    labels.forEach((e) => (e.style.color = "hsl(0, 100%, 67%)"));
    return;
  } else {
    const inputs = Array.from(document.getElementsByClassName("form-input"));
    inputs.forEach(
      (e) => (e.style.boxShadow = "0px 0px 0px 1px hsl(0, 0%, 86%)")
    );
    const labels = Array.from(document.getElementsByClassName("form-label"));
    labels.forEach((e) => (e.style.color = "hsl(0, 1%, 44%)"));
  }

  // Logic for calculating age
  if (currentMonth <= monthInput && currentYear - yearInput !== 0) {
    yearOutput.innerHTML = `${currentYear - 1 - yearInput}`;
  } else yearOutput.innerHTML = `${currentYear - yearInput}`;

  if (currentMonth >= monthInput) {
    monthOutput.innerHTML = `${currentMonth - monthInput}`;
  } else monthOutput.innerHTML = `${12 - (monthInput - currentMonth)}`;

  if (currentDay >= dayInput) {
    dayOutput.innerHTML = `${currentDay - dayInput}`;
  } else {
    const daysInMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    const remainingDays = daysInMonth - dayInput + currentDay;
    dayOutput.innerHTML = `${remainingDays}`;
  }
};

console.log(currentDate.getMonth());
