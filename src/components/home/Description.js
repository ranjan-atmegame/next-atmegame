import styles from "@/components/layout/common.module.css";
import CardContainer from "../ui/card/CardContainer";
import CardHeader from "../ui/card/CardHeader";
import ExpanCollapseWidget from "@/components/common/ExpanCollpase/ExpanCollapseWidget";
import useDevice from "@/hooks/useDevice";

export default function Description({
  content = `<p>Today’s gamers think beyond the console and play station games. Free online games are their first choice now since they allow users to have fun without download, and no registration requires.</p><p>Powered with exploits of action-packed AI (Artificial Intelligence) and Virtual Reality, the online html5 games at our site are now more engaging, evolving, and involving than ever before.</p><p>At our site, we offer an extensive range of the best online games to quench your appetite for constant entertainment, curiosity, and search for action. You will never come close to a feeling of instant boredom when you play online games for free on atmegame.com.</p><p>Our extensive games category includes racing, action, <a href="/online-adventure-games" class="textlink">adventure</a>, sports, arcade, multiplayer, 3D and Puzzle, and many other online browser games that make sure that you will have complete fun dose with no extra efforts. As the best place to enjoy free online best games, atmegame.com enables users to play and entertain from anywhere, irrespective of their location. You can play against other players who are online either in one-to-one player mode or multiplayer mode.</p><p>Not only means extensive fun and entertainment, but our games are also a viable means to stress-busting, reflexes improvement, and IQ enhancement. Some of <a href="/" class="textlink">the best free online games</a> categories that we offer at our site include action: fighting, monster, defense, war games, shooting, zombie; adventure games that we cover running, platform, mining, flying, and war.<p>However, the widely popular gaming categories that we include <a href="/online-racing-games" class="textlink">Sports and Racing</a>. In the racing game online category, you can have games like Horse Riding, Bicycle, Bike, Trekking, and, most importantly car racing. And the most popular category sport has game-like Rugby, Soccer, Hockey, Cricket, Baseball, and Golf.</p><p>So, what are you waiting for? Choose your game category, browse through its exclusive and wide range, and get ready to keep you entertained for many hours, even for days at our free online gaming <a href="/" class="textlink">atmegame.com</a></p>`,
}) {
  const [mobile] = useDevice();

  return (
    <CardContainer
      isContainerStyle={true}
      header={
        <CardHeader
          h1={true}
          slug=""
          title="Play Online Games"
          isMoreBtn={false}
          iconName={``}
        />
      }
    >
      <div
        className={`${styles.cardContetSec} ${styles.despExpancollapse}`}
        id=""
      >
        <ExpanCollapseWidget initHeight={mobile ? 120 : 110}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ExpanCollapseWidget>
      </div>
    </CardContainer>
  );
}
