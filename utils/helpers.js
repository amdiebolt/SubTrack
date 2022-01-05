const hb = require("handlebars")

hb.registerHelper("log", function(something) {
  console.log(something);
});

hb.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
  if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
  }
});

module.exports = {
  timeConvert: (time)=> { 
    return time.toLocaleDateString()
  }
  
};


