function GetValue(id) {
  let input_name = document.getElementById(id).value;
  return input_name;
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

async function GetPalindromeAnswer(url) {
  const response = await fetch(url);
  const data = await response.json();
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

async function GetCleanedAnswer(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById(
    "result-3"
  ).innerHTML = `Cleaned String: '${data.cleaned_string}'`;
}

function NoExtraSpace() {
  let string = GetValue("no-space");
  let api3_url =
    "http://localhost/4APIs-Assignment/php/API-3.php?string=" + string;
  GetCleanedAnswer(api3_url);
}

async function GetPasswordConfirmation(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (data.verification === true) {
    document.getElementById("result-4").innerHTML = "It's a Strong Password!";
  } else {
    document.getElementById("result-4").innerHTML =
      "It's Weak please enter another one.";
  }
}

function Password() {
  let password = GetValue("password");
  let api4_url =
    "http://localhost/4APIs-Assignment/php/API-4.php?password=" + password;
  GetPasswordConfirmation(api4_url);
}

document.getElementById("button-1").addEventListener("click", Equation);
document.getElementById("button-2").addEventListener("click", Palindrome);
document.getElementById("button-3").addEventListener("click", NoExtraSpace);
document.getElementById("button-4").addEventListener("click", Password);
