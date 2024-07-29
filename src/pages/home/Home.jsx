import React from "react";
import styles from "./Home.module.css";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionList from "../../components/TransactionForm/TransactionList";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TransactionList />
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
