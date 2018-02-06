import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import C1 from './container_01';
import C2 from './container_02';
import C3 from './container_03';
import C4 from './container_04';
import C5 from './container_05';
import C6 from './container_06';
import C7 from './container_07';


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service",container:"入馆指南"},{start:true,link:"/service/Jyue",container:"借阅服务"},{start:false,link:"",container:""}],
            SituationMenu:'Jyue',
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
            <div className="_ServiceJyue container clearfix">
                <div className="Jyue clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Jyue/C1">借阅制度</Link></li>
                        <li><Link to="/service/Jyue/C2">证件办理</Link></li>
                        <li><Link to="/service/Jyue/C3">预约</Link></li>
                        <li><Link to="/service/Jyue/C4">预约催还</Link></li>
                        <li><Link to="/service/Jyue/C5">借阅状态</Link></li>
                        <li><Link to="/service/Jyue/C6">续借</Link></li>
                        <li><Link to="/service/Jyue/C7">名人藏书馆</Link></li>
                    </ul>
                    <div className="JyueContainer fl">
                        <Switch>
                            <Route exact path="/service/Jyue" component={C1}/>
                            <Route path="/service/Jyue/C1" component={C1}/>
                            <Route path="/service/Jyue/C2" component={C2}/>
                            <Route path="/service/Jyue/C3" component={C3}/>
                            <Route path="/service/Jyue/C4" component={C4}/>
                            <Route path="/service/Jyue/C5" component={C5}/>
                            <Route path="/service/Jyue/C6" component={C6}/>
                            <Route path="/service/Jyue/C7" component={C7}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform