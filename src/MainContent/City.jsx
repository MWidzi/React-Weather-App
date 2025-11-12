import { countries } from 'country-data';
import Context from '../Context';
import React, { useContext } from 'react';

function City(){
    const { sharedData } = useContext(Context);

    if(sharedData.error)
    {
        return(
            <div className="cityContainer">
                <h1 className="cityText">City not found</h1>
            </div>
        )
    }
    else if (!sharedData || !sharedData.sys) {
        // Render a placeholder while data is not available
        return(
            <div className="cityContainer">
                <h1 className="cityText">--</h1>
            </div>
        )
    }

    const country = countries[sharedData["sys"].country.toUpperCase()];

    return(
        <div className="cityContainer">
            <h1 className="cityText">{sharedData.name},&nbsp;</h1>
            <h1 className="countryText">{country ? country.name : 'Unknown country'}</h1>
        </div>
    )
}

export default City;