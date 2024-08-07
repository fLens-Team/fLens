// 使用するGLSLフィルターのインデックス
// export let shaderIndex = 0;
import "./FilterSelectContainer.css";

import CameraCapture, { saveImage } from "../CaptureContainer/CameraCapture/CameraCapture";

// 利用するシェーダのインデックス

// GLSLソースファイルのパスリスト
import { fileList } from "../CaptureContainer/CameraCapture/fileList";

// 画像に関するパス
// import LeftButton from "../image/LeftButton.svg";
// import RightButton from "../image/RightButton.svg";
import FocusFilter from "../image/FocusFilter.svg";
import DownLoadButton from "../image/DownLoadButton.svg";

export default function FilterSelectContainer({ shaderIndex, setShaderIndex }) {
  // // 次のシェーダをフィルターとして適用する
  // function nextShader() {
  //   setShaderIndex((shaderIndex + 1) % fileList.length);
  // }

  // // 前のシェーダをフィルターとして適用する
  // function backShader() {
  //   setShaderIndex((shaderIndex - 1 + fileList.length) % fileList.length);
  // }

  return (
    <div className="FilterSelectContainer">
      {/* <img src={LeftButton} onClick={backShader} className="btn"></img> */}

      {/* <img className="preview0" src={fileList[shaderIndex]["prev"]}></img>
      <img className="preview1" src={fileList[shaderIndex]["prev"]}></img>
      <img className="preview2" src={fileList[shaderIndex]["prev"]}></img>

      <img className="preview3" src={fileList[shaderIndex]["prev"]}></img>
      <img className="preview4" src={fileList[shaderIndex]["prev"]}></img>
      <img className="preview5" src={fileList[shaderIndex]["prev"]}></img>

      <img className="preview6" src={fileList[shaderIndex]["prev"]}></img>
      <img className="preview7" src={fileList[shaderIndex]["prev"]}></img>
      <img className="preview8" src={fileList[shaderIndex]["prev"]}></img> */}
      <div>
        <div>
          <PreviewImage classNameString={"preview0"} previewIndex={0} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
          <PreviewImage classNameString={"preview1"} previewIndex={1} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
          <PreviewImage classNameString={"preview2"} previewIndex={2} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
        </div>
        <div className="cernterRow">
          <PreviewImage classNameString={"preview3"} previewIndex={3} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
          <PreviewImage classNameString={"preview4"} previewIndex={4} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
          <PreviewImage classNameString={"preview5"} previewIndex={5} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
        </div>
        <div>
          <PreviewImage classNameString={"preview6"} previewIndex={6} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
          <PreviewImage classNameString={"preview7"} previewIndex={7} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage>
          {/* <PreviewImage classNameString={"preview8"} previewIndex={8} shaderIndex={shaderIndex} setShaderIndex={setShaderIndex}></PreviewImage> */}
        </div>
      </div>

      {/* <img src={FocusFilter} className="focus"></img> */}
      {/* <img src={fileList[shaderIndex]["prev"]} className="preview"></img> */}
      {/* <img src={fileList[shaderIndex]["prev"]} className="preview" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}></img> */}

      {/* <img src={RightButton} onClick={nextShader} className="btn"></img> */}
      <img src={DownLoadButton} onClick={saveImage} className="CaptureContainerCenter-bottom-center"></img>
    </div >
  );
}

function PreviewImage({ previewIndex = 0, shaderIndex, setShaderIndex, classNameString = "PreviewImage" }) {
  function handleClick() {
    console.log(fileList[previewIndex]["prev"])
    console.log(shaderIndex)
    setShaderIndex(previewIndex)
    console.log(shaderIndex)
  }

  return (
    // 画像が用意される前
    <img className={classNameString} src={fileList[0]["prev"]} onClick={handleClick}></img >
    // 画像が用意された後
    // <img className={classNameString} src={fileList[previewIndex]["prev"]} onClick={handleClick}></img >
  );
}