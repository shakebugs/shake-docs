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
            <img src="/docs/img/icon-ios@2x.png" alt="Shake iOS documentation"/>
            <p>iOS</p>
          </a></div>
          <div><a href="/docs/android/overview">
            <img src="/docs/img/icon-android@2x.png" alt="Shake Android documentation"/>
            <p>Android</p>
          </a></div>
          <div><a href="/docs/react/overview">
            <img src="/docs/img/icon-rn@2x.png" alt="Shake React Native documentation"/>
            <p>React Native</p>
          </a></div>
          <div><a href="/docs/flutter/overview">
            <img src="/docs/img/icon-flutter@2x.png" alt="Shake Flutter documentation"/>
            <p>Flutter</p>
          </a></div>
          <div><a href="/docs/web/overview">
            <img src="/docs/img/icon-web@2x.png" alt="Shake Web documentation"/>
            <p>Web</p>
          </a></div>
          <div><a href="/docs/chrome-extension/overview">
            <img src="/docs/img/icon-chrome@2x.png" alt="Shake Chrome extension documentation"/>
            <p>Chrome Extension</p>
          </a></div>
        </div>
        <p class="p2">🧑‍💻 You can try Shake without signing up or coding. <a href="https://shk.sh/demo" target="_blank">See
          demo Dashboard</a></p>
        <p class="p2">⚡️ Shake is improved every week.
          Stumbled upon a <a href="https://feedback.shakebugs.com/bugs" target="_blank">bug</a>?
          Want a <a href="https://feedback.shakebugs.com/feature-requests" target="_blank">new feature</a> to be added?
          Create new tickets and upvote existing ones on the Public feedback board.</p>
        <p></p>

      </main>
    </Layout>
  );
}

export default Home;
