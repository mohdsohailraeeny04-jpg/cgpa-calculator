function addSubject() {
  let div = document.createElement("div");

  div.innerHTML = `
    <input type="number" placeholder="Grade Point" class="grade">
    <input type="number" placeholder="Credit" class="credit">
  `;

  document.getElementById("subjects").appendChild(div);
}

function calculateCGPA() {
  let grades = document.querySelectorAll(".grade");
  let credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    let grade = parseFloat(grades[i].value) || 0;
    let credit = parseFloat(credits[i].value) || 0;

    totalPoints += grade * credit;
    totalCredits += credit;
  }

  if (totalCredits === 0) {
    document.getElementById("result").innerText = "Please add subjects first!";
    return;
  }

  let cgpa = totalPoints / totalCredits;

  document.getElementById("result").innerText =
    "Your CGPA is: " + cgpa.toFixed(2);
}