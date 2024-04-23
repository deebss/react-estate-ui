import './homePage.scss'
import SearchBar from "../../components/searchBar/searchBar.jsx";

const HomePage = () => {
    return (
        <div className={'homePage'}>
            <div className={'textContainer'}>
                <div className={'wrapper'}>
                    <h1 className={'title'}>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus vel est id auctor. Donec vitae magna rhoncus, malesuada libero in, tempus massa.</p>
                    <SearchBar />
                    <div className={'boxes'}>
                        <div className={'box'}>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className={'box'}>
                            <h1>200</h1>
                            <h2>Awards Received</h2>
                        </div>
                        <div className={'box'}>
                            <h1>1200+</h1>
                            <h2>Properties Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'imgContainer'}>
                <img src={'/bg.png'} alt={'real estate'}/>
            </div>
        </div>
    )
}

export default HomePage