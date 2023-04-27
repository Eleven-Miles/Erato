import React, { useContext, useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import SlideItem from './SliderItem';
import SliderButtons from './SliderButtons';

const Slider = ({ slides }) => {
    const sliderRef = useRef();
    const sliderNextRef = useRef();
    const sliderPrevRef = useRef();
    let singleSlide = slides.items.length === 1;

    const config = {
        gap: 0,
        animationDuration: 300,
        animationTimingFunc: 'ease-in-out',
        perView: 1,
        type: 'slider',

        arrows: {
            prev: sliderPrevRef.current,
            next: sliderNextRef.current,
        },
    };

    useEffect(() => {
        initializeGlider();
    }, [slides]);

    const initializeGlider = () => {
        const slider = new Glide(sliderRef.current, config);
        slider.mount();
    };

    return (
        <div ref={sliderRef} className={`glide`}>
            <div className="glide__track" data-glide-el="track">
                <ul className={`glide__slides ${singleSlide ? `disable` : ``}`}>
                    {slides.items.map((item, index) => (
                        <SlideItem key={index} item={item} />
                    ))}
                </ul>
            </div>
            {!singleSlide && (
                <SliderButtons
                    prefRef={sliderPrevRef}
                    nextRef={sliderNextRef}
                />
            )}
        </div>
    );
};

export default Slider;
