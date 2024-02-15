import Image from "next/image";
// import Item from "./Item";
// import LargeItem from "./LargeItem";
import styles from "./card.module.css";
import Link from "next/link";

const Profilecontent = ({
  games,
  gameClass,
  numberOfGames = 6,
  priority = false,
}) => {
  // let games_p = Object.keys(games).map((key) => [key, games[key]]);
  // if (games) console.log("contentInfo:", games);
  const temp_arr = [];
  if (typeof games === "object" && !Array.isArray(games) && games !== null) {
    temp_arr["_id"] = games._id;
    temp_arr["email"] = games.email;
    temp_arr["avtar"] = games.avtar;
    temp_arr["coins"] = games.coins;
    temp_arr["createdDate"] = games.createdDate;
    temp_arr["dislikes"] = games.dislikes;
    temp_arr["nickName"] = games.nickName;
    temp_arr["userName"] = games.userName;
    temp_arr["lastLogin"] = games.lastLogin;
    temp_arr["favourite"] = games.favourite;
    temp_arr["gender"] = games.gender === "M" ? "Male" : "Female";
    temp_arr["isNewsletter"] = games.isNewsletter;
    temp_arr["likes"] = games.likes;
    temp_arr["tokens"] = games.tokens;
    temp_arr["totalPlayed"] = games.totalPlayed;
    temp_arr["userType"] = games.userType;
    temp_arr["rank"] = games.rank;
    temp_arr["status"] = games.status;
    temp_arr["transactions"] = games.transactions;
    temp_arr["status"] = games.status;
    temp_arr["dob"] = games.dob;
    temp_arr["createdDate"] = games.createdDate;
    temp_arr["country"] = games.country === "IN" ? "india" : games.country;

    games = temp_arr;
  }
  //   if (gameClass === "gameOne") {
  //     const [game] = games;//Object.keys(games).map((key) => [key, obj[key]]);
  //     //console.log('contentInfo2:',game);
  //     return (
  //       <div className={styles.cardBody}>
  //         <LargeItem game={game} gameClass={gameClass}>
  //           <Image
  //             src={`https://slides.atmegame.com/slide/${game.image}_slide.jpg`}
  //             className={styles.gameCardImg}
  //             width="395"
  //             height="264"
  //             title={`Play Online ${game.name} Game`}
  //             alt={`Play Online ${game.name} Game`}
  //             priority={true}
  //             unoptimized={true}
  //           />
  //         </LargeItem>
  //       </div>
  //     );
  //   }

  return (
    <>
      {games && (
        <div key={games._id} className={styles.cardBody}>
            <div className={styles.profilediv}>User Rank : #{games.rank}</div>
            <div className={styles.profilediv}>User Coin : #{games.coins}</div>
            <div className={styles.profilediv}>Liked Games : #{games && games?.likes?.length}</div>
            <div className={styles.profilediv}>Games Played : #{games && games?.totalPlayed?.length}</div>
          <div className={styles.profilediv}>Name : {games.nickName}</div>
          <div className={styles.profilediv}>Gender: {games.gender}</div>
          <div className={styles.profilediv}>Email: {games.email}</div>

          <div className={styles.profilediv}>
            Profile Photo :
            <Image
              src={games.avtar}
              className={styles.gameCardImg}
              width="40"
              height="40"
              title={`Play Online ${games.userName} Game`}
              alt={`Play Online ${games.userName} Game`}
              priority={true}
              unoptimized={true}
            />
          </div>
          <div className={styles.profilediv}>
            Country:
            <Image src={`https://www.atmegame.com/img/${games.country}.svg`} width={25} height={25} alt="" unoptimized={true} />
          </div>
          <div>
            <Link className={styles.btnSmall} href={`/user/edit-profile`}>Edit Profile</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Profilecontent;

{
  /* <Item
                key={i + game._id}
                game={game}
                gameClass={gameClass}
                priority={priority}
              /> */
}
