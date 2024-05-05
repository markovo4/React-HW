import Carousel from "./components/Carousel/Carousel.jsx";
import imgLogo from './assets/img/Logo-only.png';
import imgDog from './assets/img/dog.jpeg';
import img from './assets/img/cat.jpg';

function App() {
    const image = [img, imgDog, imgLogo]

    return (
        <>
            <Carousel images={image}/>
        </>
    )
}

export default App
