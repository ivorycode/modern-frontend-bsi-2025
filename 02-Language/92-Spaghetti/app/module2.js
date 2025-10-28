var MODULE_PREFIX = "module2_";

function loadValues() {
  localStorage.setItem(MODULE_PREFIX + "val1", new Date().toDateString());
  localStorage.setItem(MODULE_PREFIX + "val2", new Date().toTimeString());
}

function storeValues() {
  var val1 = localStorage.getItem(MODULE_PREFIX + "val1");
  var val2 = localStorage.getItem(MODULE_PREFIX + "val2");

  return [val1, val2];
}

/* We extend the page with the new feature: */
$("#storeButton2").click(function () {
  storeValues();
});
$("#loadButton2").click(function () {
  var settings = loadValues();
  $("#txtValue3").text(settings[0]);
  $("#txtValue4").text(settings[1]);
});
