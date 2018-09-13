import React, { Component } from "react";
import ReactDOM,{ render } from "react-dom";

import "./less/swiper.css";
import "./less/less.less";
import "./lib/rem.js"; 
import "./lib/swiper.min.js";


// import Index from "./component/index";
//热更新
if(module.hot){
    module.hot.accept();
}
//__DEV__可以在任何js中使用
if(__DEV__){
 //  alert("开发2s22ddd");
}else{
   // alert("生产");
}



// ReactDOM.render(<Index/>, document.getElementById("app"));