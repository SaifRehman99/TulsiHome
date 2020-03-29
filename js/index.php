<!DOCTYPE html>
<html>
<head>
	<title>	Scraping</title>
</head>
<body>
<?php
		$data = file_get_contents("https://www.blockexperts.com/btcs7");
		echo string ($data);
?>
</body>
</html>