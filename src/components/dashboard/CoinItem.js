import moment from "moment";
import Link from "next/link";

export default function CoinItem({ styles, transaction }) {
  return (
    <div className={styles.coinsBox}>
      <div className={styles.listItems}>
        <Link prefetch={false} href={``}>
          <div className={styles.leftItem}>
            <h4>{transaction.name}</h4>
            <span>
              <span>
                <i className={styles.calender}></i>
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
    </div>
  );
}
