<?php
$target_dir = "upload/";//$target_dir = "uploads/" - ระบุไดเรกทอรีที่จะวางไฟล์
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);//$target_file ระบุเส้นทางของไฟล์ที่จะอัปโหลด
$uploadOk = 1;                                          //uploadOk=1 ยังไม่ได้ใช้ (จะใช้ในภายหลัง)
$doc_file = strtolower(pathinfo($target_file,PATHINFO_EXTENSION)); //$imageFileType เก็บนามสกุลไฟล์ของไฟล์ (ตัวพิมพ์เล็ก)
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
      echo "File is an image - " . $check["mime"] . ".";
      $uploadOk = 1;
    } else {
      echo "File is not an image.";
      $uploadOk = 0;
    }
  }
  ?>