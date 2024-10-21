import React from 'react';
import Description from '../components/Description';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    const info = { title: "Title 2", description: "description 2" };

    return (
        <div className={styles.aboutPage}>
            <h1>About Page</h1>
            <Description info={info} />
        </div>
    );
};

export default AboutPage;
