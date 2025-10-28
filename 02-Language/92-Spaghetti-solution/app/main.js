import { loadValues, storeValues } from "./module1.js";
import { loadValues as loadDate, storeValues as storeDate } from "./module2.js";

$("#storeButton").click(function () {
  storeValues();
});
$("#loadButton").click(function () {
  var settings = loadValues();
  $("#txtValue1").val(settings[0]);
  $("#txtValue2").val(settings[1]);
});

/* We extend the page with the new feature: */
$("#storeButton2").click(function () {
  storeDate();
});
$("#loadButton2").click(function () {
  var settings = loadDate();
  $("#txtValue3").text(settings[0]);
  $("#txtValue4").text(settings[1]);
});
