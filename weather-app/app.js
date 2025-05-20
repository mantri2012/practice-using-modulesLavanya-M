
const yargs = require('yargs');
const chalk = require('chalk');

// Parse command-line argument using yargs
const argv = yargs
  .option('city', {
    describe: 'City name to fetch weather info',
    demandOption: true,
    type: 'string'
  })
  .help()
  .argv;

// Hardcoded weather data for simulation
const getWeatherData = (city) => {
  const data = {
    'new york': {
      temperature: 72,
      condition: 'Partly Cloudy',
      humidity: 65
    },
    london: {
      temperature: 60,
      condition: 'Rainy',
      humidity: 80
    },
    tokyo: {
      temperature: 80,
      condition: 'Sunny',
      humidity: 45
    },
    sydney: {
      temperature: 85,
      condition: 'Clear',
      humidity: 30
    }
  };

  return data[city.toLowerCase()] || null;
};

// Style and display the weather info
const displayWeather = (city, data) => {
  if (!data) {
    console.log(chalk.red(`❌ Weather data not available for "${city}"`));
    return;
  }

  console.log(chalk.bold.blueBright(`\nWeather Report for ${city.toUpperCase()}`));
  console.log(chalk.green(`🌡️ Temperature: ${data.temperature}°F`));
  console.log(chalk.yellow(`🌤️ Condition: ${data.condition}`));
  console.log(chalk.cyan(`💧 Humidity: ${data.humidity}%\n`));
};

// Main execution
const city = argv.city;
const weather = getWeatherData(city);
displayWeather(city, weather);