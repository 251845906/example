import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component{
    render(){
        return(
            <div className="_nav clearfix  box">
                <div className="container clearfix ">
                    <ul className="_nav_item fl">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/situation">本馆概况</Link></li>
                        <li><Link to="/new">新闻资讯</Link></li>
                        <li><Link to="/service">本馆服务</Link></li>
                        <li><Link to="/resource">馆藏资源</Link></li>
                        <li><Link to="/exchange">学术交流</Link></li>
                    </ul>
                    <div className="_nav_rest fr">
                        <span className="tel"><i className="iconfont icon-dianhua"></i>电话：000-000000</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav