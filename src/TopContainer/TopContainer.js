import "./TopContainer.css";

// 画面上全体の領域
import flensLogo from "../image/Logo.svg";
import mediaArtTypo from "../image/MediaArtProject.svg";

export default function TopContainer() {
  return (
    <div className="TopContainer">
      {/*fLensのロゴ */}
      {/* <div className="TopContainerLeft"> */}
      <img className="flensLogo" src={flensLogo}></img>
      {/* </div> */}
      {/* 「Media Art Project」のタイポ */}
      {/* <div className="TopContainerRight"> */}
      <img className="mediaArtTypo" src={mediaArtTypo}></img>
      {/* </div> */}
    </div>
  );
}