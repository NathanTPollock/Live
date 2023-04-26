function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }

  function goAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }

  function goContent() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("contact").style.display = "none";
  }

  function goContact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "block";
  }
