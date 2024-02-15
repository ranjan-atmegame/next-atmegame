import { useState, useEffect } from "react";
import CardContainer from "../ui/card/CardContainer";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useMoreGames from "@/hooks/useMoreGames";
import CardShimmer from "@/components/common/CardShimmer";
import Icon from "@/components/ui/images/Icon";

export default function MoreGame({
  games = [],
  isMobile = false,
  catType = "",
  cat = "",
  subCat = ""
  // limitNum,
  // noMoreCatGames,
  // updateStateInParent,
  // categoryId,
}) {

  const [moreGames, setMoreGames] = useState(games);
  const gameClass = isMobile ? "gameTwo" : "gameSix";
  const categoryPageUrl = `online-${subCat ? subCat.name : cat.name}-games`;
  // const { loadMoreRef, limit, setLimit } = useInfiniteScroll(limitNum, 12);

  // const [getMOreGames, isLoading] = useMoreGames(
  //   categoryId,
  //   limit,
  //   updateStateInParent,
  //   noMoreCatGames
  // );

  useEffect(() => {
    setMoreGames(games);
  }, [games]);

  // useEffect(() => {
  //   if (
  //     getMOreGames &&
  //     Array.isArray(getMOreGames) &&
  //     getMOreGames.length > 0
  //   ) {
  //     setMoreGames([...moreGames, ...getMOreGames]);
  //   }
  // }, [getMOreGames]);

  // useEffect(() => {
  //   setLimit(limitNum);
  // }, [limitNum]);


  return (
    <div>
      <CardContainer
        isContainerStyle={true}
        header={
          catType && (
            <CardHeader
              title={`${catType} Games`}
              isMoreBtn={true}
              showFilter={true}
              slug={`/${categoryPageUrl}`}
              iconName={catType}
            ></CardHeader>
          )
        }
      >
        <Card cardWidth="w100" cardColor="noShadow">
          <Content
            games={moreGames}
            numberOfGames={moreGames.length}
            gameClass={gameClass}
            lazy="lazy"
          />
          {/* {isLoading && <CardShimmer />} */}
        </Card>
      </CardContainer>

      {/* {noMoreCatGames && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Icon
            width={175}
            height={110}
            src="/img/allFolks.png"
            alt="all folks"
          />
        </div>
      )}
      <div className="cat-loader" ref={loadMoreRef}></div> */}
    </div>
  );
}
