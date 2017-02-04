function adjustStyle() {
  var width = 0;
  //cross browser issues
  if (window.innerHeight) {
    width = window.innerWidth;
  } else if (document.documentElement && document.documentElement.clientHeight) {
    width = document.documentElement.clientWidth;
  } else if (document.body) {
    width = document.body.clientWidth;
  }
  // now we should have it
  if (width < 600) {
    document.getElementById("myCSS").setAttribute("href", "_css/narrow.css");
  } else {
    document.getElementById("myCSS").setAttribute("href", "_css/main.css");
  }
}


window.onresize = function () {
  adjustStyle();
};

window.onload = function () {
  adjustStyle();
};
