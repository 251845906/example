import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './top.css';
class Nav extends Component{
    collectClick(){

    }
    telClick(){

    }
    render(){
        return(
            <div className="nav clearfix">
                <div className="container">
                    <ul className="nav_item fl">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/situation">本馆概况</Link></li>
                        <li><Link to="/new">新闻资讯</Link></li>
                        <li><Link to="/service">本馆服务</Link></li>
                        <li><Link to="/resource">馆藏资源</Link></li>
                        <li><Link to="/exchange">学术交流</Link></li>
                    </ul>
                    <div className="nav_rest">
                        <span className="collect" onClick={this.collectClick.bind(this)}>收藏</span>
                        <span className="tel" onClick={this.telClick.bind(this)}>电话</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav