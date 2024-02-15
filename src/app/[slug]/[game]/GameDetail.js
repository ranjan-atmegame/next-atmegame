import Game from "@/components/game";
import Breadcrumb from "@/components/game/Breadcrumb";
import { API_URL } from "@/config";
import { notFound } from "next/navigation";

const _getGameDetail = async (slug) => {
  let response = await fetch(`${API_URL}/v1/game/slug/${slug}`);
  response = await response.json();
  if (response && response.status == "success" && response.result) {
    return response.result;
  }

  return false;
};

export default async function GameDetail({ params, isMobile }) {
  const response = await _getGameDetail(params.game);

  if (!response) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        category={response.category}
        subCategory={response.subCategory}
        game={response.game}
      />
      <Game
        gameDetail={response}
        isMobile={isMobile}
        cat={response.category}
        subCat={response.subCategory}
      />
    </>
  );
}
