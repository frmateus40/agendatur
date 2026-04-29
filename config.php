<?php
/**
 * =====================================================
 *  CONFIGURACIÓN SMTP — AgendaTur
 *  Edita solo este archivo para cambiar el correo
 * =====================================================
 *
 *  OPCIÓN A: Gmail
 *    SMTP_HOST = 'smtp.gmail.com'
 *    SMTP_PORT = 587
 *    SMTP_USER = 'tucorreo@gmail.com'
 *    SMTP_PASS = 'contraseña de aplicación' (no la de Gmail)
 *    Ver: myaccount.google.com → Seguridad → Contraseñas de aplicaciones
 *
 *  OPCIÓN B: Hotmail / Outlook (para enviar DESDE Hotmail)
 *    SMTP_HOST = 'smtp.office365.com'
 *    SMTP_PORT = 587
 *    SMTP_USER = 'tucorreo@hotmail.com'
 *    SMTP_PASS = 'tu contraseña de Hotmail'
 *
 *  OPCIÓN C: cualquier otro proveedor de hosting
 *    Pide los datos SMTP a tu proveedor de hosting.
 * =====================================================
 */

// ----- CORREO QUE ENVÍA (remitente) -----
define('SMTP_HOST', 'smtp.gmail.com');      // Servidor SMTP
define('SMTP_PORT', 587);                   // Puerto (587 = TLS)
define('SMTP_USER', 'tucorreo@gmail.com');  // Tu correo que enviará
define('SMTP_PASS', 'xxxx xxxx xxxx xxxx'); // Contraseña de aplicación
define('SMTP_FROM_NAME', 'AgendaTur Web');  // Nombre del remitente

// ----- CORREO QUE RECIBE los registros -----
define('ADMIN_EMAIL', 'juanfelipe-156@hotmail.com');
define('ADMIN_NAME',  'Juan Felipe — AgendaTur');

// ----- NOMBRE DEL SITIO -----
define('SITE_NAME', 'AgendaTur');
