document.getElementById("btn").addEventListener("click", btnclicked);
function btnclicked() {
  let correct = 0;
  let ans1 = document.getElementById("question1").value.toLowerCase();
  let ans2 = document.getElementById("question2").value.toLowerCase();
  let ans3 = document.getElementById("question3").value.toLowerCase();
  let ans4 = document.getElementById("question4").value.toLowerCase();

  if (ans1 === "1963") {
    correct = correct + 1;
  }
  if (ans2 === "2003") {
    correct = correct + 1;
  }
  if (ans3 === "1939") {
    correct = correct + 1;
  }
  if (ans4 === "1947") {
    correct = correct + 1;
  }

  if (correct === 4) {
    document.getElementById("output").innerHTML = `<p>4/4 (100%) Genius!</p>`;
  } else if (correct === 3) {
    document.getElementById("output").innerHTML = `<p>3/4 (75%) Amazing!</p>`;
  } else if (correct === 2) {
    document.getElementById("output").innerHTML = `<p>2/4 (50%) Awesome!</p>`;
  } else if (correct === 1) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>1/4 (25%) You failed horrificly!</p>`;
  } else if (correct === 0) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>0/4 (0%) Did you even read the information?</p>`;
  }
}
