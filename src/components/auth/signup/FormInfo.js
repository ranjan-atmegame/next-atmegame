import LeftBlockList from "@/components/common/LeftBlockList";

export default function FormInfo({
  img = "https://www.atmegame.com/img/sign-up-image.svg",
  heading = "Create New Account",
  desp = "Create new account with our website for free to avail of all the amazing benefits of the registered players in the form of awards, statistics, your own avatar, high scores and much more!",
  list = [
    {
      label:
        "the complete games statistics like Leaderboard, high scores, and rankings..",
      id: "1",
    },
    { label: "Get latest update of launching any new game.", id: "2" },
    { label: "keep you engrossed for hours", id: "3" },
    { label: "an extensive variety of free online games.", id: "4" },
  ],
}) {
  return (
    <div>
      <LeftBlockList
        img={img}
        heading={heading}
        list={list}
        alt="Sign Up"
        width="300"
        height="300"
        desp={desp}
      />
    </div>
  );
}
