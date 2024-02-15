"use client";
import { useEffect, useState } from "react";
import { getCatwithSearchTermOnEnter } from "@/api/search";
import { usePathname } from "next/navigation";
import CardContainer from "@/components/ui/card/CardContainer";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import useDevice from "@/hooks/useDevice";

export default function searchResultPageWithKeyWord() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const slugArr = pathname.split("/");
  const slug = slugArr[slugArr.length - 1];
  const params = slug.replace(/-/g, " ");
  const pageTitle = `${params} Online Games`;

  const [mobile] = useDevice();

  useEffect(() => {
    getCats();
  }, [slug]);

  async function getCats() {
    setLoading(true);
    const resp = await getCatwithSearchTermOnEnter(params);
    if (resp.status == "success" && resp.result) {
      if (resp.result.length > 0) {
        setCats(resp.result);
        setLoading(false);
      } else {
        window.location.href = "/not-found"
      }

    } else {
      setCats([]);
      setLoading(false);
    }
  }
  if (loading) {
    return <div>Loading....</div>;
  }

  const gameClass = mobile ? "gameTwo" : "gameFive";

  return cats && Array.isArray(cats) && cats.length > 0 ? (
    <CardContainer
      isContainerStyle={true}
      header={
        <CardHeader
          slug=""
          title={pageTitle}
          isMoreBtn={false}
          showFilter={false}
        />
      }
    >
      <Card cardWidth="w100" cardColor="noShadow">
        <Content
          games={cats}
          numberOfGames={cats.length}
          gameClass={gameClass}
        />
      </Card>
    </CardContainer>
  ) : (
    <div>No Result Found</div>
  );
}
