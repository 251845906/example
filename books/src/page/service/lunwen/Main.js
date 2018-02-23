import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import C1 from './container_01'
import C2 from './container_02'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service/Lwen",container:"论文提交"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'Lwen',
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
            <div className="_ServiceLwen container clearfix">
                <div className="Lwen clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Lwen/C1">论文提交要求</Link></li>
                        <li><Link to="/service/Lwen/C2">快速提交通道</Link></li>
                    </ul>
                    <div className="LwenContainer fl">
                        <Switch>
                            <Route exact path="/service/Lwen" component={C1}/>
                            <Route path="/service/Lwen/C1" component={C1}/>
                            <Route path="/service/Lwen/C2" component={C2}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform