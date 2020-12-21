import React from 'react';
import WeatherData from '../components/weatherData';
import Nav_bar from '../components/nav';
import AskBot from '../components/askbot/AskBot';

export default function Home_page() {
    return (
        <div>
            <div className="container">
                <Nav_bar />
                <WeatherData />
                <AskBot />
            </div>
        </div>
    );
}
