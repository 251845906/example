import React,{ Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import SituactionBanner from './SituactionBanner';
import Intro from './Intro';
import Style from './Style';
import Rules from './Rules';
import Details from './RulesDetails';
import Item from './RulesItem';
import Structure from './Structure';

class Situation extends Component{
    constructor(props){
        super(props);
        //state 传入子组件运行改变父组件
        // BreadcrumbNav  面包屑导航第二个
        // LinkToNav     面包屑导航第二个跳转的链接
        // rulesNav   是否有第四个 和 第五个
        // 菜单导航  当前页面是哪个页面哪个导航高亮
        this.state = {
            BreadcrumbNav:'本馆介绍',
            LinkToNav:'/situation/intro',
            rulesNav:[false,{Link:'',container:''}],
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
                            <Breadcrumb.Item><Link to="/situation/intro">本馆概况</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={this.state.LinkToNav}>{this.state.BreadcrumbNav}</Link></Breadcrumb.Item>
                            {this.state.rulesNav[0] && <Breadcrumb.Item>  <Link to={this.state.rulesNav[1].Link}>{this.state.rulesNav[1].container}</Link></Breadcrumb.Item>}
                            {this.state.rulesNav.length> 2 ? <Breadcrumb.Item>  <Link to={this.state.rulesNav[2].Link}> {this.state.rulesNav[2].container}</Link></Breadcrumb.Item>:''}
                        </Breadcrumb>
                    </div>
                    { this.state.rulesNav[0] ||
                        <div className="SituationMenu container">
                            <h3>概况  / <span>survey</span></h3>
                            <ul>
                                <li className={this.state.SituationMenu === 'intro' ? 'active':''}><span className="iconfont">&#xe61a; </span><Link to="/situation/intro">本馆简介</Link> </li>
                                <li className={this.state.SituationMenu === 'style' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/situation/style">馆舍风貌</Link> </li>
                                <li className={this.state.SituationMenu === 'structure' ? 'active':''}><span className="iconfont">&#xe66e; </span><Link to="/situation/structure">组织机构</Link> </li>
                                <li className={this.state.SituationMenu === 'rules' ? 'active':''}><span className="iconfont">&#xe631; </span><Link to="/situation/rules">规章制度</Link> </li>
                            </ul>
                        </div>
                    }

                    <Switch>
                        <Route exact path="/situation" render={()=><Intro Breadcrumb={this.handLoalding}/>}/>
                        <Route path="/situation/intro" render={()=><Intro Breadcrumb={this.handLoalding}/>}/>
                        <Route path="/situation/style" render={()=><Style Breadcrumb={this.handLoalding}/>}/>
                        <Route exact path="/situation/rules" render={()=><Rules Breadcrumb={this.handLoalding}/>}/>
                        <Route path="/situation/rules/item" render={()=><Item Breadcrumb={this.handLoalding}/>}/>
                        <Route path="/situation/rules/details" render={()=><Details Breadcrumb={this.handLoalding}/>}/>
                        <Route path="/situation/structure" render={()=><Structure Breadcrumb={this.handLoalding}/>}/>
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