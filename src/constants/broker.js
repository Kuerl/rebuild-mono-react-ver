import mqtt from 'mqtt'

const MQTT_BROKER = [
    {host: '68.183.181.67'},
    {port: 8080}
];

const client = mqtt.connect('ws://'+MQTT_BROKER[0].host+':'+MQTT_BROKER[1].port);

export default client;