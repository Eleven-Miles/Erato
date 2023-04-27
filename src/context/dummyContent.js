import logo from '../assets/svgs/logo.svg';
import heroImg from '../assets/pngs/hero-img.png';
import heroImgTwo from '../assets/pngs/hero-img-2.png';
import cardBg from '../assets/pngs/card-bg.png';
import imageSmall from '../assets/pngs/image-small.png';
import imageLarge from '../assets/pngs/image-large.png';

const dummyContent = {
    homeSlider: {
        items: [{ image: heroImg }],
    },
    images: {
        items: [{ image: imageSmall }, { image: imageSmall }],
    },
    imageSingle: {
        items: [{ image: imageLarge }],
    },
    smallCards: {
        items: [
            {
                title: 'Lorem Ipsum',
                image: cardBg,
                size: 'small',
                cta: '/about',
                cta_label: 'read more',
            },
            {
                title: 'Title Two',
                image: cardBg,
                size: 'small',
                cta: '/about',
                cta_label: 'read more',
            },
            {
                title: 'Title Three',
                image: cardBg,
                size: 'small',
                cta: '/about',
                cta_label: 'read more',
            },
        ],
    },
    largeCards: {
        items: [
            {
                title: 'Title One',
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                image: cardBg,
                size: 'large',
                cta: '/about',
                cta_label: 'read more',
            },
        ],
    },
    textBlock: {
        title: 'Text block title',
        content:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam nulla, convallis ut dolor ut, tristique feugiat sapien. Quisque consequat ligula vitae risus scelerisque, in commodo mi maximus. Suspendisse dictum lorem vel augue malesuada, id lobortis nunc cursus. In mollis nulla et ante iaculis, vel lacinia ligula vehicula. In hac habitasse platea dictumst. Donec ut placerat magna. Curabitur gravida interdum posuere. Nam in pharetra nunc.</p><p>Nullam tincidunt pretium faucibus.Morbi in fringilla dui.Donec iaculis dictum ornare.Sed faucibus, lorem lobortis luctus porta, orci urna condimentum neque, finibus venenatis lorem magna a est.Phasellus tincidunt, ligula id consectetur dapibus, felis lectus sodales ex, vel scelerisque justo mauris eu libero.Nam lobortis fringilla felis.Duis laoreet rutrum posuere.Etiam vel bibendum mi, vitae maximus nulla.Phasellus volutpat non neque at consectetur.In vulputate erat quis vulputate ullamcorper.Mauris luctus convallis ornare.</p>',

        type: 'large',
    },
};

export { dummyContent };
