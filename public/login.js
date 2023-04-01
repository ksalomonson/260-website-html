function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("expierencePoints", 0);
    localStorage.setItem("userLevel", 1);
    window.location.href = "play.html";
  }
  