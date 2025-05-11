
import styles from './styles.module.css';


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.flex}>
      <a href="/docs/deer-lister/" className={styles.card}>
        <div>
          <h2>DeerLister</h2>
          <p>PHP directory lister </p>
        </div>
      </a>
      <a href="/docs/deer-shika/" className={styles.card}>
        <div>
          <h2>Shika</h2>
          <p>Analytics for your website</p>
        </div>
      </a>
    </section>
  );
}
