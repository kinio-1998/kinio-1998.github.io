export const sendTelegramNotification = async (ip, fingerprint) => {
  const TOKEN = "7644193725:AAG1i-WAMbwloFsr5f0xQqbglhAcTq1mnlU";
  const CHAT_ID = "1312441872";

  const mensaje = `📢 *Nuevo visitante*\n🌐 IP: ${ip}\n🧠 Fingerprint: ${fingerprint}`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: mensaje,
      parse_mode: "Markdown", // para que se vea bonito
    }),
  });
};
