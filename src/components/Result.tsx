import { useSelector } from "react-redux";
import { RootState } from "../store";

function Result() {
  const result = useSelector((state: RootState) => state.result.value);

  return <section className="result">{result}</section>;
}

export default Result;
