import paho.mqtt.client as mqtt

broker = "broker.hivemq.com"
request_topic = "chandanata/request"
response_topic = "chandanata/html"

# Saat ada permintaan dari browser
def on_message(client, userdata, msg):
    print(f"📨 Permintaan dari browser: {msg.payload.decode()}")

    if msg.payload.decode() == "minta_html":
        with open("html_response.html", "r", encoding="utf-8") as f:
            html_content = f.read()

        client.publish(response_topic, html_content)
        print("✅ HTML dikirim ke browser!")
      
def on_connect(client, userdata, flags, rc):
    print("✅ Publisher terhubung ke broker")
    client.subscribe(request_topic)

client = client = mqtt.Client(client_id="publisher_chandanata", protocol=mqtt.MQTTv311, userdata=None, transport="tcp")
client.on_connect = on_connect
client.on_message = on_message

client.connect(broker, 1883, 60)
client.loop_forever()
