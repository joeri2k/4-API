<?php
$string = $_GET["string"];
$noblank_string = trim(preg_replace('/\s+/', ' ', $string));
$array = ["string" => $string,
        "cleaned_string" => $noblank_string];
echo json_encode($array);
?>