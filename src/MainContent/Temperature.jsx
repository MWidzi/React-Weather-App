import Context from '../Context';
import React, { useContext } from 'react';

function Temperature(){
    const { sharedData } = useContext(Context);

    if (!sharedData || !sharedData.main || sharedData.error) {
        // Render a placeholder while data is not available
        return(
            <div className="temperatureContainer">
                <h1 className="temperatureText">--</h1>
                <h1 className="celciusText">°C</h1>
            </div>
        )
    }

    return(
        <div className="temperatureContainer">
            <h1 className="temperatureText">{Math.round(sharedData["main"].temp)}</h1>
            <h1 className="celciusText">°C</h1>
        </div>
    )
}

export default Temperature;