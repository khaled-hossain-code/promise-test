const delayms = 1;

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "Dhaka, BD";
    callback(null, city);

  }, delayms)
}

function getWeather(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get weather"));
      return;
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)
}

function getForecast(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get forecast"));
      return;
    }

    const fiveDay = {
      fiveDay: [60, 70, 80, 45, 50]
    };

    callback(null, fiveDay)

  }, delayms)
}

function fetchCurrentCity(response, reject) {
  
  getCurrentCity(function callback(err, city){

    if(err){
      reject(err);
      return;
    }

    response(city);
  });
}