import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'You need to face challenges!',
    img: require('@site/static/img/mac.webp').default,
    description: (
      <>
        It's expected that you have a deep and broad understanding of the
        technologies and tools relevant to your field.
      </>
    ),
  },
  {
    title: "You can't do it alone!",
    img: require('@site/static/img/laptop.webp').default,
    description: (
      <>
        You need to understand the importance of collaboration and the value of
        a strong and diverse network.
      </>
    ),
  },
  {
    title: "It's not just about age!",
    img: require('@site/static/img/senior-developer.webp').default,
    description: (
      <>
        Seniority is about the ability to solve problems and Tungstensaurus is a
        collaborative project offering high-speed cutting tools and resources to
        level up your engineering skills.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} role="img" src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
