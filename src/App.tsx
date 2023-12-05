import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Marketplace} from "./layout/sections/marketplace/Marketplace";
import {PopularArtists} from "./layout/sections/popular-artists/PopularArtists";
import {CreateYourNft} from "./layout/sections/create-your-nft/CreateYourNft";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Marketplace/>
            <CreateYourNft/>
            <PopularArtists/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;

