import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Marketplace} from "./layout/sections/marketplace/Marketplace";
import {PopularArtists} from "./layout/sections/artists/PopularArtists";
import {CreateYourNft} from "./layout/sections/create-your-nft/CreateYourNft";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


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
            <GoTopBtn/>
        </div>
    );
}

export default App;

