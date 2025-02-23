// function close1() {
//     window.close()
//   }
//   function open1() {
//     let newwindow = window.open()
//     let a  = document.createElement("p")
//     a.innerHTML = "Welcome to a new page"
//     newwindow.document.body.append(a)
//   }
  
  
  let adf = document.getElementById("adf")
  let afd = document.getElementById("afd")
  
  let div = document.getElementById("modalW")
  function func1() {
    div.style.display = "flex"
    document.body.style.overflowY = "hidden"
    adf.style.zIndex ="1"
    afd.style.zIndex ="1"
  }
  function func2() {
    div.style.display = "none"
    document.body.style.overflowY = "scroll"
  }
  
  let a = document.getElementById("a")
  let b = document.getElementById("b")
  let c = document.getElementById("c")
  let d = document.getElementById("d")
  let qas = document.getElementById("qas")
  let qzx = document.getElementById("qzx")
  let q1 = document.getElementById("q1")
  
  let w1 = document.getElementById("w1")
  let w4 = document.getElementById("w4")
  let w2 = document.getElementById("w2")
  let w3 = document.getElementById("w3")
  
  
  a.addEventListener("input", () => {
    if (a.value.length < 8) {
        w1.innerHTML = "Введите текст длиной более 8";
        w1.style.color = "red";
        w1.style.fontSize = "15px"
    } else {
        w1.innerHTML = "Данные верны";
        w1.style.color = "green";
        w1.style.fontSize = "15px"
    }
  });
  d.addEventListener("input", () => {
    if (d.value.search("@gmail.com") < 3) {
        w4.innerHTML = "Введите текст @gmail.com";
        w4.style.color = "red";
        w4.style.fontSize = "15px"
    } else {
        w4.innerHTML = "Данные верны";
        w4.style.color = "green";
        w4.style.fontSize = "15px"
    }
  });
  b.addEventListener("input", () => {
    if (b.value.length < 8) {
        w2.innerHTML = "Введите текст длиной более 8";
        w2.style.color = "red";
        w2.style.fontSize = "15px"
    } else {
      w2.innerHTML = "Данные верны";
      w2.style.color = "green";
      w2.style.fontSize = "15px"
    }
  });
  c.addEventListener("input", () => {
    if (c.value!=b.value) {
        w3.innerHTML = "не похоже";
        w3.style.color = "red";
        w3.style.fontSize = "15px"
    } else {
        w3.innerHTML = "похоже";
        w3.style.color = "green";
        w3.style.fontSize = "15px"
    }
  });
  
  q1.addEventListener("click", () => {
   localStorage.setItem("Name", a)
   localStorage.setItem("Email", d)
   localStorage.setItem("Password", b)
   localStorage.setItem("Confirm Password", c)
   location.href = "indexx.html"
  });