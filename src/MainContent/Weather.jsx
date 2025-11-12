import React, { useContext } from 'react';
import Context from '../Context';
import placeholder from '../assets/placeholderIcon.png';

function Weather(){
    const { sharedData } = useContext(Context);

    if (!sharedData || !sharedData.weather || sharedData.error) {
        // Render a placeholder while data is not available
        return(
            <div className="weatherContainer">
                <h1 className="weatherText">--</h1>
                <img className="weatherIcon" src={placeholder} alt="weather icon" />
            </div>
        )
    }

    const iconUrl = `https://openweathermap.org/img/wn/${sharedData["weather"][0].icon}@2x.png`;

    return(
        <div className="weatherContainer">
            <h1 className="weatherText">{sharedData["weather"][0].description}&nbsp;</h1>
            <img className="weatherIcon" src={iconUrl} alt="weather icon" />
        </div>
    )
}

export default Weather;