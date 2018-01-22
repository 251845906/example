import React,{ Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import NavBanner from './NewBanner';
import Inform from './inform';
import Trends from './trendsNew';
import Detail from './detail'


class New extends Component {
    constructor(props){
        super(props)
        this.state = {
            Breadcrumb:[false,{link:"",container:""},{link:"",container:""}],
            LinkToNav:'/situation/intro',
            SituationMenu:'intro',
        };
    }
    handLoalding(obj){
        this.setState(obj);
    }
    render(){
        return(
            <div className="box New">
                <NavBanner />
                <div className="_breadcrumb">
                    <Breadcrumb separator=">>" className="container">
                        <Breadcrumb.Item><span className="iconfont">&#xe603;</span>当前位置：<Link to="/">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/new">新闻资讯</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={this.state.LinkToNav}>{this.state.BreadcrumbNav}</Link></Breadcrumb.Item>
                        {this.state.Breadcrumb[0] && <Breadcrumb.Item>  <Link to={this.state.rulesNav[1].Link}>{this.state.rulesNav[1].container}</Link></Breadcrumb.Item>}
                        {this.state.Breadcrumb.length> 3 ? <Breadcrumb.Item>  <Link to={this.state.rulesNav[2].Link}> {this.state.rulesNav[2].container}</Link></Breadcrumb.Item>:''}
                    </Breadcrumb>
                </div>
                { this.state.Breadcrumb[0] ||
                <div className="NewMenu container">
                    <h3>新闻资讯  / <span>News</span></h3>
                    <ul>
                        <li className={this.state.SituationMenu === 'intro' ? 'active':''}><span className="iconfont">&#xe61a; </span><Link to="/situation/intro">通知公告</Link> </li>
                        <li className={this.state.SituationMenu === 'style' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/situation/style">动态新闻</Link> </li>
                    </ul>
                </div>
                }
                <Switch>
                    <Route exact path="/new" render={()=><Inform Breadcrumb={this.handLoalding}/>}/>
                    <Route path="/new/inform" render={()=><Inform Breadcrumb={this.handLoalding}/>}/>
                    <Route path="/new/trends" render={()=><Trends Breadcrumb={this.handLoalding}/>}/>
                    <Route path="/new/detail" render={()=><Detail Breadcrumb={this.handLoalding}/>}/>
                </Switch>
            </div>
        )
    }
};

export default New;

// Inform   通知公告
// Trends   动态新闻
// Detail   新闻详情