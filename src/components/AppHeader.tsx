import "../scss/appHeader.scss";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/themeSlice";

function AppHeader() {
  const themeNum = useSelector((state: RootState) => state.theme.value);
  const dispach = useDispatch();

  const toggleTheme = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = event.target as HTMLElement;
    const circle = el.querySelector(".circle") as HTMLElement;

    const audio: HTMLAudioElement = new Audio(
      require("../assets/swithTheme.mp3")
    );
    audio.play();

    if (themeNum === 1) {
      circle.style.left = "22px";
      dispach(setTheme());
    } else if (themeNum === 2) {
      circle.style.left = "44px";
      dispach(setTheme());
    } else if (themeNum === 3) {
      circle.style.left = "0px";
      dispach(setTheme());
    }
  };

  return (
    <section className="header">
      <h2>Calc</h2>

      <div className="theme">
        <span>THEME</span>
        <div className="toggle">
          <div className="nums">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="bar" onClick={toggleTheme}>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppHeader;
