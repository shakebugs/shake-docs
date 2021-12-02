import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={'Shake'}
      description="Description will go into a meta tag in <head />">

      <main className={styles.docsHome}>

        <h1>{siteConfig.title}</h1>
        <blockquote>{siteConfig.tagline}</blockquote>

        <div class="home-platforms">
          <div><a href="/docs/ios/overview">
            <img src="/docs/img/icon-ios@2x.png" alt="Shake iOS documentation" />
            <p>iOS</p>
            </a></div>
          <div><a href="/docs/android/overview">
            <img src="/docs/img/icon-android@2x.png" alt="Shake Android documentation" />
            <p>Android</p>
            </a></div>
          <div><a href="/docs/react/overview">
            <img src="/docs/img/icon-rn@2x.png" alt="Shake React Native documentation" />
            <p>React Native</p>
            </a></div>
          <div><a href="/docs/flutter/overview">
            <img src="/docs/img/icon-flutter@2x.png" alt="Shake Flutter documentation" />
            <p>Flutter</p>
          </a></div>
        </div>

      </main>
    </Layout>
  );
}

export default Home;
