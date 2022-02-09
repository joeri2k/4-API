function GetValue(id) {
  let input_name = document.getElementById(id).value;
  return input_name;
}

async function GetPalindromeAnswer(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.string);
  if (data.palindrome === true && data.string != "") {
    document.getElementById("result-2").innerHTML = "It's a Palindrome!";
  } else if (data.string === "") {
    document.getElementById("result-2").innerHTML = "Please Enter a Word";
  } else if (data.palindrome === false && data.string != "") {
    document.getElementById("result-2").innerHTML = "It's Not a Palindrome!";
  }
}

function Palindrome() {
  let string = GetValue("palindrome");
  let api2_url =
    "http://localhost/4APIs-Assignment/php/API-2.php?string=" + string;
  GetPalindromeAnswer(api2_url);
}

async function GetEquationAnswer(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("result-1").innerHTML = " " + data.result;
}

function Equation() {
  let x = GetValue("numb-x");
  let y = GetValue("numb-y");
  let api1_url = `http://localhost/4APIs-Assignment/php/API-1.php?x=${x}&y=${y}`;
  GetEquationAnswer(api1_url);
}

document.getElementById("button-1").addEventListener("click", Equation);
document.getElementById("button-2").addEventListener("click", Palindrome);
