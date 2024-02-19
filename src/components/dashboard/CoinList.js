import Link from "next/link";
import CoinItem from "./CoinItem";
import styles from "@/components/dashboard/profile/dashboard.module.css";

export default function CoinList({ transactions, showAllLink = false }) {
  const coinsJSX = transactions.map((transaction) => (
    <CoinItem key={transaction._id} transaction={transaction} styles={styles} />
  ));

  return (
    <>
      <div className={styles.viewProfile}>{coinsJSX}</div>
      {showAllLink && (
        <div className="">
          <Link
            prefetch={false}
            href="/user/coins-history"
            className="w-100 btn-flat mt-8"
            title=""
          >
            See All
          </Link>
        </div>
      )}
    </>
  );
}
