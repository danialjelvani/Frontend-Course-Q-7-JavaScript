let p1 = document.createElement('p')
document.body.appendChild(p1)
p1.textContent = "click to c what i hide!"
p1.onmouseup = () => p1.classList.add("text-amber-300")

/* // HOLD BUTTON

<button id="longPressBtn">Hold Me</button>
<p id="output"></p>

<script>
  let timer;
  const button = document.getElementById("longPressBtn");
  const output = document.getElementById("output");

  button.addEventListener("mousedown", () => {
    timer = setTimeout(() => {
      output.innerText = "Long Press Activated!";
    }, 1000); // 1 second long press
  });

  button.addEventListener("mouseup", () => {
    clearTimeout(timer); // Cancel if released early
  });

  button.addEventListener("mouseleave", () => {
    clearTimeout(timer); // Cancel if the mouse leaves the button
  });

  // For touch devices
  button.addEventListener("touchstart", () => {
    timer = setTimeout(() => {
      output.innerText = "Long Press Activated!";
    }, 1000);
  });

  button.addEventListener("touchend", () => {
    clearTimeout(timer);
  });

  button.addEventListener("touchcancel", () => {
    clearTimeout(timer);
  });
</script>
*/


// parentElement children firstElementChild lastElementChild
// nextElementSibling previousElementSibling removeChild remove
// parentElement.removeChild(newElement);

// elem.hasAttribute(name)	 elem.getAttribute(name)
// elem.setAttribute(name, value)	elem.removeAttribute(name)

console.log(getComputedStyle(p1).color)

let sample2Inp = document.querySelector("#sample2");
sample2Inp.onclick = function (event) {
  // show event type, element and coordinates of the click
  alert(event.type + " at " + event.currentTarget);
  alert("Value of input: " + event.currentTarget.value);
  alert("Coordinates: " + event.clientX + ":" + event.clientY);
};

// TO HANDLE EVENTS

function myBtnClicked(event) {
  event.myFlag = true;
  alert("Click!")
}

function divClicked(event) {
  if (event.myFlag)
    alert("do nothing...");
  else {
    alert('clicked alone')
  }
}


// CAPTURE & BUBBLE
// CAPTURE IS FALSE BY DEFAULT
// THE ORDER OF RUN IS CAPTURE(THE OUTERMOST TO INNERMOST) THEN
// BUBBLE(THE INNERMOST TO OUTERMOST)

document.getElementById("grandparent").addEventListener("click", e => {
  console.log("grandparent")
}, { capture: true })

document.getElementById("parent").addEventListener("click", e => {
  console.log("parent")
})

document.getElementById("child").addEventListener("click", e => {
  console.log("child")
})


// ************* GLOBAL EVENT LISTENER *************

function globalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) { callback(e) }
  })
}

globalEventListener("click", "div", e => console.log("div clicked"))


// KEY & CODE
let kevents = document.querySelector("#kevents");

kevents.onkeydown = function (event) {
  console.log(event.key + " " + event.code);
};

span1 = document.getElementById("span1")
input1 = document.getElementById("input1")
input1.addEventListener("input", () => {
  span1.innerHTML = input1.value.replace(/ /g, "&nbsp;").replace(/[<>]/g, "") // PREVENT HTML TAG INTERPRETS
  // CLEVER METHOD TO PRESERVE ALL THE SPACES SINCE TEXTCONTENT & INNERTEXT REMOVE EXTRA SPACES
})
