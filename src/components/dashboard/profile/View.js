import { getUserImage } from "@/utils";
import Link from "next/link";
import styles from "./dashboard.module.css";

const ViewProfile = ({ user }) => {
  let { nickName, gender, email, firstName, lastName, avtar } = user;
  const displayGender = gender === "M" ? "Male" : "Female";

  const userImage = getUserImage(avtar, gender);
  const userName = nickName ? nickName : `${firstName} ${lastName}`;

  return (
    <div className={styles.viewProfile}>
      <div className={styles.profileHeader}>
        <h2>
          <i className={styles.profile}></i>Profile
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <ul>
            <li>
              <label>Name</label>
              <span>{userName}</span>
            </li>
            <li>
              <label>Gender</label>
              <span>{displayGender}</span>
            </li>
            <li>
              <label>email Id</label>
              <span>{email}</span>
            </li>
            <li>
              <label>First Name</label>
              <span>{firstName}</span>
            </li>
            <li>
              <label>Last Name</label>
              <span>{lastName}</span>
            </li>
          </ul>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.profilePhoto}>
            <img
              src={`https://www.atmegame.com/img/india.svg`}
              className={styles.flagProfile}
              alt="Country Flag"
            />
            <img src={userImage} title="user profile" alt="user profile" />
          </div>
          <Link className={styles.btnFlat} href={`/user/edit-profile`}>
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
