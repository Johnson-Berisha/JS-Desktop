let userName = "";
const nameInput = document.querySelector('.nameInput');
const form = document.querySelector('.myForm');
const helpP = document.querySelector('.helpForm');
const appsOpen = document.querySelector('.openedApp');
const btnClose = document.querySelector('.closeBtn');
const textpad = document.querySelector('.txtPad');

form.addEventListener('submit', onSubmit);
btnClosed.addEventListener('click', onClick);
appsOpen.innerHTML = "Setup";

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '') {
        helpP.innerHTML = "Enter Name.";
    } else {
        userName = `${nameInput.value}`;
        helpP.innerHTML = "";
        appsOpen.innerHTML = `Welcome, ${nameInput.value}.`;
        form.classList.add('close');

    }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


function onClick(e) {
    textpad.innerHTML = "";
}

function open() {
    textpad.classList.add('open');
}

function start() {
    var x = document.querySelector(".startFun");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

