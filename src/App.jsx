import Carousel from "./components/Carousel/Carousel.jsx";

function App() {
    const image = ["../../.././img/cat.jpg", "../../.././img/dog.jpeg", "../../.././img/Logo-only.png"]

    return (
        <>
            <Carousel images={image}/>
        </>
    )
}

export default App
