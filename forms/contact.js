document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsapp-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const phone = "5511957774388"; // DDI + DDD + número

    const text = encodeURIComponent(
      `Olá, gostaria de mais informações.\n\n` +
      `Nome: ${name}\n` +
      `Email: ${email}\n` +
      `Assunto: ${subject}\n\n` +
      `Mensagem:\n${message}`
    );

    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  });
});
