import React from 'react';
import Nav_bar from '../components/nav';
import WeatherData from '../components/weatherData';

export default function Home_page() {
    return (
        <div>
            <Nav_bar />
            <WeatherData />
        </div>
    );
}
