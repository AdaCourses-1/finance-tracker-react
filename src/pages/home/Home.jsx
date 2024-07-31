import React, { useContext, useState } from "react";
import styles from "./Home.module.css";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionList from "../../components/TransactionForm/TransactionList";
import { useCollection } from "../../hooks/useCollection";
import { AuthContext } from "../../context/AuthContext";
import { orderBy, where } from "firebase/firestore";

const Home = () => {
  const [filter, setFilter] = useState("7days");
  const [sortOrder, setSortOrder] = useState("asc");

  const { user } = useContext(AuthContext);
  const { documents, error, fetchCollection } = useCollection(
    "transactions",
    where("userId", "==", user.uid),
    orderBy("createdAt", sortOrder)
  );

  const handleSort = (sortType) => {
    setSortOrder(sortType);
    fetchCollection({
      fetchQuery: orderBy("createdAt", sortType),
      fetchOrder: where("userId", "==", user.uid),
    });
  };

  const handleFilter = (filterType) => {
    let startDate;
    
    switch (filterType) {
      case "1day":
        startDate = new Date(now.setDate(now.getDate() - 1));
        break;
      case "7days":
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case "1month":
        startDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      default:
        startDate = new Date(now.setDate(now.getDate() - 7));
    }


  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles["transactions-actions"]}>
          <ul className={styles.filter}>
            <li>За 1 день</li>
            <li>За 7 дней</li>
            <li>За 1 месяц</li>
          </ul>
          <ul className={styles.sort}>
            <li onClick={() => handleSort("desc")}>Новые</li>
            <li onClick={() => handleSort("asc")}>Старые</li>
          </ul>
        </div>
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
