function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("visitor").style.display = "none";
  }

  function goAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("visitor").style.display = "none";
  }

  function goContent() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("visitor").style.display = "none";
  }

  function goContact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("visitor").style.display = "none";
  }

  function goVisitor() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("visitor").style.display = "block";
  }

  
  document.getElementById("themeChange").addEventListener("click", function() {

    toggleStylesheet("./css/theme.css");
    //insert 'link' element into head just below styles.css reference
  })
  
  function toggleStylesheet(href, onoff) {
    var existingNode = 0 //get existing stylesheet node if it already exists:
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(href) > -1) existingNode = document.styleSheets[i].ownerNode
    }
    if (onoff == undefined) onoff = !existingNode //toggle on or off if undefined
    if (onoff) { //TURN ON:
      if (existingNode) return onoff //already exists so cancel now
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
    } else { //TURN OFF:
      if (existingNode) existingNode.parentNode.removeChild(existingNode)
    }
    return onoff
  }

  document.addEventListener("DOMContentLoaded", function() {
    initValidation("myform");
  });
