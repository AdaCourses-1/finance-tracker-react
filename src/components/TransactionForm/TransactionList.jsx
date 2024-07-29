// styles
import styles from "./Transaction.module.css";

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      <li>
        <p className={styles.name}>Арбуз</p>
        <p className={styles.amount}>$ 15</p>
      </li>
      <li>
        <p className={styles.name}>Молоко</p>
        <p className={styles.amount}>$ 5</p>
      </li>
      <li>
        <p className={styles.name}>Машина</p>
        <p className={styles.amount}>$ 14005</p>
      </li>
      <li>
        <p className={styles.name}>Свидание</p>
        <p className={styles.amount}>$ 150</p>
      </li>
      <li>
        <p className={styles.name}>Комуналка</p>
        <p className={styles.amount}>$ 65</p>
      </li>
    </ul>
  );
}
