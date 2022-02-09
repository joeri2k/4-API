<?php
header("Access-Control-Allow-Origin: *");
$string = $_GET["string"];
$reversed = strrev ( $string );
$palindrome = false;
if(strtolower($string) == strtolower($reversed)){
    $palindrome = true;
}
$array = ["string" => $string,
        "reversed" => $reversed,
        "palindrome" => $palindrome];
echo json_encode($array);
?>