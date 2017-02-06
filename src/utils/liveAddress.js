import jQuery from 'jquery.min.js'
import LiveAddress from 'jquery.liveaddress.min.js'

var htmlKey = '1990333215773402'

var ss = jQuery.LiveAddress({
  key: htmlKey,
  missingInputMessage: "Not enough input<br>",
  certifyMessage: "Use my address.",
  verifySecondary: true,
  waitForStreet: true,
  debug: true,
  target: "US",
  addresses: [{
    address1: "#street",
    locality: "#city",
    administrative_area: "#state",
    postal_code: "#zip",
    country: "#country"
  }],
  agent: "website:plugin-demo@latest|"
});
