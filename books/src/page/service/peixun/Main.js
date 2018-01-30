import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import Timer from './timer'
import Layout from './layout'
import Know from './know'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service",container:"入馆指南"},{start:true,link:"/service/Znan",container:"开馆时间"},{start:false,link:"",container:""}],
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
                <div className="Znan clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Znan/timer">开馆时间</Link></li>
                        <li><Link to="/service/Znan/layout">馆藏分布</Link></li>
                        <li><Link to="/service/Znan/know">入馆须知</Link></li>
                    </ul>
                    <div className="ZnanContainer fl">
                        <Switch>
                            <Route exact path="/service" component={Timer}/>
                            <Route exact path="/service/Znan" component={Timer}/>
                            <Route path="/service/Znan/timer" component={Timer}/>
                            <Route path="/service/Znan/layout" component={Layout}/>
                            <Route path="/service/Znan/know" component={Know}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform