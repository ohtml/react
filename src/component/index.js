import React, { Component } from "react";
import { render } from "react-dom";

export default class Index extends React.Component {
    constructor(props) {
        super();
        this.state = {
            list: [
                {
                    "skuId": 27902094847,
                    "title": "VIEKUCOOL 1条装蜂巢收腹女士性感内裤女纯棉裆中腰三角裤 杏色 均码",
                    "imagePath": "jfs/t17119/223/2281857178/435875/bc3d0e70/5aed5ffaNd8d875de.jpg",
                    "p": 13.8,
                    "d": 9.66
                },
                {
                    "skuId": 27106184962,
                    "title": "【第二件9元】水嫩喷雾爽肤水女男补水保湿定妆收缩毛孔化妆水柔肤水 舒护温泉喷雾 150ml",
                    "imagePath": "jfs/t19444/342/1725199223/250677/fa40b98b/5ad55e38N7acaaa91.jpg",
                    "p": 28,
                    "d": 9.9
                },
                {
                    "skuId": 10469694641,
                    "title": "何浩明 DR HO'S远红外磁疗药贴 腰部肌肉疼痛劳损止痛药膏贴风湿性关节膏贴骨质颈椎何医生 一盒共4贴",
                    "imagePath": "jfs/t2701/335/3000212396/186991/c811fdb8/577f6ae9N28255c09.jpg",
                    "p": 9.9,
                    "d": 9.9
                },
                {
                    "skuId": 22091192846,
                    "title": "祥业 |哑光脂白亚光斗笠杯 功夫茶具茶杯品茗杯闻香杯主人单杯 青釉",
                    "imagePath": "jfs/t20086/26/2340396108/91893/fbc61fb2/5b3c6cd9Nab7e088a.jpg",
                    "p": 9,
                    "d": 6.8
                },
                {
                    "skuId": 13650915794,
                    "title": "Creative art梳子 男女发廊美发梳挑发梳打毛梳盘发梳子 两折梳",
                    "imagePath": "jfs/t21541/12/1851999797/275169/75b96964/5b3adbb9Nc6e15a7b.jpg",
                    "p": 10.7,
                    "d": 9.4
                },
            ]
        }

    }
    componentDidMount() {
        var swiper = new Swiper('.jingxuan', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 10,
            slidesOffsetAfter: 10,
            freeMode: true,
            observer: true,
            observeParents: true,
        });
    }
    tit = () => {
        return <div className="page_tit"><img src={require("../images/icon_l.png")} />新人专享<img src={require("../images/icon_r.png")} /></div>
    }

    list = () => {
        let { list } = this.state;
        console.log(list);
        return (<div className="swiper-container jingxuan" >
            <div className="swiper-wrapper ">
                {
                    list.map((item, index) => (
                        <div className="swiper-slide item" key={index}>
                            <div className="sku_img">
                                <img src="https://img12.360buyimg.com/cms/s276x276_jfs/t21916/200/1735023540/423303/beabb835/5b3477b7N6661d18d.jpg" />
                            </div>
                            <div className="sku_tit_h">
                                <div className="sku_tit">花仙子干燥剂吊挂式除湿袋 200g衣服橱柜除湿吸潮去湿剂</div>
                            </div>
                            <div className="sku_bottom">
                                <div className="sku_p">¥8.<span>99</span></div>
                                <div className="sku_d">¥33.22</div>
                                <div className="sku_tip"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>)
    }
    render() {
        return (<div>
            {this.tit()}
            {this.list()}
        </div>
        )

    }
}