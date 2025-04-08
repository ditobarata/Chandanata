// Koneksi ke broker MQTT over WebSocket
const broker = "wss://test.mosquitto.org:8081";
const topic = "chandanata/tes";

// Buat koneksi client MQTT
const client = mqtt.connect(broker);

const messagesDiv = document.getElementById("messages");

// Saat konek sukses
client.on("connect", () => {
  console.log("🔌 Sambung menyang broker MQTT");
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log("📡 Entering Topic:", topic);
    }
  });
});

// Saat nerima pesan
client.on("message", (topic, message) => {
  const msg = message.toString();
  console.log(`📥 [${topic}]: ${msg}`);
  messagesDiv.innerHTML += `<div><strong>${topic}:</strong> ${msg}</div>`;
});
