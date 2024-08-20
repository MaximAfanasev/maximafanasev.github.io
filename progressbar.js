function update(check, bar) {
  var checked = 0;
  var bar = document.querySelector(bar);
  var section = document.querySelector(check);

  checkBoxes = section.querySelectorAll("input[type='checkbox']");

  checkedBoxes = section.querySelectorAll("input[type='checkbox']:checked");

  bar.style.width = ((checkedBoxes.length / checkBoxes.length) * 100) + "%";
}
document.querySelector(".check1").addEventListener("change", function (e) {
  update(".check1", ".bar1")
});
document.querySelector(".check2").addEventListener("change", function (e) {
  update(".check2", ".bar2")
});