import Content from "@/components/ui/card/Content";
import styles from "./dashboard.module.css";
import CardHeader from "@/components/ui/card/CardHeader";

const ViewProfile = ({ games, gameClass }) => {
  if (!games) {
    return "...";
  }

  return (
    <div>
      <CardHeader
        iconName="multuiplayer"
        slug={``}
        title="Total Games Played"
        isMoreBtn={false}
      />
      <Content
        games={games}
        gameClass={gameClass}
        numberOfGames={games?.length}
      />
    </div>
  );
};
export default ViewProfile;
