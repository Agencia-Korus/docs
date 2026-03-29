import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentação',
    Svg: require('@site/static/img/document.svg').default,
    description: (
  <>
    Acesse toda a documentação do projeto.{' '}
    <Link to="/docs/docs/inicio">Ver documentação</Link>
  </>
),
  },
  {
    title: 'Repositório',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
    Explore o código do projeto, contribuições e versionamento no GitHub.{' '}
    <Link to="https://github.com/Agencia-Korus">Ver repositório</Link>
  </>
    ),
  },
  {
    title: 'Plataforma',
    Svg: require('@site/static/img/www_site.svg').default,
    description: (
      <>
        Acesse a plataforma para conhecer e explorar o sistema.{' '}
        <Link to="https://github.com/Agencia-Korus">Acessar plataforma</Link>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
