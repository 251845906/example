import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import C1 from './container_01'
import C2 from './container_02'
import C3 from './container_03'
import C4 from './container_04'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service/Pxun",container:"讲座培训"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'Pxun',
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
            <div className="_ServicePxun container clearfix">
                <div className="Pxun clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Pxun/C1">新生培训</Link></li>
                        <li><Link to="/service/Pxun/C2">资源篇</Link></li>
                        <li><Link to="/service/Pxun/C3">应用篇</Link></li>
                        <li><Link to="/service/Pxun/C4">专场讲座</Link></li>
                    </ul>
                    <div className="PxunContainer fl">
                        <Switch>
                            <Route exact path="/service/Pxun" component={C1}/>
                            <Route path="/service/Pxun/C1" component={C1}/>
                            <Route path="/service/Pxun/C2" component={C2}/>
                            <Route path="/service/Pxun/C3" component={C3}/>
                            <Route path="/service/Pxun/C4" component={C4}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform