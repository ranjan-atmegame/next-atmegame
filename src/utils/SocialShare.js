import useDevice from "@/hooks/useDevice";
import socialShareStyles from "@/components/common/socialshare.module.css";
import Icon from "@/components/ui/images/Icon";
import { useEffect, useState } from "react";
import GameModal from "@/components/modal";

export default function SocialShare({
  shareIcon = "/img/icon-share.svg",
  baseURL = "https://www.atmegame.com",
  copyIcon = "https://www.atmegame.com/img/copy-icon.svg",
  shareIconVisible = true,
  socialSharing = false,
  compStyles,
  fullUrl = "",
  currentUrl = "",
  showCopyText = true,
  heading = "Share This Game",
  msg = "If you liked this game share with others?",
  closeIcon = true,
  overlayCls = "",
  modalCls = "",
  renderedInsideBody = true,
}) {
  const [mobile] = useDevice();

  const [socialShare, setSocialShare] = useState(false);

  const styles = { ...socialShareStyles, ...compStyles };

  useEffect(() => {
    setSocialShare(socialSharing);
  }, [socialSharing]);

  const medium = [
    {
      label: "Facebook",
      id: "facebook",
      icon: "https://www.atmegame.com/img/fb-white-icon.svg",
      bUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      label: "Twitter",
      id: "twitter",
      icon: "https://www.atmegame.com/img/tw-white-icon.svg",
      bUrl: "https://twitter.com/share?url=",
    },
    {
      label: "Whatsapp",
      id: "whatsapp",
      icon: "https://www.atmegame.com/img/wa-white-icon.svg",
      bUrl: "https://web.whatsapp.com/send?text=",
    },
    {
      label: "Email",
      id: "email",
      icon: "https://www.atmegame.com/img/email-white-icon.svg",
      bUrl: "mailTo:",
    },
  ];

  const shareURL = fullUrl ? fullUrl : `${baseURL}/games/${currentUrl}`;

  function handleShareButton() {
    if (mobile) {
      if (typeof navigator.share !== "undefined") {
        navigator.share({ url: shareURL });
      }
    } else {
      setSocialShare(true);
    }
  }

  function closeModal() {
    setSocialShare(false);
  }

  function copyShareableLink() {
    navigator.clipboard.writeText(shareURL);
    closeModal();
  }

  function shareLinkOnSocialMedia(URL, medium) {
    if (socialSharing && mobile) {
      handleShareButton();
    } else {
      let windowFeatures =
        medium == "email"
          ? ""
          : "location=yes,height=300,width=520,scrollbars=yes,status=yes";
      window.open(URL, "_blank", windowFeatures);
      !socialSharing && closeModal();
    }
  }

  const customSharing = () => {
    return (
      <div className={styles.customSharing}>
        <GameModal
          onDismiss={closeModal}
          heading={heading}
          msg={msg}
          closeIcon={closeIcon}
          overlayCls={overlayCls}
          modalCls={modalCls}
          extraStyles={styles}
          renderedInsideBody={renderedInsideBody}
        >
          <div className={styles.socialList}>
            {medium &&
              Array.isArray(medium) &&
              medium.length > 0 &&
              medium.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    shareLinkOnSocialMedia(`${item.bUrl}${shareURL}`, item.id)
                  }
                >
                  <div className={`${styles.socialIcon} ${styles[item.id]}`}>
                    <Icon
                      src={item.icon}
                      alt={item.id}
                      title={`Share on ${item.id}`}
                      width="24"
                      height="24"
                      lazy="lazy"
                      unoptimized={false}
                    />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
          </div>
          {showCopyText && (
            <div className={styles.copyText}>
              <span className={styles.copyHead}>or copy page link</span>
              <div className={styles.copyTextBox} onClick={copyShareableLink}>
                <span className={styles.copyLink}>{shareURL}</span>
                <span className={styles.copyIcon}>
                  <Icon
                    src={copyIcon}
                    alt="copy-icon"
                    title={shareURL}
                    width="24"
                    height="24"
                  />
                </span>
              </div>
            </div>
          )}
        </GameModal>
      </div>
    );
  };

  return (
    <>
      {shareIconVisible && (
        <div className={styles.share} onClick={handleShareButton}>
          <Icon
            src={shareIcon}
            alt="Share"
            title="Share"
            width="24"
            height="24"
          />
          <span className={styles.shareText}>Share</span>
        </div>
      )}
      {socialShare && customSharing()}
    </>
  );
}
