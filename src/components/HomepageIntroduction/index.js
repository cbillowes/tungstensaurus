import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const IntroductionList = [
  {
    title: 'Why Tungestensaurus?',
    img: require('@site/static/img/logo.png').default,
    description: (
      <>
        <p>
          What a strange name you may say. Well, Tungsten is a chemical element
          with the symbol "W" and atomic number 74. It is a dense, hard, and
          steel-gray metal known for its high melting point.
        </p>
      </>
    ),
  },
  {
    title: 'High-speed cutting tools',
    icon: '✂',
    description: (
      <p>
        Tungsten is commonly used in the production of various alloys, including
        those used in the manufacture of lightbulb filaments, electrical
        contacts, and <strong>high-speed cutting tools</strong> which I have
        used as my inspiration for the name of this project.
      </p>
    ),
  },
  {
    title: "It's a quest",
    icon: '🤓',
    description: (
      <p>
        I want to share <strong>high-speed cutting-edge tools</strong> that you
        can use to <strong>cut through the noise</strong> and{' '}
        <strong>extract the information you need</strong> to become a Senior
        Software Engineer. It's a quest and thirst for knowledge and growth in
        my field.
      </p>
    ),
  },
];

function IntroBlock({ img, icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img && <img className={styles.blockImage} role="img" src={img} />}
        {icon && <div className={styles.blockIcon}>{icon}</div>}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageIntroduction() {
  return (
    <>
      <section className={styles.block}>
        <div className="container">
          <div className="row">
            {IntroductionList.map((props, idx) => (
              <IntroBlock key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.blockAlt}>
        <div className="container">
          <div className="row">
            {/* <div className={clsx('col col--4')}>
              <Heading as="h3" className="text--center">
                Benefits
              </Heading>
              <p>
                🏎️ <strong>High-speed</strong>
                <br />
                You can quickly find the information you need{' '}
              </p>
              <p>
                ✂️ <strong>Cutting-edge</strong>
                <br />
                You can learn the latest and greatest technologies{' '}
              </p>
              <p>
                🔪 <strong>Cut through the noise</strong>
                <br />
                You can focus on what matters{' '}
              </p>
              <p>
                📷 <strong>Extract the information you need</strong>
                <br />
                You can get the information you need{' '}
              </p>
              <p>
                🤓 <strong>Become a Senior Software Engineer</strong>
                <br />
                You can follow along on the quest to becoming a senior
              </p>
            </div> */}
            <div className={clsx('col col--4 text--center')}>
              <div className={styles.blockIcon}>🤔</div>
              <Heading as="h3" className="text--center">
                Am I a Senior Software Engineer?
              </Heading>
              <p>
                CoPilot being an 🍑 says that "if you are asking yourself this
                question, the answer is probably no. If you are not sure, you
                are not senior." I suppose it could be true to a degree,
                perhaps. Or{' '}
                <a href="https://curiousprogrammer.dev/blog/the-imposter-within/">
                  maybe not
                </a>{' '}
                entirely. What are your thoughts?
              </p>
              <p>
                Seniority is earned through experience and knowledge, not
                self-designated. It involves continuous growth, learning,
                mentoring others, making decisions, and taking responsibility,
                transcending repetitive experience.
              </p>
            </div>
            <div className={clsx('col col--4 text--center')}>
              <div className={styles.blockIcon}>💪</div>
              <Heading as="h3" className="text--center">
                What is a Senior Software Engineer?
              </Heading>
              <p>
                Someone who is highly experienced in software development and is
                crucial for designing and maintaining complex solutions. Beyond
                technical duties, they often lead, mentor, and contribute to
                project success through architectural decisions.
              </p>
              <p>
                They are often involved in the hiring process and are
                responsible for the technical growth of the team. They are
                expected to be able to work independently, make decisions, and
                take responsibility for their work.
              </p>
            </div>
            <div className={clsx('col col--4 text--center')}>
              <div className={styles.blockIcon}>🧑‍💻</div>
              <Heading as="h3" className="text--center">
                How do I become a senior?
              </Heading>
              <p>
                Becoming an adept senior software engineer requires dedicated
                practice and a substantial time investment. While there are no
                shortcuts, consistent effort can expedite the learning process
                and foster growth.
              </p>
              <p>
                Tungstensaurus provides valuable resources for those aspiring to
                excel in their journey toward becoming outstanding senior
                software engineers. It is my resource for my personal quest to
                fully understanding what it means to be a senior software
                engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
