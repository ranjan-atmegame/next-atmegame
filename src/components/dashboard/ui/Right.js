import CoinsHistory from "./CoinsHistory";
import Leaderboard from "./Leaderboard";

function Right({ styles, auth }) {
  if (!auth) {
    return <div>Loading...</div>;
  }

  const {
    user: { transactions },
  } = auth;
  let lastThreeTransaction =
    transactions.length <= 3
      ? transactions
      : transactions.slice(transactions.length - 3, transactions.length);

  return (
    <div className={styles.right}>
      <CoinsHistory
        styles={styles}
        transactions={lastThreeTransaction.reverse()}
      />

      <Leaderboard auth={auth} />
    </div>
  );
}

export default Right;
