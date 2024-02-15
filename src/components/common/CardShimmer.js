import styles from "@/components/common/cardshimmer.module.css";
import useDevice from "@/hooks/useDevice";
import GameImage from "@/components/ui/images/Icon";

export default function CardShimmer({
    img = "/img/lazy_bg.png"
}) {
    const [mobile] = useDevice();

    const shimmerCount = mobile ? 8 : 18

    let catShimmer = new Array(shimmerCount).fill(0);

    return (
        <ul className={styles.listParent}>
            {
                catShimmer.map((item, i) =>
                    <li className={`${styles.list}`} key={i}>
                        <GameImage
                            src={img}
                            width="240"
                            height="180"
                            title="lazyImage"
                            alt="lazyImage"
                            priority={false}
                            lazy="lazy"
                            unoptimized={true}
                        />
                    </li>
                )
            }
        </ul>
    )
}