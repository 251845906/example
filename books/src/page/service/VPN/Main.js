import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import C1 from './container_01'
// import C2 from './container_02'


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service/Vpn",container:"VPN服务"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'Vpn',
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
            <div className="_ServiceVpn container clearfix">
                <div className="Vpn clearfix">
                    <ul className="_Menu fl">
                        <li><Link to="/service/Vpn/C1">VPN服务</Link></li>
                        {/*<li><Link to="/service/Vpn/C2">借阅排行榜</Link></li>*/}
                    </ul>
                    <div className="VpnContainer fl">
                        <Switch>
                            <Route exact path="/service/Vpn" component={C1}/>
                            <Route path="/service/Vpn/C1" component={C1}/>
                            {/*<Route path="/service/Tguang/C2" component={C2}/>*/}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform