<?php
class User
{
    public $nick;
    public $points;
}
// get the q parameter from URL
$nick = $_REQUEST["nick"];
// get the q parameter from URL
$points = $_REQUEST["points"];
if ($nick !== "") {
    $user = new User();
    $user->nick = $nick;
    $user->points =$points;
    $fp = fopen('points.json', 'w+');
    fwrite($fp, json_encode($user));
    fclose($fp);
}