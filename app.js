// app.js
const broker = 'wss://broker.hivemq.com:8884/mqtt';
const clientId = "webclient_" + Math.random().toString(16).substr(2, 8);
const client = mqtt.connect(broker, { clientId: clientId });


// Saat konek, kirim permintaan ke publisher
client.on('connect', function () {
    console.log('✅ Terhubung ke broker MQTT');

    // Kirim sinyal permintaan HTML
    client.publish('chandanata/request', 'minta_html');
    console.log("📤 Permintaan HTML dikirim ke broker");

    // Subscribe untuk menerima HTML
    client.subscribe('chandanata/html', function (err) {
        if (!err) {
            console.log('📡 Menunggu HTML...');
        }
    });
});

// Saat menerima HTML
client.on('message', function (topic, message) {
    if (topic === 'chandanata/html') {
        // Tampilkan ke halaman
        document.getElementById('content').innerHTML = message.toString();
        console.log('📨 HTML diterima dan ditampilkan');
    }
});
