"use client";
import { useState, useEffect } from "react";
import B from "./B";
import C from "./C";
import E from "./E";
import G from "./G";
import H from "./H";

let prevRow = 0;
let isSet = false;
export default function Home() {
  const [state, setState] = useState({ display: false, rows: [] });
  // const [state, setState] = useState({ display: false, gamesList: [] });

  useEffect(() => {
    window.addEventListener("scroll", getGamesOnScroll);

    return () => {
      isSet = false;
      prevRow = 0;
      window.removeEventListener("scroll", getGamesOnScroll);
    };
  }, []);

  // const getRowByScrollY = (yIndex) => {
  //   console.log(yIndex);
  //   if (yIndex > 50 && yIndex < 100) {
  //     return [1, "b"];
  //   } else if (yIndex > 200 && yIndex < 300) {
  //     return [2, "c"];
  //   } else if (yIndex > 350 && yIndex < 400) {
  //     return [3, "d"];
  //   } else if (yIndex > 450 && yIndex < 550) {
  //     return [4, "e"];
  //   }

  //   return [0, "a"];
  // };

  const getRowByScrollY = (yIndex) => {
    if (yIndex > 100 && yIndex < 300) {
      return 10;
    } else if (yIndex > 300 && yIndex < 400) {
      return 20;
    } else if (yIndex > 400 && yIndex < 500) {
      return 30;
    } else if (yIndex > 500 && yIndex < 600) {
      return 40;
    }

    return 0;
  };

  function getGamesOnScroll() {
    const offset = getRowByScrollY(this.scrollY);
    if (offset > prevRow) {
      isSet = false;
    }
    if (!isSet && offset > prevRow) {
      console.log({ offset });
      prevRow = offset;
      isSet = true;
    }
    //Testing...
    // const [newRow, rowName] = getRowByScrollY(this.scrollY);
    // if (newRow > prevRow) {
    //   isSet = false;
    // }
    // if (!isSet && newRow > prevRow) {
    //   prevRow = newRow;
    //   isSet = true;

    //   setState((prevState) => ({
    //     ...prevState,
    //     rows: [...prevState.rows, rowName],
    //   }));

    //   console.log({ newRow, rowName });
    // }

    //Above line was working

    // const newRow = parseInt(this.scrollY / 50);
    // if (!isSet && newRow > prevRow) {
    //   prevRow = newRow;
    //   isSet = true;

    //   console.log(prevRow);

    //   // getHomePagePendingGames().then((response) => {
    //   //   if (response.status !== "success") {
    //   //     return setState({ gamesList: [], display: true });
    //   //   }

    //   //   setState(() => {
    //   //     return { gamesList: response.data, display: true };
    //   //   });
    //   // });
    // }
  }

  return (
    <>
      {state.rows.includes("b") && <B />}
      {state.rows.includes("c") && <C />}
      {state.rows.includes("G") && <G />}
      {/* <B />
      <C />
      <G />
      <E />
      <H /> */}
    </>
  );
}
