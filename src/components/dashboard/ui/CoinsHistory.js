import Link from "next/link";
import moment from "moment";

function CoinsHistory({ styles, transactions }) {
  if (!transactions) {
    return <div>Loading...</div>;
  }

  const historyJSX = () => {
    return transactions.map((transaction) => (
      // <CoinItem key={transaction._id} transaction={transaction} />

      <div key={transaction._id} className={styles.listItems}>
        <Link href={``}>
          <div className={styles.leftItem}>
            <h4>{transaction.name}</h4>
            <span>
              <span>
                <i className={styles.calender}></i>
                {/* 5 July, 21 */}
                {moment(transaction.date).format("DD MMM, YYYY")}
              </span>
              <span>
                <i className={styles.watch}></i>
                {moment(transaction.date).format("h:mm a")}
              </span>
            </span>
          </div>
          <div className={styles.rightItem}>
            <span className={styles.plusCoin}> +{transaction.coins}</span>
            <span>coins</span>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className={`${styles.shadowCard} ${styles.mT16}`}>
      <div className={styles.p16}>
        <div className={styles.coinsBox}>
          <h3>
            <i className={styles.coins}></i> Coins
          </h3>
          {historyJSX()}
          <div className="">
            <Link
              className={styles.btnFlat}
              title=""
              href="/user/coins-history"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinsHistory;
