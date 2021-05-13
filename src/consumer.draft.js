const marker = require('@ajar/marker'); 
const index = require('./index');

const input = ["hi", "there", "stranger"]
marker.verbose(input)
marker.verbose(index.slugger(...input))
