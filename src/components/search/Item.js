// import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/images/Icon";

export default function Item({
  name,
  title,
  width,
  height,
  icon,
  slug,
  hideSearchPopupCB,
  cls="",
  styles=[]
}) {
  function hideSearchPopUp() {
    if (typeof hideSearchPopupCB === "function") {
      hideSearchPopupCB();
    }
  }

  return (
    <li key={name}
      onClick={hideSearchPopUp}
      className={styles[cls]}
    >
      <Link href={slug}>
        {icon && (
          <Icon
            alt={title}
            title={title}
            width={width}
            height={height}
            src={icon}
            loading="lazy"
            unoptimized={true}
          />
        )}
        <span>{name}</span>
      </Link>
    </li>
  );
}
