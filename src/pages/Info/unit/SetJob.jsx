import { jobData } from "../../../constants/data";
import { useStepNavigation } from "../../../hooks/useStepNavigation";
import { usePickedItems } from "../../../hooks/usePickedItems";
const SetJob = ({ onClickNext }) => {
  const { selectItem, jobItem} = usePickedItems();
  const { paramsJobItem } = useStepNavigation();
  return (
    <div className="Wrapper">
      <div className="content">
        <span style={{ color: "#8AFAF1" }}>희망 직무</span>를<br />
        선택해주세요
      </div>
      <div
        className="gridWrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
          padding: "0px 10px",
        }}
      >
        {jobData.map((el, index) => (
          <button
            style={{
              background:
                parseInt(jobItem) == index || paramsJobItem == index ? "#184149" : "#3B3B3B",
              color: "white",
              textAlign: "center",
              border: "none",
              borderRadius: "10px",
              padding: "10px 5px",
              width: "calc(33.333% - 10px)",
              fontFamily: "Pretendard-Regular",
            }}
            key={index}
            data-index={index}
            onClick={(event) => selectItem(event)}
          >
            {el}
          </button>
        ))}
      </div>
      <button
        className="nextBtn"
        style={{
          background: jobItem.length !== 0 ? "white" : "#1F1F1F",
          color: jobItem !== "" ? "" : "#7D7D7D",
        }}
        onClick={() => {
          onClickNext(jobItem);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default SetJob;