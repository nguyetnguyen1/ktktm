<?php
$host = "locahost";
$username = "root";
$password = "";
$dbname = "unitop-store-data";

$conn = new mysqli($host, $username, $password, $dbname);

if($conn->connect_errno)
{
    die("Kết nối không thành công ". $conncon->connect_errno);
}
echo"Kết nối thành công";
?>