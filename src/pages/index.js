import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import LayoutC from './_layout';



const features = [
  {
    title: 'Open Source Projects',
    imageUrl: 'img/logo.svg',
    description: (
      <>
        Cranom projects are open source to promote rapid development and contribution from the open Comunity.
      </>
    ),
  },
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
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description="Open Source projects Devoloped for you">
        <LayoutC />
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <div className={clsx('col col--6', styles.side)}>
            Devoloped to enhance the developer community.
            <br />
            <Link
              to='projects/'
              className={styles.explore}
            >
              Explore
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className={clsx("col col--6", styles.words)}>
                  <h3>Open Source Projects</h3>
                  <p>Cranom projects are open source to promote rapid development and contribution from the open Comunity.</p>
                </div>
                <div className={clsx("col col--6", styles.svg)}>
                  <img src="/img/undraw_open_source_1qxw.svg" alt="open sorce" />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;