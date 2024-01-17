// A Man and his Umbrellas
// Each morning a man walks to work, and each afternoon he walks back home.

// If it is raining in the morning and he has an umbrella at home, he takes an umbrella for the journey so he doesn't get wet, and stores it at work. Likewise, if it is raining in the afternoon and he has an umbrella at work, he takes an umbrella for the journey home.

// Given an array of the weather conditions, your task is to work out the minimum number of umbrellas he needs to start with in order that he never gets wet. He can start with some umbrellas at home and some at work, but the output is a single integer, the minimum total number.

// The input is an array/list of consecutive half-day weather forecasts. So, e.g. the first value is the 1st day's morning weather and the second value is the 1st day's afternoon weather. The options are:

// Without umbrella:

// "clear",
// "sunny",
// "cloudy",
// "overcast",
// "windy".
// With umbrella:

// "rainy",
// "thunderstorms".
// e.g. for three days, 6 values:

// weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"]
// N.B. He never takes an umbrella if it is not raining.

// Examples:
// minUmbrellas(["rainy", "clear", "rainy", "cloudy"])
// should return 2

// Because on the first morning, he needs an umbrella to take, and he leaves it at work. So on the second morning, he needs a second umbrella.

// minUmbrellas(["sunny", "windy", "sunny", "clear"])
// should return 0

// Because it doesn't rain at all

// minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
// should return 1

// Because he only needs 1 umbrella which he takes on every journey.

// **Solution**

function minUmbrellas(weather) {
    // Make empty variables for umbrellas stored at home and at work
    // Loop through weather
    // If there is no umbrella at home and is going to work and it is raining, add 1 to workUmbrellas
    // If there is no umbrella at work and is going home and it is raining, add 1 to homeUmbrellas
    // If he is at home and it is raining and there is an umbrella at home, take one umbrella off homeUmbrellas and add 1 to workUmbrellas
    // If he is at work and it is raining, and there is an umbrella at work, take one off workUmbrellas and add 1 to homeUmbrellas
    // If he is at home and it is not raining, do nothing
    // If he is at work and it is not raining, do nothing
    // Return homeUmbrellas + workUmbrellas
  
    let homeUmbrellas = 0;
    let workUmbrellas = 0;
  
    for (let i = 0; i < weather.length; i++) {
  
      if (i % 2 === 0) {
        if ( (weather[i] === 'rainy' || weather[i] === 'thunderstorms') && homeUmbrellas === 0 ) {
          workUmbrellas++;
        } else if ( (weather[i] === 'rainy' || weather[i] === 'thunderstorms') && homeUmbrellas > 0 ) {
          homeUmbrellas--;
          workUmbrellas++;
        }
      }
  
      if (i % 2 !== 0) {
        if ( (weather[i] === 'rainy' || weather[i] === 'thunderstorms') && workUmbrellas === 0 ) {
          homeUmbrellas++;
        } else if ( (weather[i] === 'rainy' || weather[i] === 'thunderstorms') && workUmbrellas > 0 ) {
          workUmbrellas--;
          homeUmbrellas++;
        }
      }
  
    }
  
    return homeUmbrellas + workUmbrellas;
}