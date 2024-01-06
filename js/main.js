let nums = document.querySelectorAll(".supervisors .number");
let supervisors = document.querySelector(".supervisors");
let started = false;

let nums_endowments = document.querySelectorAll(".endowments .number");
let endowments = document.querySelector(".endowments");
let started_endowments = false;

let nums_status = document.querySelectorAll(".status1 .number");
let status_section = document.querySelector(".status1");
let started_status = false;

let nums_status2 = document.querySelectorAll(".status2 .number");
let status2_section = document.querySelector(".status2");
let started_status2 = false;

window.onscroll = function () {
  if (window.scrollY >= supervisors.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= endowments.offsetTop) {
    if (!started_endowments) {
      nums_endowments.forEach((num) => startCount(num));
    }
    started_endowments = true;
  }
  if (window.scrollY >= status_section.offsetTop) {
    if (!started_status) {
      nums_status.forEach((num) => startCount(num));
    }
    started_status = true;
  }
  if (window.scrollY >= status2_section.offsetTop) {
    if (!started_status2) {
      nums_status2.forEach((num) => startCount(num));
    }
    started_status2 = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  const goalnum = +goal > 1000000 ? 0.0000000000000001 : 900;
  console.log(goalnum / goal);
  let count = setInterval(() => {
    if (+goal > 1000000) {
      let number = +el.textContent;
      number += 100000;
      el.textContent = number;
    } else if (+goal > 200000) {
      let number = +el.textContent;
      if (number < 360000) {
        number += 1000;
      } else if (number >= 208000) {
        number += 1;
      }
      el.textContent = number;
    } else {
      el.textContent++;
    }
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, goalnum / goal);
}

// const form = document.getElementById("form");
// const email = document.getElementById("email");

// form.onsubmit = async () => {
//   const res = await fetch("https://email-sender-f1nw.onrender.com/send-email", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ to: email.value }),
//   });
//   const result = await res.text();
//   console.log(result);
// };

// Add this script at the end of your HTML body or in a separate JS file

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".item");

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Adjust as needed
  };

  let observer = new IntersectionObserver(handleIntersect, options);

  items.forEach(function (item) {
    observer.observe(item);
  });

  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }
});
