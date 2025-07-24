import React from 'react'
import InfiniteMenu from './InfiniteMenu'


const ProjectDisplay = () => {

    const items = [
        {
            image: 'https://picsum.photos/301/301?grayscale',
            link: 'https://github.com',
            title: 'Real-Time Face Mask Detection',
            description: 'A computer vision model that detects whether a person is wearing a face mask in real-time using OpenCV and TensorFlow.'
        },
        {
            image: 'https://picsum.photos/302/302?grayscale',
            link: 'https://github.com',
            title: 'AI Chatbot for Customer Support',
            description: 'An NLP-powered chatbot designed to automate customer support queries using Dialogflow and React.'
        },
        {
            image: 'https://picsum.photos/303/303?grayscale',
            link: 'https://github.com',
            title: 'Credit Card Fraud Detection',
            description: 'A classification model trained on transaction data to detect fraudulent activity using XGBoost.'
        },
        {
            image: 'https://picsum.photos/304/304?grayscale',
            link: 'https://github.com',
            title: 'Personal Finance Tracker',
            description: 'A web app with machine learning-based budget predictions and visual analytics for income and expenses.'
        },
        {
            image: 'https://picsum.photos/305/305?grayscale',
            link: 'https://github.com',
            title: 'Pose Estimation System',
            description: 'A deep learning solution that tracks human body movement and pose using MediaPipe and TensorFlow.'
        },
        {
            image: 'https://picsum.photos/306/306?grayscale',
            link: 'https://github.com',
            title: 'Language Translator App',
            description: 'A sequence-to-sequence LSTM model that translates between English and French in real-time.'
        }
    ];


    return (

        <div style={{ height: '860px', position: 'relative' }}>
            <InfiniteMenu items={items} />
        </div>
    )
}

export default ProjectDisplay