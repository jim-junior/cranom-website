import React from 'react'
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import * as icons from 'react-icons/md'
import { YoutubePlayer, Image } from 'reactjs-media'
const features = [
    {
        title: 'Reactjs Media',
        imageUrl: '/img/reactjs-media.png',
        docs: '/reactjs-media',
        github: 'https://github.com/jim-junior/reactjs-media',
        description: (
            <>
                The reactjs media is a react package with awesome HTMLMediaElements that are recreated into react components with a good looking UI and fast UX.
            </>
        ),
    }/* ,
    {
        title: 'Focus on What Matters',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the
                <code>docs</code>
            directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    }, */
];

function Feature({ imageUrl, title, description, github, docs }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div style={{ margin: 'auto', textAlign: 'center' }} className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
            <p className={styles.icons}><span><Link to={docs}>Documentation</Link></span><span><a href={github} target="_blank" rel="noopener"> Github <icons.MdLaunch /></a></span></p>
        </div>
    );
}

const Projects = () => {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context
    return (
        <Layout
            title='Projects'
            description='Awesome Projects that are developed by Blurify'
        >
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Projects</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>

                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>
        </Layout>
    )
}

export default Projects
