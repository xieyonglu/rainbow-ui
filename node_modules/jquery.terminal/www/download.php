<?php

require('utils.php');
hit();
header("X-Powered-By: ");

$filename = $_GET['file'];

// required for IE, otherwise Content-disposition is ignored
if(ini_get('zlib.output_compression'))
  ini_set('zlib.output_compression', 'Off');

$info = pathinfo(basename($_GET['file']));

if (!isset($_GET['file']) || $_GET['file'] == "" || 
    !file_exists($_GET['file'])) {
  header("HTTP/1.0 404 Not Found");
  echo "404 file not found";
  exit;
}

if (preg_match("/\.\.|http/", $_GET['file'])) {
  header('HTTP/1.1 403 Forbidden');
  echo "403 forbidden";
  exit;
}

switch($info['extension']) {
  case "pdf": $ctype="application/pdf"; break;
  case "zip": $ctype="application/zip"; break;
  case "doc": $ctype="application/msword"; break;
  case "xls": $ctype="application/vnd.ms-excel"; break;
  case "ppt": $ctype="application/vnd.ms-powerpoint"; break;
  case "gif": $ctype="image/gif"; break;
  case "png": $ctype="image/png"; break;
  case "gz": $ctype="application/x-gzip"; break;
  case "jpeg":
  case "jpg": $ctype="image/jpg"; break;
  default: $ctype="application/ocet-stream";
}
header("Pragma: public"); // required
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: private",false); // required for certain browsers 
header("Content-Type: $ctype");
// change, added quotes to allow spaces in filenames, by Rajkumar Singh
header("Content-Disposition: attachment; filename=\"".basename($_GET['file'])."\";" );
header("Content-Transfer-Encoding: binary");
header("Content-Length: ".filesize($_GET['file']));
ob_clean();
flush();
if (strcmp($info['extension'], 'gz') == 0) {
  $file = gzopen($_GET['file'], 'r');
  gzpassthru($file);
  gzclose($file);
} else {
  readfile($_GET['file']);
}
?>