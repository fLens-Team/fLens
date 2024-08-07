import CameraCapture, { saveImage } from "./CameraCapture/CameraCapture";
import "./CaptureContainer.css";

// 画像に関するパス
import CaptureFrame from "../image/CaptureFrame.png";

// 画面左部分
export default function CaptureContainer({ shaderIndex }) {
  return (
    <div className="CaptureContainer">
      {/* キャプチャのフレーム */}
      <img src={CaptureFrame}></img>

      {/* キャプチャ */}
      <CameraCapture shaderIndex={shaderIndex} />
    </div>
  );
}