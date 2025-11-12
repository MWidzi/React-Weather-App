import icon from '../assets/searchICON.png';
import Context from '../Context';
import React, { useState, useContext } from 'react';

function Bar() {
    // yes I know I put the api key in a public repo, idrc it's free anyway  
    const apiKey = 'd2643e09494939b38826df33f3e5f461';
    const [city, setCity] = useState('');
    const { sharedData, setSharedData } = useContext(Context);

    // Function to fetch weather data for a given city
    const fetchWeather = async (cityName) => {
        if (!cityName) return;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            setSharedData(data);
            console.log(data);
        } catch (err) {
            setSharedData({ "error": "true" });
            console.error(err);
        }
    };

    // Handle Enter key press inside input
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            // Use the current input value directly from event.target.value
            const inputCity = event.target.value.trim();
            setCity(inputCity);
            await fetchWeather(inputCity);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="searchBarContainer">
            <input type="image" src={icon} className="searchIcon" id="searchSubmit"></input>
            <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} className="searchBar" placeholder="Enter city name..." id="searchBar" name="searched" autoComplete="off"></input>
        </div>
    );
}

export default Bar;
