// import Button from "./TopBar/Header.jsx";
import Header from "./TopBar/Header.jsx";
import Temperature from "./MainContent/Temperature.jsx";
import City from "./MainContent/City.jsx"
import Weather from "./MainContent/Weather.jsx";
import { ContextProvider } from "./Context.jsx";

function App()
{
  return(
    <ContextProvider>
      <Header></Header>
      <div className="mainContainer">
        <Temperature></Temperature>
        <div className="cityWeatherContainer">
            <City/>
            <Weather/>
        </div>
        <div/>
      </div>
    </ContextProvider>
  ); 
}

export default App
