import React, { memo, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { PrinterData } from "../../xpyun/index";
import "./CustomerInput.css";
// import { ExclamationCircleOutlined } from '@ant-design/icons';
// import {  Modal } from 'antd';

export default memo(function CustomerInput() {
  const [name, setName] = useState("");
  const [staff, setStaff] = useState("");
  const [text, setText] = useState("");
  const [printResult, setPrintResult] = useState(false);
  const [process, setProcess] = useState(false);
  // const changeRoute = useContext(PageRouterContext);

  const submit = async () => {
    setProcess(true);
    let result = await PrinterData({
      staffId: staff,
      name: name,
      text: text,
    });
    if (result) {
      // navigateTo(changeRoute, config.pages.success);
    } else {
      // navigateTo(changeRoute, config.pages.failed);
    }
  };

  const [displayMask, setDisplayMask] = useState(false);
  const [displayPrintFirst, setDisplayPrintFirst] = useState(false);
  const [displayPrintSecond, setDisplayPrintSecond] = useState(false);
  const [displayPrintThird, setDisplayPrintThird] = useState(false);
  // useEffect(() => {
  //   setDisplayMask(false);
  //   setDisplayPrintFirst(false);
  //   console.log("displayMask ====>  " + { displayMask });
  //   console.log("displayPrintFirst ====>  " + { displayPrintFirst });
  // });

  const printWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(true);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    //打印逻辑
  };

  const printingWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(true);
    setDisplayPrintThird(false);
    // 打印中，跳转暂时设置5秒
    let timers = 2
     setInterval(() => {
       const num= timers --
       if (num < 0) {
         clearInterval(num)
         finishPrintingWish();
       }
     }, 1000)
  };

  const finishPrintingWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(true);
  };

  const closePrinting = () => {
    setDisplayMask(false);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    //打印逻辑
  };

  return (
    <div className="inputBackground">
      <div className="inputWishTitle">请输入你的愿望</div>
      <textarea className="inputWishDiv"></textarea>
      <div className="flower"></div>
      <button className="printWish" onClick={printWish}>
        打印愿望
      </button>
      <Link to="/customerWelcome">
        <div className="back">返回</div>
      </Link>

      {/* masking */}
      <div
        class="mask"
        style={{ display: displayMask ? "block" : "none" }}
      ></div>

      {/* 弹窗1 */}
      <div
        class="pop1"
        style={{ display: displayPrintFirst ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="content">打印后请及时取走以免丢失</div>
        <button class="i_know" onClick={printingWish}>
          知道了,开始打印
        </button>
        <div class="later" onClick={closePrinting}>
          稍后再打印
        </div>
      </div>

      {/* 弹窗2 */}
      <div
        class="pop2"
        style={{ display: displayPrintSecond ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="loading"></div>
        <div class="printing"></div>
      </div>

      {/* 弹窗3 */}
      <div
        class="pop3"
        style={{ display: displayPrintThird ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="content">你已成功许下心愿请及时取走</div>
        <Link to="/customerWelcome">
          <button class="backToWelcome">返回主页面</button>
        </Link>
      </div>
    </div>
  );
});
