// import Image from "next/image";
// import Item from "./Item";
// import LargeItem from "./LargeItem";
import styles from "./card.module.css";
// import Link from "next/link";
import Button from "@/components/common/Button";

const EditProfilePage = ({
  games,
  gameClass,
  numberOfGames = 6,
  priority = false,
}) => {
  // let games_p = Object.keys(games).map((key) => [key, games[key]]);
  // if (games) console.log("contentInfo:", games);
 
  return (
    <>
      {games && (
        <div key={games._id} className={styles.cardBody}>
          <div className={styles.profilediv}>User Name : 
            <input className={styles.textinput} type="text" name="userName" value={games?.nickName} />
          </div>
          <div className={styles.profilediv}>Gender: 
          <input className={styles.textinput} type="text" name="gender" value={games?.gender} />
          </div>
          <div className={styles.profilediv}>Email: 
          <input className={styles.textinput} type="email" name="email" value={games?.email} />
          </div>
          <div className={styles.profilediv}>First Name: 
          <input className={styles.textinput} type="text" name="firstName" value={games?.firstName} />
          </div>
          <div className={styles.profilediv}>Last Name: 
          <input className={styles.textinput} type="text" name="lastName" value={games?.lastName} />
          </div>
          <div>
            <Button type="button" label="Update Profile" />
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfilePage;

