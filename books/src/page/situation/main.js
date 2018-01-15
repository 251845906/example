import React,{ Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import SituactionBanner from './SituactionBanner';
import Intro from './intro';
import Style from './style';
import Rules from './rulse';
import Structure from './structure';

class Situation extends Component{
    constructor({ match },props){
        super(props);
        this.match = match;
        this.state = {
            BreadcrumbNav:'本馆介绍',
            LinkToNav:`${this.match.url}/intro`,
            rulesNav:[false,'xxxxxx'],
            SituationMenu:'intro',
        };
        this.handLoalding = this.handLoalding.bind(this)
    }
    handLoalding(obj){
        this.setState(obj);
    }
    render(){
        return (
                <div className="box Situation">
                    <SituactionBanner />
                    <div className="_breadcrumb">
                        <Breadcrumb separator=">>" className="container">
                            <Breadcrumb.Item><span className="iconfont">&#xe603;</span>当前位置：<Link to="/">首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={`${this.match.url}/`}>本馆概况</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={this.state.LinkToNav}>{this.state.BreadcrumbNav}</Link></Breadcrumb.Item>
                            {this.state.rulesNav[0] && <Breadcrumb.Item> {this.state.rulesNav[1]}</Breadcrumb.Item> }
                        </Breadcrumb>
                    </div>
                    <div className="SituationMenu container">
                        <h3>概况  / <span>survey</span></h3>
                        <ul>
                            <li className={this.state.SituationMenu === 'intro' ? 'active':''}><span className="iconfont">&#xe61a; </span><Link to={`${this.match.url}/intro`}>本馆简介</Link> </li>
                            <li className={this.state.SituationMenu === 'style' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to={`${this.match.url}/style`}>馆舍风貌</Link> </li>
                            <li className={this.state.SituationMenu === 'structure' ? 'active':''}><span className="iconfont">&#xe66e; </span><Link to={`${this.match.url}/structure`}>组织机构</Link> </li>
                            <li className={this.state.SituationMenu === 'rules' ? 'active':''}><span className="iconfont">&#xe631; </span><Link to={`${this.match.url}/rules`}>规章制度</Link> </li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path={`${this.match.url}/`} render={()=><Intro BreadcrumbNav={this.handLoalding}/>}/>
                        <Route path={`${this.match.url}/intro`} render={()=><Intro BreadcrumbNav={this.handLoalding}/>}/>
                        <Route path={`${this.match.url}/style`} render={()=><Style BreadcrumbNav={this.handLoalding}/>}/>
                        <Route path={`${this.match.url}/rules`} render={()=><Rules BreadcrumbNav={this.handLoalding}/>}/>
                        <Route path={`${this.match.url}/structure`} render={()=><Structure BreadcrumbNav={this.handLoalding}/>}/>
                    </Switch>
                </div>
        )
    }
};

export default Situation;

// 简介           intro（介绍）
// 环境  风貌      style（风格）
// 规章制度        rules（规则条例）
// 组织机构        structure（结构）