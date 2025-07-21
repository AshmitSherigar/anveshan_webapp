import React from 'react'
import InfiniteMenu from './InfiniteMenu'


const ProjectDisplay = () => {

    const items = [
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://google.com/',
            title: 'Fake News Detection',
            description: 'A machine learning model that classifies news articles as real or fake using NLP techniques.'
        },
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://google.com/',
            title: 'Fake News Detection',
            description: 'A machine learning model that classifies news articles as real or fake using NLP techniques.'
        },
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://google.com/',
            title: 'Fake News Detection',
            description: 'A machine learning model that classifies news articles as real or fake using NLP techniques.'
        },
        {
            image: 'https://picsum.photos/400/400?grayscale',
            link: 'https://google.com/',
            title: 'Handwritten Digit Recognition',
            description: 'An image classification project using CNNs to recognize digits from the MNIST dataset.'
        },
        {
            image: 'https://picsum.photos/500/500?grayscale',
            link: 'https://google.com/',
            title: 'Movie Recommendation System',
            description: 'A collaborative filtering-based recommender system that suggests movies based on user preferences.'
        },
        {
            image: 'https://picsum.photos/600/600?grayscale',
            link: 'https://google.com/',
            title: 'Brain Tumor Classification',
            description: 'A deep learning model to classify MRI brain scans into tumor or non-tumor categories.'
        }
    ];

    return (

        <div style={{ height: '850px', position: 'relative' }}>
            <InfiniteMenu items={items} />
        </div>
    )
}

export default ProjectDisplay