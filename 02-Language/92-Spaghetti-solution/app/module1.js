const MODULE_PREFIX = "module1_";

export function loadValues() {
  const val1 = localStorage.getItem(MODULE_PREFIX + "val1");
  const val2 = localStorage.getItem(MODULE_PREFIX + "val2");

  return [val1, val2];
}

export function storeValues() {
  localStorage.setItem(MODULE_PREFIX + "val1", $("#txtValue1").val());
  localStorage.setItem(MODULE_PREFIX + "val2", $("#txtValue2").val());
  $("#OutputSpan").html("Values saved!");
}
