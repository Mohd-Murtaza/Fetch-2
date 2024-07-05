# Fetch-2

# Weather Report Web Application

A dynamic and user-friendly web application that provides real-time weather reports and forecasts for cities worldwide. This project demonstrates the use of modern web technologies and third-party APIs to create an interactive weather information system.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Images](#images)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Key Components](#key-components)
- [Styling](#styling)
- [JavaScript Functionality](#javascript-functionality)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **City-based Weather Search**: Users can input any city name to retrieve weather information.
- **Current Weather Display**: Shows current temperature, weather icon, and conditions.
- **Temperature Range**: Displays minimum and maximum temperatures for the day.
- **Additional Weather Metrics**: Includes "feels like" temperature, cloud coverage, and wind speed.
- **Sun Cycle Information**: Provides sunrise and sunset times for the searched location.
- **5-Day Weather Forecast**: Offers a glimpse into future weather conditions.
- **Interactive Map**: Embeds a Google Map of the searched location.
- **Responsive Design**: Ensures a seamless experience across various device sizes.
- **Error Handling**: Alerts users when the search field is empty or when a city is not found.

## Folder Structure

    Fetch-2/
    ├── weatherReport2/
    │   ├── index.html    # Main HTML file
    │   ├── weather.css   # Stylesheet for the application
    │   ├── weather.js    # JavaScript file containing app logic
    ├── Fetch Scholar.html
    ├── Fetch_todos.html
    └── README.md         # Project documentation

## Images

<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fetch-2/assets/112779948/df70f95d-ea2a-41b2-a52c-fee232e3689e">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fetch-2/assets/112779948/897de6b3-597e-49fe-81a3-d4fd880cf39d">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Fetch-2/assets/112779948/340e1f52-80e5-4784-8ccc-428a9197aebd">


## Installation

1. Clone the repository: git clone https://github.com/your-username/weather-report.git
2. Navigate to the project directory: cd Fetch-2/weatherReport2
3. Open `index.html` in your preferred web browser.

Note: Ensure you have an active internet connection for API calls and map rendering.

## Usage

1. Upon opening the application, you'll see a search bar at the top.
2. Enter the name of any city in the search bar.
3. Click the "Search" button or press Enter to retrieve weather information.
4. The application will display:
- Current weather conditions
- A map of the city
- A 5-day weather forecast
5. To search for another city, simply enter a new city name and search again.

## Technologies Used

- **HTML5**: Structures the web application.
- **CSS3**: Styles the application, providing a responsive and attractive UI.
- **JavaScript (ES6+)**: Handles the application logic, API calls, and DOM manipulation.
- **Fetch API**: Used for making asynchronous HTTP requests to the weather API.

## API Integration

- **OpenWeatherMap API**: Provides current weather data and forecasts.
- Endpoints used:
 - Current weather: `api.openweathermap.org/data/2.5/weather`
 - 5-day forecast: `api.openweathermap.org/data/2.5/forecast`
- **Google Maps Embed API**: Displays an interactive map of the searched location.

## Key Components

1. **Search Functionality**: Implemented in the `search()` function, triggering API calls.
2. **Weather Data Display**: Dynamic HTML generation based on API responses.
3. **Forecast Generation**: The `get5DaysForecastData()` function processes and displays forecast data.
4. **Error Handling**: Alerts for empty searches and API errors.

## Styling

The `weather.css` file contains styles for:
- Layout using Flexbox
- Responsive design elements
- Hover effects for interactive elements
- Custom styling for weather information cards

## JavaScript Functionality

`weather.js` includes:
- Asynchronous functions for API calls
- Data processing and temperature conversion
- Dynamic HTML content generation
- Event listeners for user interactions

## Future Enhancements

- Add geolocation to automatically detect user's city
- Implement unit conversion (e.g., Celsius to Fahrenheit)
- Include more detailed weather information (e.g., humidity, pressure)
- Add charts or graphs for historical weather data

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
