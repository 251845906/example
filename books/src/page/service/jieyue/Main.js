import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
// import Timer from './timer'
// import Layout from './layout'
// import Know from './know'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service",container:"入馆指南"},{start:true,link:"/service/Jyue",container:"借阅服务"},{start:false,link:"",container:""}],
            SituationMenu:'Znan',
            detailOk:false,
        };
        this.loadingFun = this.loadingFun.bind(this);
    }
    componentDidMount(){
        this.loadingFun(this.state)
    }
    loadingFun(i){
        this.props.Breadcrumb(i)
    }
    render(){
        return(
            <div className="_ServiceZnan container clearfix">
                {/*<div className="Znan clearfix">*/}
                    {/*<ul className="_Menu fl">*/}
                        {/*<li><Link to="/service/Znan/timer">借阅制度</Link></li>*/}
                        {/*<li><Link to="/service/Znan/layout">证件办理</Link></li>*/}
                        {/*<li><Link to="/service/Znan/know">预约</Link></li>*/}
                        {/*<li><Link to="/service/Znan/know">预约催还</Link></li>*/}
                        {/*<li><Link to="/service/Znan/know">借阅状态</Link></li>*/}
                        {/*<li><Link to="/service/Znan/know">续借</Link></li>*/}
                        {/*<li><Link to="/service/Znan/know">名人藏书馆</Link></li>*/}
                    {/*</ul>*/}
                    {/*<div className="ZnanContainer fl">*/}
                        {/*<Switch>*/}
                            {/*<Route exact path="/service" component={Timer}/>*/}
                            {/*<Route exact path="/service/Znan" component={Timer}/>*/}
                            {/*<Route path="/service/Znan/timer" component={Timer}/>*/}
                            {/*<Route path="/service/Znan/layout" component={Layout}/>*/}
                            {/*<Route path="/service/Znan/know" component={Know}/>*/}
                        {/*</Switch>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
};
export default Inform