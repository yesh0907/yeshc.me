<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$msg = 'Name: ' . $_POST['name'] . "\n"
						. 'Email: ' . $_POST['email'] . "\n"
						. 'Message: ' . $_POST['message'];
		$headers = "From: no-reply@yeshc.me";
		$mail = mail('yeshc0907@gmail.com', $_POST['subject'], $msg, $headers);
		if ($mail) {
			exit(json_encode(array('error' => 'false')));
		}
		else {
			die(json_encode(array('error' => 'true')));
		}
	}
?>