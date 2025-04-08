import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn Naturally',
    Svg: require('@site/static/img/undraw_vintage_q09n.svg').default,
    description: (
      <>
        Immerse yourself in real Japanese content—just like how you learned your first language. No dry textbooks, just real-world exposure.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_time-management_fedt.svg').default,
    description: (
      <>
        Skip the slow grind on unnecessary details. With immersion, you focus on understanding and using Japanese in real situations.
      </>
    ),
  },
  {
    title: 'Fun & Engaging',
    Svg: require('@site/static/img/undraw_video-games_itxa.svg').default,
    description: (
      <>
        Learn through what you love—whether it’s games, anime, or novels. Japanese study doesn’t have to be boring!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
