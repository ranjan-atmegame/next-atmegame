import LeftBlockList from '../common/LeftBlockList';

export default function FormInfo({
    img = "https://www.atmegame.com/img/submit-a-game-image.svg",
    heading = "Submit a Game",
    list = [
        {label : "Get a chance to Earn Revenue Share, get fixed fee, etc.", id: "1"},
        {label : "Get a chance to reach 10 Millions users globally by just submitting your game to us.", id: "2"}
    ]
}) {



    return (
        <div className="">
            <LeftBlockList 
                img = {img}
                heading = {heading}
                list = {list}
                alt="Submit a Game"
                width="400"
                height="400"
            />
        </div>
    )
}