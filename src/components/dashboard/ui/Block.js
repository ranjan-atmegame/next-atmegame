import Content from "@/components/ui/card/Content";
import CardHeader from "@/components/ui/card/CardHeader";

export default function Block({
  slug,
  iconName,
  title,
  games,
  gameClass = "gameFour",
}) {
  return (
    <>
      {/* <CardHeader custom={true} slug={slug} title={title} /> */}
      <CardHeader
        headerClass="headerSpacing"
        slug={slug}
        title={title}
        isMoreBtn={true}
        iconName={iconName}
      />
      <Content games={games} gameClass={gameClass} />
    </>
  );
}
