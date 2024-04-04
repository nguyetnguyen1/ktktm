<?php
require'db/connect.php';
if(isset($_POST['btn-reg']))
{
    echo"Đã submit";
    echo "<pre>";
    print($_POST);
    $fullname = $_POST['$fullname'];
    $gender = $_POST['$gender'];
    $dob = $_POST['dob'];
    $placeOfBirth = $_POST['placeOfBirth'];
    $ethnicity = $_POST['ethnicity'];
    $religion = $_POST['religion'];
    $permanentAddress = $_POST['permanentAddress'];
    $schoolTHCS = $_POST['schoolTHCS'];
    $schoolTHPT = $_POST['schoolTHPT'];
    $graduationYearTHCS = $_POST['graduationYearTHCS'];
    $graduationYearTHPT	= $_POST['graduationYearTHPT'];
    $idNumber = $_POST['idNumber'];
    $idIssueDate = $_POST['idIssueDate'];
    $idIssuePlace = $_POST['idIssuePlace'];
    $contactAddress = $_POST['contactAddress'];
    $phone = $_POST['phone'];
    $parentPhone = $_POST['parentPhone']; 
    
    if(!empty($fullname) && !empty($gender) && !empty($dob) && !empty($placeOfBirth) && !empty($ethnicity) && !empty($religion)
    && !empty($permanentAddress) && !empty($schoolTHCS) && !empty($schoolTHPT) && !empty($graduationYearTHCS)
    && !empty($graduationYearTHPT) && !empty($idNumber) && !empty($idIssueDate) && !empty($idIssuePlace)
    && !empty($contactAddress) && !empty($phone) && !empty($parentPhone))
    {
        echo "<pre>";
        print_r($_POST);

        $sql = "INSERT INTO 'tbl_user'('fullname','gender','dob','placeOfBirth','ethnicity','religion',
        'permanentAddress','schoolTHCS','schoolTHPT','graduationYearTHCS','graduationYearTHPT','idNumber',
        'idIssueDate','idIssuePlace','contactAddress','phone','parentPhone') VALUES('$fullname','$gender',
        '$dob','$placeOfBirth','$ethnicity','$religion',
        '$permanentAddress','$schoolTHCS','$schoolTHPT','$graduationYearTHCS','$graduationYearTHPT','$idNumber',
        '$idIssueDate','$idIssuePlace','$contactAddress','$phone','$parentPhone')";

        if($conn->query($sql)===TRUE){
            echo"lưu dữ liệu thành công";
        }else{
            echo"lỗi {$sql}.$conn->error";
        }
    }else{
        echo"Bạn cần nhập đầy đủ thông tin trước khi đăng ký";
    }
}
?>
<br>
<a href="App.js">Quay lại trang đăng ký</a>