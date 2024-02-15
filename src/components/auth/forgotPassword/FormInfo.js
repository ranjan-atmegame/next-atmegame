import LeftBlockList from "@/components/common/LeftBlockList";

export default function FormInfo({
  img = "https://www.atmegame.com/img/forgot-password-image.svg",
}) {
  return (
    <div>
      <LeftBlockList
        img={img}
        alt="forgot-password"
        width="300"
        height="300"
      />
    </div>
  );
}
