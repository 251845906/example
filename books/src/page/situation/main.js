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
    }
    render(){
        const ArrPath = window.location.pathname.split('/');
        const arrBreadcrumb = ['本馆介绍','馆舍风貌','规章制度','组织机构']
        let SituationNav = '';
        if(ArrPath[ArrPath.length-1] === ''){
            ArrPath.splice(ArrPath.length-1,1);
        }
        console.log(ArrPath[ArrPath.length-1]);
        switch (ArrPath[ArrPath.length-1]){
            case 'situation':
                 SituationNav = arrBreadcrumb[0];
                break;
            case 'intro':
                 SituationNav = arrBreadcrumb[1];
                break;
            case 'style':
                 SituationNav = arrBreadcrumb[2];
                break;
            case 'rules':
                 SituationNav = arrBreadcrumb[3];
                break;
            case 'structure':
                 SituationNav = arrBreadcrumb[4];
                break;
        }
        return (
                <div className="box Situation">
                    <SituactionBanner />
                    <Breadcrumb separator=">>" className="container">
                        <Breadcrumb.Item>当前位置：首页</Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`${this.match.url}/style`}>本馆概况</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>{SituationNav}</Breadcrumb.Item>
                        {ArrPath.length < 4 || <Breadcrumb.Item> 555555</Breadcrumb.Item> }
                    </Breadcrumb>
                    <Switch>
                        <Route exact path={`${this.match.url}/`} component={Intro}/>
                        <Route path={`${this.match.url}/intro`} component={Intro}/>
                        <Route path={`${this.match.url}/style`} component={Style}/>
                        <Route path={`${this.match.url}/rules`} component={Rules}/>
                        <Route path={`${this.match.url}/structure`} component={Structure}/>
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