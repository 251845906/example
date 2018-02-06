import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
// import Timer from './timer'
// import Layout from './layout'
// import Know from './know'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service",container:"入馆指南"},{start:true,link:"/service/Pxun",container:"讲座培训"},{start:false,link:"",container:""}],
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
            <div className="_ServiceZnan container clearfix">
                <div className="Znan clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Pxun/">新生培训</Link></li>
                        <li><Link to="/service/Pxun/">资源篇</Link></li>
                        <li><Link to="/service/Pxun/">应用篇</Link></li>
                        <li><Link to="/service/Pxun/">专场讲座</Link></li>
                    </ul>
                    <div className="ZnanContainer fl">
                        {/*<Switch>*/}
                            {/*<Route exact path="/service/Pxun" component={Timer}/>*/}
                            {/*<Route path="/service/Pxun" component={Timer}/>*/}
                            {/*<Route path="/service/Pxun" component={Timer}/>*/}
                            {/*<Route path="/service/Pxun" component={Layout}/>*/}
                            {/*<Route path="/service/Pxun" component={Know}/>*/}
                        {/*</Switch>*/}
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform