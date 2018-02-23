import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import { Pagination } from 'antd';
import C1 from './container_01'
import C2 from './container_02'
import C3 from './container_03'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service/Xke",container:"学科服务"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'Xke',
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
            <div className="_ServiceXke container clearfix">
                <div className="Xke clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Xke/C1">学科馆员</Link></li>
                        <li><Link to="/service/Xke/C2">服务内容</Link></li>
                        <li><Link to="/service/Xke/C3">资源荐购</Link></li>
                    </ul>
                    <div className="XkeContainer fl">
                        <Switch>
                            <Route exact path="/service/Xke" component={C1}/>
                            <Route path="/service/Xke/C1" component={C1}/>
                            <Route path="/service/Xke/C2" component={C2}/>
                            <Route path="/service/Xke/C3" component={C3}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform