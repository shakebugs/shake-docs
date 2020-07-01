import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Plug 'n' play</>,
    imageUrl: 'img/feature-simple.svg',
    description: (
      <>
          Minutes from now, your entire app development team will stop wasting hoooours of debugging time each week.
      </>
    ),
  },
  {
    title: <>Reliable and light</>,
   imageUrl: 'img/feature-reliable.svg',
    description: (
      <>
          Just as you, we as ambitious engineers are driven by perfection.
          We spend half of our hours just on testing the SDK while decreasing its size too.
      </>
    ),
  },
  {
    title: <>100% Customizable</>,
    imageUrl: 'img/feature-customizable.svg',
    description: (
      <>
          Every app has its own variables, of course.
          That's why we made it easy-peasy to send yourself a value of any variable you want from a user's device.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
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

function Button(text, url) {
    return <Link
        className={classnames(
            'button button--secondary button--lg',
            styles.getStarted,
        )}
        to={useBaseUrl(url)}>
        {text}
    </Link>;
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
        title={'Shake'}
        description="Description will go into a meta tag in <head />">
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    {Button("Android", "android/setup")}
                    {Button("iOS", "ios/setup-cocoapods")}
                    {Button("React Native", "react/setup")}
                    {Button("Flutter", "flutter/setup")}
                </div>
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
  );
}

export default Home;
