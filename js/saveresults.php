<?php


// get the q parameter from URL
$nick = $_REQUEST["nick"];
// get the q parameter from URL
$points = $_REQUEST["points"];
if ($nick !== "") {
    $file = fopen("results.txt", "a");
    // save nick and points as json in results.txt
    fwrite($file, json_encode(array("nick" => $nick, "points" => $points)) . "\n");
    fclose($fp);
}