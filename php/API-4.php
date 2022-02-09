<?php
header("Access-Control-Allow-Origin: *");
$password = $_GET["password"];
$hashed_pwd = hash('sha256',$password);
$verified = false;
$char = '/^(?=.*[a-z])(?=.*\\d).{8,}$/i';
if(preg_match($char, $password)) {
        $verified = true ;
}else {
        $verified = false;
      }
$array = ["password" => $hashed_pwd,
        "verification" => $verified];
echo json_encode($array);
?>