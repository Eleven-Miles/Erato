import React, { useContext } from 'react';
import Slider from '../components/Slider';
import { AppContext } from '../context/context';
import Card from '../components/Card';
import Component from '../components/Component';
import TextBlock from '../components/TextBlock';
import Images from '../components/Images';
import SEO from '../components/SEO';

const Home = () => {
    const [appContext] = useContext(AppContext);
    const slides = appContext.content.home.homeSlider;
    const smallCards = appContext.content.home.smallCards;
    const largeCards = appContext.content.home.largeCards;
    const textBlock = appContext.content.home.textBlock;
    const images = appContext.content.home.images;
    const imageSingle = appContext.content.home.imageSingle;

    return (
        <>
            <SEO title="Home" description="Homepage" name="Home" type="page" />
            <Component component="slider">
                <Slider slides={slides} />
            </Component>
            <Component
                component="cards"
                container={true}
                addStyle={{ '--itemCount': smallCards.items.length }}
                classes="container--medium grid"
            >
                <Card data={smallCards} />
            </Component>
            <Component
                component="text-block"
                container={true}
                classes="container--medium"
            >
                <TextBlock data={textBlock} />
            </Component>
            <Component
                component="images"
                container={true}
                classes="container--medium grid"
                addStyle={{ '--itemCount': images.items.length }}
            >
                <Images data={images} />
            </Component>
            <Component
                component="images"
                container={true}
                classes="container--medium grid"
                addStyle={{ '--itemCount': imageSingle.items.length }}
            >
                <Images data={imageSingle} />
            </Component>
            <Component
                component="cards"
                container={true}
                addStyle={{ '--itemCount': largeCards.items.length }}
                classes="container--medium grid"
            >
                <Card data={largeCards} />
            </Component>
        </>
    );
};

export default Home;

export const ErrorBoundary = () => {
    return <h3>Some Error Boundary</h3>;
};
