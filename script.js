const button = document.getElementById("analyse");
button.addEventListener("click", () => {
  const fields = [...document.querySelectorAll(".mark")];
  const marks = fields.map(field => Number(field.value));
  const result = document.getElementById("result");
  if (fields.some(field => field.value.trim() === "") || marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    result.textContent = "Please enter a valid mark between 0 and 100 for every subject.";
    return;
  }
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const passed = marks.every(mark => mark >= 35);
  let grade = "F";
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  result.textContent = `Total: ${total}/500 | Average: ${average.toFixed(1)}% | Grade: ${grade} | Result: ${passed ? "PASS" : "FAIL"}`;
});