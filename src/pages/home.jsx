import React from 'react';
import WeatherData from '../components/weatherData';
import Nav_bar from '../components/nav';

export default function Home_page() {
    return (
        <div>
            <Nav_bar />
            <WeatherData />
        </div>
    );
}
