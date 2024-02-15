"use client";
import { useState, useEffect } from "react";
import { userProfile } from "@/api/user";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import CardContainer from "@/components/ui/card/CardContainer";
import CoinList from "./CoinList";
import { authenticate } from "@/api/auth";
import Stats from "./Stats";
import LeftMenu from "./LeftMenu";
import styles from "./profile/dashboard.module.css";

export default function CoinsHistory({ isMobile }) {
  const [transactions, setTransactions] = useState([]);
  const [auth, setAuth] = useState();

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((result) => {
      // const transactionArr = transactionList.slice(0, 10);
      const transactions = result.transactions.reverse();
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
      setTransactions(transactions);
    });
  }, []);

  const historyJSX = () => {
    return (
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader slug={``} title="Coins History" isMoreBtn={false} />
        }
      >
        <Card cardWidth="w100" cardColor="noShadow">
          <CoinList transactions={transactions} />
        </Card>
      </CardContainer>
    );
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <LeftMenu leftStyle={styles} auth={auth} pathname />

        <div className={styles.dashboardRightContent}>
          <Stats styles={styles} user={auth?.user} />
          <div className={styles.contentSec}>
            <div className={`${styles.shadowCard} ${styles.fullSection}`}>
              {transactions?.length !== 0 && historyJSX()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
