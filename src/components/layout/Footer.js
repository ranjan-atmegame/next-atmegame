import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import commonStyles from "./common.module.css";
import { S3_IMAGE_PATH } from "@/utils/Constants";
const sharedStyles = { ...styles, ...commonStyles };

export default function Footer() {
  return (
    <footer className={sharedStyles.mainFooter}>
      <div className={`${sharedStyles.container} ${sharedStyles.dFlex}`}>
        <div className={`${sharedStyles.w40} ${sharedStyles.aboutAtmegames}`}>
          <p>
            <Image
              src={`${S3_IMAGE_PATH}/logo.png`}
              alt="Atmegame.com"
              width="200"
              height="31"
              loading="lazy"
              unoptimized={true}
            />
          </p>
          <p>
            Atmegame.com is a completely new platform for the online games
            lovers. The best part is that all games available on our website are
            free and can be enjoyable on multiple devices, including desktop,
            mobile phones, tablets, and iPhones or iPads.
          </p>
        </div>
        <div className={`${sharedStyles.w20} ${sharedStyles.footerLink}`}>
          <h3>About</h3>
          <ul>
            <li>
              <Link prefetch={false} title="atmegame" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link prefetch={false} title="Submit a Game" href="/submit-game">
                Submit a Game
              </Link>
            </li>
            <li>
              <Link prefetch={false} title="About Us" href="/about-us">
                About Us
              </Link>
            </li>

            <li>
              <Link prefetch={false} title="Contact Us" href="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link prefetch={false} title="Blog" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link prefetch={false} title="Sitemap" href="/sitemap">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${sharedStyles.w20} ${sharedStyles.footerLink}`}>
          <h3>Games</h3>
          <ul>
            <li>
              <Link
                prefetch={false}
                title="Sports Games"
                href="/online-sports-games"
              >
                Sports Games
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                title="Action Games"
                href="/online-action-games"
              >
                Action Games
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                title="Arcade Games"
                href="/online-arcade-games"
              >
                Arcade Games
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                title="Racing Games"
                href="/online-racing-games"
              >
                Racing Games
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                title="Adventure Games"
                href="/online-adventure-games"
              >
                Adventure Games
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                title="Girls Games"
                href="/online-girls-games"
              >
                Girls Games
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className={`${sharedStyles.w20} ${sharedStyles.footerLink}`}>
          <h3>More</h3>
          <ul></ul>
        </div> */}

        <div className={`${sharedStyles.socialLinks}`}>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link
                prefetch={false}
                href="https://www.facebook.com/atmegame"
                rel="noopener noreferrer"
                target="_blank"
                className={sharedStyles.fb}
              >
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="https://twitter.com/atmegame"
                target="_blank"
                rel="noopener noreferrer"
                className={sharedStyles.tw}
              >
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="https://www.instagram.com/atmegame"
                target="_blank"
                rel="noopener noreferrer"
                className={sharedStyles.insta}
              >
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="https://www.linkedin.com/company/atmegame"
                target="_blank"
                rel="noopener noreferrer"
                className={sharedStyles.in}
              >
                <span>Linkedin</span>
              </Link>
            </li>
            {/* <li>
              <Link prefetch={false}
                href="https://in.pinterest.com/atmegame"
                target="_blank"
                rel="noopener noreferrer"
                className={sharedStyles.pin}
              >
                <span>Pinterest</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className={styles.copyRightInfo}>
        <div className={styles.containerInfo}>
          <div className={styles.copyInfo}>
            Copyright © {`${new Date().getFullYear()} `}
            <a target="blank" href="https://www.apaypl.com">
              Apay Marketing Private Limited
            </a>
          </div>
          <div className={styles.tncInfo}>
            <Link
              prefetch={false}
              href="/terms-condition"
              title="Term and conditions"
            >
              Terms & Conditions
            </Link>{" "}
            <Link
              prefetch={false}
              href="/privacy-policy"
              title="privacy policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
