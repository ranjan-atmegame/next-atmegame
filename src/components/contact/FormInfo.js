import Image from "next/image";
import Link from "next/link";
import LeftBlockList from "../common/LeftBlockList";
import styles from "./contactus.module.css";

export default function FormInfo({
  topic,
  msg = "Have a question? We’d love to hear from you! 🤗 Drop us a line and we’ll get back to you as soon as possible",
}) {
  const topicArr = {
    generalquery: [
      {
        id: 1,
        heading: "Get in Touch with us",
        img: "https://www.atmegame.com/img/contact-us-image.svg",
      },
    ],
    businessenquiry: [
      {
        id: 2,
        heading: "Business enquiry",
        img: "https://www.atmegame.com/img/business-enquiry-image.svg",
      },
    ],
    advertising: [
      {
        id: 3,
        heading: "Advertise with Us",
        img: "https://www.atmegame.com/img/advertise-with-us-image.svg",
      },
    ],
  };

  const contactUs = [
    {
      id: 1,
      icon: "https://www.atmegame.com/img/email-us-icon.svg",
      label: "Email Us",
      value: "hello@atmegame.com",
      medium: "email",
    },
    // {
    //   id: 2,
    //   icon: "https://www.atmegame.com/img/call-us-icon.svg",
    //   label: "Call Us",
    //   value: "+91 999-9803-921",
    //   medium: "call",
    // },
  ];

  return (
    <div>
      {topicArr[topic] &&
        Array.isArray(topicArr[topic]) &&
        topicArr[topic].length > 0 &&
        topicArr[topic].map((item) => (
          <div key={item.id}>
            <LeftBlockList
              img={item.img}
              heading={item.heading}
              alt={item.heading}
              width="400"
              height="400"
              singleMsg={msg}
            />
          </div>
        ))}
      <div>
        {contactUs &&
          Array.isArray(contactUs) &&
          contactUs.map((item, i) => {
            const medium = item.medium == "email" ? "mailto" : "tel";
            const hideMobi = topic == "generalquery" && i == 1 ? "hide" : "";
            return (
              <div className={hideMobi} key={item.id}>
                <div className={styles.email}>
                  <div className={styles.emailIcon}>
                    <Image
                      src={item.icon}
                      alt={item.label}
                      height={36}
                      width={46}
                      priority
                      unoptimized={true}
                    />
                  </div>
                  <div className="">
                    <div className={styles.emailLabel}>{item.label}</div>

                    <Link href={`${medium}:${item.value}`}>{item.value}</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
