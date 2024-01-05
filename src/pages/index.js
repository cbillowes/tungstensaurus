import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageIntroduction from '@site/src/components/HomepageIntroduction';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={clsx(styles.heroEyebrow)}>
          Curious Programmer brings you
        </p>
        <Heading as="h1" className="hero__title">
          Tungestensaurus
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.ctaButton)}
            to="/docs/quest/intro"
          >
            Start the quest
          </Link>
          <a
            className={clsx('button button--lg', styles.ghostButton)}
            href="https://roadmap.sh"
          >
            Not my career path
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Level up your programming skills: a quest to become a senior software engineer."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageIntroduction />
      </main>
    </Layout>
  );
}
