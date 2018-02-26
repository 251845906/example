import React,{ Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import ResourceBanner from './ResourceBanner';


class Service extends Component {
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/resource",container:"馆藏"},{start:false,link:"",container:"开馆时间"},{start:false,link:"",container:""}],
            SituationMenu:'resource',
            detailOk:false,
        };
        this.handLoading = this.handLoading.bind(this)
    }
    handLoading(obj){
        this.setState(obj)
    }
    render(){
        console.log(this.state.SituationMenu)
        return(
            <div className="box Service">
                <ResourceBanner />
                <div className="_breadcrumb">
                    <Breadcrumb separator=">>" className="container">
                        <Breadcrumb.Item><span className="iconfont">&#xe603;</span>当前位置：<Link to="/">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/service">本馆服务</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={this.state.Breadcrumb[0].link}>{this.state.Breadcrumb[0].container}</Link></Breadcrumb.Item>
                        {this.state.Breadcrumb[1].start && <Breadcrumb.Item><Link to={this.state.Breadcrumb[1].link}>{this.state.Breadcrumb[1].container}</Link></Breadcrumb.Item>}
                        {this.state.Breadcrumb[2].start && <Breadcrumb.Item>  <Link to={this.state.Breadcrumb[2].link}> {this.state.Breadcrumb[2].container}</Link></Breadcrumb.Item>}
                    </Breadcrumb>
                </div>
                { this.state.detailOk ||
                <div className="ServiceMenu container">
                    <h3>服务  / <span>service</span></h3>
                    <ul>
                        <li className={this.state.SituationMenu === 'Znan' ? 'active':''}><span className="iconfont">&#xe61a; </span><Link to="/service">入馆指南</Link> </li>
                        <li className={this.state.SituationMenu === 'Jyue' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/service/Jyue">借阅服务</Link> </li>
                        <li className={this.state.SituationMenu === 'Pxun' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/service/Pxun">讲座培训</Link> </li>
                        <li className={this.state.SituationMenu === 'Xke' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/service/Xke">学科服务</Link> </li>
                        <li className={this.state.SituationMenu === 'Lwen' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/service/Lwen">论文提交</Link> </li>
                        <li className={this.state.SituationMenu === 'Tguang' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/service/Tguang">阅读推广</Link> </li>
                        <li className={this.state.SituationMenu === 'Vpn' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/service/Vpn">VPN服务</Link> </li>
                    </ul>
                </div>
                }
                <Switch>
                    <Route exact path="/service" render={()=><Znan Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Znan" render={()=><Znan Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Jyue" render={()=><Jyue Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Pxun" render={()=><Pxun Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Xke" render={()=><Xke Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Lwen" render={()=><Lwen Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Tguang" render={()=><Tguang Breadcrumb={this.handLoading}/>}/>
                    <Route path="/service/Vpn" render={()=><Vpn Breadcrumb={this.handLoading}/>}/>
                </Switch>
            </div>
        )
    }
};

export default Service;

// Inform   通知公告
// Trends   动态新闻
// Detail   新闻详情