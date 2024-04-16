<?php
ob_start();
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header("Content-Type: application/json");
 
if (isset($_POST["your-name"]) && isset($_POST["your-email"]) && isset($_POST["your-message"])) {

    $name = $_POST["your-name"];
    $email = $_POST["your-email"];
	$message = $_POST["your-message"];
 
    session_start();
	
    if (empty($name)) {
        $data = array("status" => "error", "message" => "Er liep iets fout. Probeer het later opnieuw.", "validationError" => "Naam is verplicht.");
        echo json_encode($data);
        exit;
    }

    if (empty($email)) {
        $data = array("status" => "error", "message" => "Er liep iets fout. Probeer het later opnieuw.", "validationError" => "Email is verplicht.");
        echo json_encode($data);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $data = array("status" => "error", "message" => "Er liep iets fout. Probeer het later opnieuw.", "validationError" => "Email is niet geldig.");
        echo json_encode($data);
        exit;
    }

    if (empty($message)) {
        $data = array("status" => "error", "message" => "Er liep iets fout. Probeer het later opnieuw.", "validationError" => "Bericht is verplicht.");
        echo json_encode($data);
        exit;
    }
    
    try {
        $mail = new PHPMailer(true);
        $mail->IsSMTP();
        $mail->Host = 'webreus.email:465';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@jolafun.be';
        $mail->Password = '';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('info@jolafun.be', 'Jolafun - Form');
        $mail->addAddress('info@jolafun.be', 'Jolafun');
        $mail->addReplyTo($email);

        $mail->Subject = 'Nieuw bericht via de website';
        $mail->isHTML(true);
        $mail->Body = 'Nieuw bericht via de website <br><br>';
        $mail->Body .= 'Bericht van: <br>';
        $mail->Body .= $name . " <br>";
        $mail->Body .= $email . " <br>";

        $mail->Body .= 'Bericht:';
        if (!empty($message)) {
            $mail->Body .= '<br><b>' . $message . "</b><br>";
        }

        $mail->send();
        
        $data = array("status" => "success", "message" => "Je bericht werd verzonden.", "validationError" => null);        
    } catch (Exception $e) {
        $data = array("status" => "error", "message" => "Er liep iets fout. Probeer het later opnieuw.", "validationError" => null);
    }    

    echo json_encode($data);
    exit;
    
} else {
	$data = array("status" => "error", "message" => "Er ontbreken velden.", "validationError" => null);
    echo json_encode($data);
    exit;
}