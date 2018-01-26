import React,{ Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import ServiceBanner from './ServiceBanner';
// import Inform from './inform';
// import Trends from './trendsNew';
// import Detail from './detail'


class Service extends Component {
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/new",container:"通知公告"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'inform',
            detailOk:false,
        };
        this.handLoading = this.handLoading.bind(this)
    }
    handLoading(obj){
        this.setState(obj)
    }
    render(){

        return(
            <div className="box New">
                <ServiceBanner />
                <div className="_breadcrumb">
                    <Breadcrumb separator=">>" className="container">
                        <Breadcrumb.Item><span className="iconfont">&#xe603;</span>当前位置：<Link to="/">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/new">新闻资讯</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={this.state.Breadcrumb[0].link}>{this.state.Breadcrumb[0].container}</Link></Breadcrumb.Item>
                        {this.state.Breadcrumb[1].start && <Breadcrumb.Item><Link to={this.state.Breadcrumb[1].link}>{this.state.Breadcrumb[1].container}</Link></Breadcrumb.Item>}
                        {this.state.Breadcrumb[2].start && <Breadcrumb.Item>  <Link to={this.state.Breadcrumb[2].link}> {this.state.Breadcrumb[2].container}</Link></Breadcrumb.Item>}
                    </Breadcrumb>
                </div>
                { this.state.detailOk ||
                <div className="NewMenu container">
                    <h3>新闻资讯  / <span>News</span></h3>
                    <ul>
                        <li className={this.state.SituationMenu === 'inform' ? 'active':''}><span className="iconfont">&#xe61a; </span><Link to="/new">通知公告</Link> </li>
                        <li className={this.state.SituationMenu === 'trends' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/new/trends">动态新闻</Link> </li>
                    </ul>
                </div>
                }
                {/*<Switch>*/}
                    {/*<Route exact path="/new" render={()=><Inform Breadcrumb={this.handLoading}/>}/>*/}
                    {/*<Route path="/new/inform" render={()=><Inform Breadcrumb={this.handLoading}/>}/>*/}
                    {/*<Route path="/new/trends" render={()=><Trends Breadcrumb={this.handLoading}/>}/>*/}
                    {/*<Route path="/new/detail" render={()=><Detail Breadcrumb={this.handLoading}/>}/>*/}
                {/*</Switch>*/}
            </div>
        )
    }
};

export default Service;

// Inform   通知公告
// Trends   动态新闻
// Detail   新闻详情