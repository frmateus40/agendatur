<?php
/**
 * AgendaTur — register.php
 * Recibe el registro del formulario y envía email a juanfelipe-156@hotmail.com
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Solo acepta POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'msg' => 'Método no permitido.']);
    exit;
}

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ---- Leer y sanitizar datos ----
function clean($val) {
    return htmlspecialchars(strip_tags(trim($val ?? '')), ENT_QUOTES, 'UTF-8');
}

$nombre    = clean($_POST['nombre']    ?? '');
$cedula    = clean($_POST['cedula']    ?? '');
$telefono  = clean($_POST['telefono'] ?? '');
$correo    = filter_var(trim($_POST['correo'] ?? ''), FILTER_SANITIZE_EMAIL);
$fecha_nac = clean($_POST['fecha_nac'] ?? '');
$fecha_reg = date('d/m/Y H:i:s');

// ---- Validaciones básicas ----
if (!$nombre || !$cedula || !$telefono || !$correo || !$fecha_nac) {
    echo json_encode(['ok' => false, 'msg' => 'Todos los campos son obligatorios.']);
    exit;
}
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['ok' => false, 'msg' => 'El correo electrónico no es válido.']);
    exit;
}

// ---- Construir el cuerpo del email (HTML) ----
$cuerpo_html = "
<!DOCTYPE html>
<html lang='es'>
<head><meta charset='UTF-8'/></head>
<body style='margin:0;padding:0;background:#f4f6fa;font-family:Inter,Arial,sans-serif;'>
  <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6fa;padding:30px 0;'>
    <tr><td align='center'>
      <table width='560' cellpadding='0' cellspacing='0' style='background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.1);'>

        <!-- HEADER -->
        <tr>
          <td style='background:#2333c8;padding:28px 36px;text-align:center;'>
            <div style='font-size:26px;font-weight:900;color:#fff;letter-spacing:-1px;'>
              Agenda<span style='color:#f7941d;'>tur</span>
            </div>
            <p style='color:rgba(255,255,255,.8);margin:6px 0 0;font-size:13px;'>Viaja a tu manera</p>
          </td>
        </tr>

        <!-- TÍTULO -->
        <tr>
          <td style='padding:28px 36px 8px;'>
            <h2 style='color:#2333c8;font-size:20px;margin:0 0 6px;'>🎉 Nuevo registro de usuario</h2>
            <p style='color:#64748b;font-size:14px;margin:0;'>Se registró un nuevo usuario en <strong>" . SITE_NAME . "</strong> el <strong>{$fecha_reg}</strong></p>
          </td>
        </tr>

        <!-- DATOS -->
        <tr>
          <td style='padding:20px 36px 28px;'>
            <table width='100%' cellpadding='0' cellspacing='0' style='border-collapse:collapse;'>
              " . fila('👤 Nombre completo', $nombre)
              . fila('🪪 Cédula / Documento', $cedula)
              . fila('📞 Teléfono', $telefono)
              . fila('📧 Correo electrónico', $correo)
              . fila('🎂 Fecha de nacimiento', $fecha_nac)
              . fila('🗓 Fecha de registro', $fecha_reg) . "
            </table>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style='background:#f4f6fa;padding:18px 36px;text-align:center;border-top:1px solid #e2e8f0;'>
            <p style='color:#94a3b8;font-size:12px;margin:0;'>
              Este mensaje fue generado automáticamente por el sistema de registro de <strong>" . SITE_NAME . "</strong>.<br/>
              No respondas a este correo.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>";

function fila($etiqueta, $valor) {
    return "
      <tr>
        <td style='padding:10px 14px;background:#f8fafc;border-radius:8px;margin-bottom:8px;
                   border-left:3px solid #2333c8;font-size:13px;color:#64748b;font-weight:600;
                   width:42%;vertical-align:top;'>{$etiqueta}</td>
        <td style='width:8px;'></td>
        <td style='padding:10px 14px;font-size:14px;color:#1a2640;font-weight:600;
                   background:#fff;border:1px solid #e2e8f0;border-radius:8px;vertical-align:top;'>{$valor}</td>
      </tr>
      <tr><td colspan='3' style='height:8px;'></td></tr>";
}

// ---- Enviar con PHPMailer ----
$mail = new PHPMailer(true);

try {
    // Servidor SMTP
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    // Remitente y destinatario
    $mail->setFrom(SMTP_USER, SMTP_FROM_NAME);
    $mail->addAddress(ADMIN_EMAIL, ADMIN_NAME);
    $mail->addReplyTo($correo, $nombre);   // Responder va al usuario registrado

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = '🧳 Nuevo registro en ' . SITE_NAME . ' — ' . $nombre;
    $mail->Body    = $cuerpo_html;
    $mail->AltBody = "Nuevo registro en " . SITE_NAME . "\n\n"
                   . "Nombre:          {$nombre}\n"
                   . "Cédula:          {$cedula}\n"
                   . "Teléfono:        {$telefono}\n"
                   . "Correo:          {$correo}\n"
                   . "Fecha nac.:      {$fecha_nac}\n"
                   . "Fecha registro:  {$fecha_reg}\n";

    $mail->send();

    echo json_encode([
        'ok'  => true,
        'msg' => '¡Registro exitoso! Te hemos enviado un correo de confirmación.'
    ]);

} catch (Exception $e) {
    // Log del error (no lo muestres al usuario)
    error_log('[AgendaTur] Error SMTP: ' . $mail->ErrorInfo);
    echo json_encode([
        'ok'  => false,
        'msg' => 'Hubo un problema al enviar el correo. Por favor intenta de nuevo.'
    ]);
}
