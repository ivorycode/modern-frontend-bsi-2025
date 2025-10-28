const MODULE_PREFIX = "module2_";

export function storeValues() {
  localStorage.setItem(MODULE_PREFIX + "val1", new Date().toDateString());
  localStorage.setItem(MODULE_PREFIX + "val2", new Date().toTimeString());
}

export function loadValues() {
  const val1 = localStorage.getItem(MODULE_PREFIX + "val1");
  const val2 = localStorage.getItem(MODULE_PREFIX + "val2");

  return [val1, val2];
}
