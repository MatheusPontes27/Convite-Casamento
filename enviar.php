<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    
    $para = "matheusemmanuel71@gmail.com"; // Substitua pelo seu email real
    $assunto = "Confirmação de Presença - Casamento";
    $mensagem = "Nome: $nome\nEmail: $email\nConfirmação de presença recebida!";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($para, $assunto, $mensagem, $headers)) {
        echo "<script>alert('Confirmação enviada com sucesso!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar confirmação. Tente novamente.'); window.location.href='index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
