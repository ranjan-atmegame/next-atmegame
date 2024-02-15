import Image from "next/image";
import { getUserImage } from "@/utils";
import styles from "@/components/layout/common.module.css";

export default function RankList({ user, rank }) {
  const {
    total,
    _id: { userName, avtar, gender },
  } = user;

  const userImage = getUserImage(avtar, gender);
  return (
    <div className={styles.cardBody}>
      <div className="list-items">
        <div style={{ width: "10%" }}>
          <span>{rank}</span>
        </div>

        <div style={{ width: "20%" }}>
          <span>
            <span>
              <Image
                src={userImage}
                alt="profile"
                title="profile"
                width="50"
                height="35"
                priority
                unoptimized={true}
              />
            </span>
          </span>
        </div>
        <div style={{ width: "25%" }}>
          <span>{userName}</span>
        </div>
        <div style={{ width: "25%" }}>&nbsp;</div>

        <div style={{ width: "20%" }}>
          <div className="right-item">
            <span>{total}</span>
            <span>coins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
