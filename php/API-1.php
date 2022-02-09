<?php
header("Access-Control-Allow-Origin: *");
$x = $_GET["x"];
$y = $_GET["y"];
$result = 2 * $x + $y % 2;
$array = ["x" => $x,
        "y" => $y, 
        "result" => $result];
echo json_encode($array);
?>
