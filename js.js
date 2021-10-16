 const btn = document.querySelectorAll(".title");
    const text = document.querySelector(".title p");
    const seleccion = document.getElementsByClassName("selected");

    const hideQuestion = () => {
      console.log(seleccion[0].parentNode)
      seleccion[0].style.transform = "rotate(360deg)";
      seleccion[0].parentNode.nextElementSibling.style.display = "none";
      seleccion[0].previousElementSibling.style.fontWeight = "400";
      seleccion[0].className = "";
    }
    const showQuestion = (btn) => {
      console.log(btn)
      btn.children[1].className = "selected";
      btn.children[1].style.transform = "rotate(180deg)";
      btn.nextElementSibling.style.display = "block";
      btn.children[0].style.fontWeight = "bold";
    }

    btn.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.children[1].className == "selected") {
          hideQuestion();
        } else {
          if (seleccion.length == 0) {
            showQuestion(btn);
          } else {
            hideQuestion();
            showQuestion(btn);
          }
        }
      });
    });