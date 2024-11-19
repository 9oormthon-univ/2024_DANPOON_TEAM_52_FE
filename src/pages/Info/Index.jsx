import SetJob from "./components/SetJob";
import SetInterest from "./components/SetInterest";
import { useStepNavigation } from "../../hooks/useStepNavigation";
export default function InfoPage() {
  const { step, paramsInterestItem, updateStep } = useStepNavigation();
  const onClickNext = (data) => {
    //jobItem주기
    updateStep("2", data);
  };
  return (
    <>
      {step === "1" && (
        <SetJob
          onClickNext={onClickNext}
          interestItem={paramsInterestItem}
        ></SetJob>
      )}
      {step === "2" && (
        <SetInterest
          interestItem={paramsInterestItem}
        ></SetInterest>
      )}
    </>
  );
}
