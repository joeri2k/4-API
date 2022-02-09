function GetValue(id) {
  let input_name = document.getElementById(id).value;
  return input_name;
}

async function GetPalindrome(url) {
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
  api2_url = "http://localhost/4APIs-Assignment/php/API-2.php?string=" + string;
  GetPalindrome(api2_url);
}

document.getElementById("button-2").addEventListener("click", Palindrome);
