const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 6df04dca,
  apiSecret: fb87247a610a794b
});

nexmo.message.sendSms(
  YOUR_VIRTUAL_NUMBER, '13092787733', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
