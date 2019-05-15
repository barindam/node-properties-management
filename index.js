
const LoadProperties = require ('./src/loadProperties');
const loadProperties = new LoadProperties();

const appointmentTopic = loadProperties.getValueByPropertyName('pubsub.topic.appoinment');
const dbPort = loadProperties.getValueByPropertyName('database.mysql.port');
const dbhost = loadProperties.getValueByPropertyName('database.mysql.host');

console.log('appointmentTopic is: ',appointmentTopic);
console.log('dbPort is: ',dbPort);
console.log('dbhost is: ',dbhost);