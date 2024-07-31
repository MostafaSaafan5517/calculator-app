import "../scss/appBody.scss";
import { useDispatch } from "react-redux";
import { calc, displayData } from "../store/slices/resultSlice";

function Button({ value }: { value: string }) {
  const dispatch = useDispatch();

  type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

  const audio: HTMLAudioElement = new Audio(
    require("../assets/buttonClick.mp3")
  );

  const handleBtnClick = (event: ClickEvent) => {
    const el = event.target as HTMLElement;
    const value = el.dataset.value as string;
    el.style.borderBottom = "none";

    audio.play();

    setTimeout(() => {
      el.style.borderBottom = "4px solid";
    }, 100);

    if (!(value === "RESET" || value === "DEL" || value === "=")) {
      dispatch(displayData(value));
    } else if (value === "RESET") {
      dispatch(displayData(""));
    } else if (value === "DEL") {
      dispatch(displayData(value));
    } else if (value === "=") {
      dispatch(calc(value));
    }
  };

  return (
    <section className="button" data-value={value} onClick={handleBtnClick}>
      {value}
    </section>
  );
}

function AppBody() {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "*",
    "/",
    "+",
    "-",
    "Delete",
    "Backspace",
    "Enter",
  ];

  document.body.addEventListener("keydown", (event) => {
    if (keys.includes(event.key)) {
      let el;
      if (event.key === "Enter") {
        el = document.querySelector(".button[data-value='=']") as HTMLElement;
      } else if (event.key === "Backspace") {
        el = document.querySelector(".button[data-value='DEL']") as HTMLElement;
      } else if (event.key === "Delete") {
        el = document.querySelector(
          ".button[data-value='RESET']"
        ) as HTMLElement;
      } else {
        el = document.querySelector(
          `.button[data-value='${event.key}']`
        ) as HTMLElement;
      }
      el.click();
    }
  });

  return (
    <section className="body">
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="DEL" />
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="+" />
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="-" />
      <Button value="." />
      <Button value="0" />
      <Button value="/" />
      <Button value="x" />
      <Button value="RESET" />
      <Button value="=" />
    </section>
  );
}

export default AppBody;
