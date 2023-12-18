<?php
    $toEmail = "info@hubertsmobileworkshop.co.zw";
    $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>