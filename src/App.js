import "./styles.css";
import { StlViewer } from "react-stl-viewer";
import stl from "./small-wahoo-over-under.stl";

const style = {
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh"
};

// const url = "./small-wahoo-over-under.stl";

export default function App() {
  return (
    <div className="App">
      <h1>Aerohead</h1>
      <h2>Lightweight bicycle components.</h2>
      <StlViewer style={style} orbitControls shadows url={stl} />
    </div>
  );
}
