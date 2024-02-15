import { notFound } from "next/navigation";
import NewGames from "@/components/category/NewGames";
import Description from "@/components/category/Description";
import FloatButton from "@/utils/FloatButton";
import Category from "@/components/category";
import { API_URL } from "@/config";

const _getCategoryDetail = async (slug, isMobile) => {
  isMobile = isMobile ? 1 : 0;
  let response = await fetch(
    `${API_URL}/v1/game/category/${slug}?isMobile=${isMobile}`
  );
  response = await response.json();
  if (response && response.status == "success" && response.result) {
    return response.result;
  }

  return false;
};

export default async function CategoryGames({ params, isMobile }) {
  const slug = params.slug.replace("online-", "").replace("-games", "");
  const response = await _getCategoryDetail(slug, isMobile);
  if (!response) {
    notFound();
  }
  const { category, newGames } = response;

  return (
    <>
      <NewGames
        category={category}
        newGames={newGames}
        gameClass={isMobile ? "gameTwo" : "gameThree"}
        isMobile={isMobile}
        priority={true}
      />
      <Category category={category} isMobile={isMobile} />
      <Description name={category.name} description={category.description} />
      <FloatButton />
    </>
  );
}
