<?php


header("Content-Type: text/plain");


function connect() {
  $psd = str_rot13('inzcver') . floor(sin(1)*1000-cos(1)*300-log(100000)-1);
  $conn = mysql_connect('localhost', 'jcubic', $psd);
  mysql_select_db('jcubic_main');
  return $conn;
}
function mysql_array($query) {
  if ($res = mysql_query($query)) {
    if (mysql_num_rows($res) > 0) {
        while ($row = mysql_fetch_row($res)) {
            $result[] = $row;
        }
        return $result;
    } else {
        return array();
    }
  } else {
    throw new Exception("MySQL Error: " . mysql_error());
  }
}

connect();

$array = mysql_array("SELECT distinct md5(email) from jq_comments where avatar <> 'avatars/default.png'");
foreach ($array as $row) {
  $data = file_get_contents('http://www.gravatar.com/avatar/' . $row[0] . '.png?d=404&s=48');
  if ($data) {
    $name = "avatars/" . $row[0] . ".png";
    if (!file_exists($name)) {
      $file = fopen($name, "w");
      if (!$file) {
        echo "IO Error: Can't open file $avatar";
      }
      $ret = fwrite($file, $data);
      echo "avatar: " . $name . " data[" . strlen($data) . "] saved " . ($ret == false ? 'fail' :
        $ret) . "\n";
      fclose($file);
    }
  } else {
    $query = "UPDATE jq_comments SET avatar = 'avatars/default.png' WHERE md5(email) = '". $row[0]."'";
    echo $row[0] . " not found update avatar " . (mysql_query($query) ? "ok" : "fail") . "\n";   
  }
}
