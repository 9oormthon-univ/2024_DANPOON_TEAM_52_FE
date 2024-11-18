import { popStateFunc } from "../../../utils/utilfunc"
import { jobData } from "../../../constants/data"
import { usePickedItems } from "../../../hooks/usePickedItems";
import { useStepNavigation } from "../../../hooks/useStepNavigation";
const SetInterest = ({ onClickNext }) => {
  const {paramsInterestItem, paramsJobItem} = useStepNavigation();
  const { pickedItems, toggleItem, sendData } = usePickedItems(
    paramsInterestItem,
    () => popStateFunc(2, paramsJobItem, pickedItems)
  );
  return (
    <div className="Wrapper">
      <div
        className="content"
        style={{ textAlign: "left", fontFamily: "Pretendard" }}
      >
        <span style={{ color: "#8AFAF1" }}>{jobData[parseInt(paramsJobItem)]}</span>
        직무에서
        <br />
        세부 관심사를 선택해주세요
        <br />
        <span
          style={{
            color: "#747474",
            fontWeight: "bold",
            fontFamily: "Pretendard-Regular",
            fontSize: "18px",
          }}
        >
          (중복 선택이 가능해요)
        </span>
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
              background: pickedItems.includes(`${index}`)
                ? "#184149"
                : "#3B3B3B",
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
            onClick={(event) => {
              toggleItem(event.target.dataset.index)
            }}
          >
            {el}
          </button>
        ))}
      </div>
      <button
        className="nextBtn"
        style={{
          background:
            pickedItems.length !== 0
              ? "linear-gradient(90deg, #4E52C7 0%, #8AFAF1 100%)"
              : "#1F1F1F",
          color: pickedItems.length !== 0 ? "black" : "#7D7D7D",
        }}
        onClick={() => {
          onClickNext()
          sendData()
        }}
      >
        시작하기
      </button>
    </div>
  )
}

export default SetInterest
