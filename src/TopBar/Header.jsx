import logo from '../assets/logo.png'
import Bar from './Search_Bar.jsx'

function Header(){
    return(
        <header>
            <div className='logoContainer'>
                <img src={logo} alt="Logo" className='logo'></img>
                <h1>WeatherApp</h1>
            </div>
            <Bar/>
            {/* z góry przepraszam za tą zbrodnie przeciwko ludzkości poniżej */}
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </header>
    )
}

export default Header;
