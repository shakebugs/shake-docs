import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const modules = [
    {
        destinationUrl: 'android/customer-feedback/introduction/',
        title: <>User feedback</>,
      imageUrl: 'img/module-user-feedback@2x.png',
      description: (
        <>
            Testers and users can send you bug reports, questions and suggestions seamlessly.
        </>
      ),
    },
    {
        destinationUrl: 'android/users/introduction/',
      title: <>Users</>,
     imageUrl: 'img/module-users@2x.png',
      description: (
        <>
            List of all your app users, their attributes and reported tickets, plus live chat.
        </>
      ),
    },
    {
        destinationUrl: 'android/crash-reports/introduction/',
      title: <>Crash reports</>,
      imageUrl: 'img/module-crash-reports@2x.png',
      description: (
        <>
            Receive stack trace, logs, user’s comment and more whenever your app crashes.
        </>
      ),
    },
  ];

const features = [
  {
    destinationUrl: 'android/configuration-and-data/essentials/',
    imageUrl: 'img/essential-data@2x.png',
    description: (
      <>
          Data attached by default
      </>
    ),
  },
  {
    destinationUrl: 'android/users/update-user-metadata/',
    imageUrl: 'img/feature-custom-user-data@2x.png',
    description: (
      <>
          Custom User data
      </>
    ),
  },
  {
    destinationUrl: 'android/configuration-and-data/metadata/',
   imageUrl: 'img/feature-custom-ticket-data@2x.png',
    description: (
      <>
          Custom Ticket data
      </>
    ),
  },
  {
    destinationUrl: 'android/configuration-and-data/automatic-screen-recording/',
    imageUrl: 'img/screen-recording@2x.png',
    description: (
      <>
          Auto screen recording
      </>
    ),
  },
  {
    destinationUrl: 'android/customer-feedback/invoke/',
    imageUrl: 'img/invoke-shake@2x.png',
    description: (
      <>
          Invoke Shake
      </>
    ),
  },
  {
    destinationUrl: 'android/configuration-and-data/manage-sensitive-data/',
    imageUrl: 'img/protect-sensitive-data@2x.png',
    description: (
      <>
          Protect sensitive data
      </>
    ),
  },
  {
    destinationUrl: 'android/configuration-and-data/activity/',
    imageUrl: 'img/steps-to-reproduce@2x.png',
    description: (
      <>
          Auto steps to reproduce
      </>
    ),
  },
  {
    destinationUrl: 'android/configuration-and-data/attachments/',
    imageUrl: 'img/feature-auto-attach-files@2x.png',
    description: (
      <>
          Auto attach files
      </>
    ),
  },
];

function Module({destinationUrl, imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    const destUrl = useBaseUrl(destinationUrl);
    return (
        <div>
            <a href={destUrl}>
                {imgUrl && (
                    <img className={styles.moduleImage} src={imgUrl} alt={title} />
                )}
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
  }

function Feature({destinationUrl,imageUrl, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  const destUrl = useBaseUrl(destinationUrl);
  return (
    <div>
      {imgUrl && (
          <img className={styles.featureImage} src={imgUrl} alt={description} />
      )}
      <p>
          <a href={destUrl}>{description}</a>
      </p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
        title={'Shake'}
        description="Description will go into a meta tag in <head />">
        
        <main className={styles.docsHome}>

            <h1>{siteConfig.title}</h1>
            <blockquote>
                <p>{siteConfig.tagline}</p>
            </blockquote>

            <h2>Modules</h2>
            <blockquote>
                <p>Each of Shake’s product modules works independently, and they work even better together.</p>
            </blockquote>
            {modules && modules.length > 0 && (
                <section className={styles.modulesList}>
                    {modules.map((props, idx) => (
                        <Module key={idx} {...props} />
                    ))}
                </section>
            )}

            <h2>Configuration and data</h2>
            <blockquote>
                <p>Customize how Shake behaves and looks in your app, and what data is automatically attached to tickets your users send.</p>
            </blockquote>
            {features && features.length > 0 && (
                <section className={styles.featuresList}>
                    {features.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </section>
            )}

        </main>
    </Layout>
  );
}

export default Home;
