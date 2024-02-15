import Link from "next/link";
import styles from "../../../components/layout/common.module.css";
import Image from "next/image";


export default function ProfileSidebar({user}){
    return (
        <div className={`${styles.sidebar}`}>
            <div className={styles.rowLeftMenu}>
            <Image
              src={user.avtar}
              className={styles.gameCardImg}
              width="40"
              height="40"
              title={` ${user.userName} Profile Photo`}
              alt={` ${user.userName} Profile Photo`}
              priority={true}
              unoptimized={true}
            />
                
                <span className={styles.txtuppercase}>{user.nickName}</span>
            </div>
            <div className={styles.rowLeftMenu}><Link href={`/dashboard`}>Dashboard</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/user/profile`}>Profile</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/user/games-played`}>Total Games Played</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/user/recommended-games`}>Recommended Games</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/user/favourites`}>Favourite Games</Link></div>

            <div className={styles.rowLeftMenu}><Link href={`/user/liked`}>Liked Games</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/user/disliked`}>Disliked Games</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/user/leaderboard`}>Leaderboard</Link></div>
            <div className={styles.rowLeftMenu}><Link href={`/signout`}>Logout</Link></div>
        </div>  
    );
}