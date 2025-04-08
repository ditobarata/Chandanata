// app.js
const broker = 'wss://test.mosquitto.org:8081/mqtt';
const client = mqtt.connect(broker);

// Saat konek, kirim permintaan ke publisher
client.on('connect', function () {
    console.log('✅ Terhubung ke broker MQTT');

    // Kirim sinyal permintaan HTML
    client.publish('chandanata/request', 'minta_html');

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
