<?php
$string = $_GET["string"];
$reversed = strrev ( $string );
$palindrome = false;
if($string == $reversed){
    $palindrome = true;
}
$array = ["string" => $string,
        "reversed" => $reversed,
        "palindrom" => $palindrome];
echo json_encode($array);
?>