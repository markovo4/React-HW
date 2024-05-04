import React from 'react';
import cn from 'classnames';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    prevSlide = () => {
        this.setState((currentState) => ({
            activeIndex: currentState.activeIndex === 0 ? this.props.images.length - 1 : currentState.activeIndex - 1
        }));
    }

    nextSlide = () => {
        this.setState((currentState) => ({
            activeIndex: currentState.activeIndex === this.props.images.length - 1 ? 0 : currentState.activeIndex + 1
        }));
    }

    isActive = (activeIndex, index) => {
        const activeClass = cn(
            `carousel-item`,
            index === activeIndex ? 'active' : ''
        )
        return activeClass;
    }


    render() {
        const {images} = this.props;
        const {activeIndex} = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {images.map((image, i) => (
                        <div key={i} className={this.isActive(activeIndex, i)}>

                            <img alt={`Slide ${i + 1}`} className="d-block w-100" src={image}/>

                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" onClick={this.prevSlide} data-bs-target="#carousel"
                        type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" onClick={this.nextSlide} data-bs-target="#carousel"
                        type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        )

    }
}

export default Carousel;