var MODULE_PREFIX1 = "module1_";

function loadValues() {
  var val1 = localStorage.getItem(MODULE_PREFIX1 + "val1");
  var val2 = localStorage.getItem(MODULE_PREFIX1 + "val2");

  return [val1, val2];
}

function storeValues() {
  localStorage.setItem(MODULE_PREFIX1 + "val1", $("#txtValue1").val());
  localStorage.setItem(MODULE_PREFIX1 + "val2", $("#txtValue2").val());
  $("#OutputSpan").html("Values saved!");
}

$("#storeButton").click(function () {
  storeValues();
});
$("#loadButton").click(function () {
  var settings = loadValues();
  $("#txtValue1").val(settings[0]);
  $("#txtValue2").val(settings[1]);
});
