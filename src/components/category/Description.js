import CardContainer from "@/components/ui/card/CardContainer";
import sharedStyles from "@/components/layout/common.module.css";
import ExpanCollapseWidget from "@/components/common/ExpanCollpase/ExpanCollapseWidget";

export default function Description({ name, description }) {
  return (
    <CardContainer>
      <div className={sharedStyles.cardContetSec}>
        <div className={sharedStyles.gameCategory}>
          <h1 style={{ textTransform: "capitalize" }}>Online {name} Games</h1>
        </div>
        <ExpanCollapseWidget>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </ExpanCollapseWidget>
      </div>
    </CardContainer>
  );
}
