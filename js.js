const btn = document.querySelectorAll(".question");
    btn.forEach(btn => {
      btn.addEventListener("toggle", () => {
        console.log(btn.children[0].children[0])
        if (btn.open) {
          btn.children[0].children[0].style.transform = "rotate(180deg)";
          btn.style.fontWeight = "bold";
        } else {
          btn.children[0].children[0].style.transform = "rotate(360deg)";
          btn.style.fontWeight = "400";
        }
      });
    });