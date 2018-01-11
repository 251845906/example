import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <div className="box footer">
                <div className="_article">
                    <div className="container">
                        <p>
                            友情链接：
                            <Link to="#">XXX高校图工委</Link>
                            <Link to="#">XXX高校图工委</Link>
                            <Link to="#">XXX高校图工委</Link>
                            <Link to="#">XXX高校图工委</Link>
                            <Link to="#">XXX高校图工委</Link>
                            <Link to="#">XXX高校图工委</Link>
                        </p>
                    </div>
                </div>
                <div className="_footer">
                    <div className="container clearfix">
                        <div className="_footerSubnav fl">
                            <p className="title">底部导航</p>
                            <Link to="#">首页</Link><Link to="#">馆藏资源</Link><br/>
                            <Link to="#">本馆概况</Link><Link to="#">学术交流</Link><br/>
                            <Link to="#">新闻资讯</Link><br/>
                            <Link to="#">本馆服务</Link>
                        </div>
                        <div className="xian"> </div>
                        <div className="_footerContact fl">
                            <p className="title">联系方式</p>
                            <p>地 址：山西省太原市坞城南路99号</p>
                            <p>电 话：0351-7965790</p>
                            <p>传 真：0351-7965790</p>
                            <p>邮政编码：030006</p>
                        </div>
                        <div className="xian"> </div>
                        <div className="copyright fl">
                            <p>(晋)ICP备05005595号</p>
                            <p>山西工商学院版权所有Copyright © 2005---2012</p>
                            <p>建议用360浏览器或IE9以上版本</p>
                            <p>技术支持：北京云晟文创科技有限公司</p>
                        </div>
                        <div className="xian"> </div>
                        <div className="wx fl">
                            <img src={require('../images/qr.png')} alt=""/>
                            <p>微信公众号</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer