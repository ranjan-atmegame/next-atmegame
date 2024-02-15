"use client";
import { getUserImage } from "@/utils";
import Image from "@/components/ui/images/Icon";

const UserRankItem = ({ rank, styles, user: { total, _id } }) => {
  const { userName, firstName, gender, avtar } = _id;
  const userImage = getUserImage(avtar, gender);

  return (
    <div className={`${styles.listItems} ${styles.itmLeadBoard}`}>
      <div className={`${styles.leftItem}`}>
        <span>
          {rank}
          <sup>st</sup>
        </span>
        {/* <img className={styles.avatar} src={userImage} alt="user" /> */}
        <Image
          className={styles.avatar}
          src={userImage}
          title="user"
          alt="user"
          width={45}
          height={45}
          unoptimized={true}
        />

        <div>
          <h4>{firstName}</h4>
          <span className={styles.userNametxt}> {`@${userName}`} </span>
        </div>
      </div>
      <div className={styles.rightItem}>
        <span className={styles.boldText}>{total}</span>
        <span>coins</span>
      </div>
    </div>
  );
};

export default UserRankItem;
