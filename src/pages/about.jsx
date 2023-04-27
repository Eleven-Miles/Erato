import React, { useContext } from 'react';
import Component from '../components/Component';
import Card from '../components/Card';
import { AppContext } from '../context/context';
import Images from '../components/Images';
import TextBlock from '../components/TextBlock';
import SEO from '../components/SEO';
import NotFound from '../components/NotFound';

const About = () => {
    const [appContext] = useContext(AppContext);

    const smallCards = appContext.content.about.smallCards;
    const largeCards = appContext.content.about.largeCards;
    const textBlock = appContext.content.about.textBlock;
    const images = appContext.content.about.images;

    return (
        <>
            <SEO title="About" description="About" name="About" type="page" />
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

export default About;

export const ErrorBoundary = () => {
    return <NotFound />;
};
