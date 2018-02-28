import React,{ Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import ResourceBanner from './ResourceBanner';
import Dzi from './dianzi/Dzi'
import Zzhi from './zhizhi/Zzhi'


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
                        <Breadcrumb.Item><Link to="/service">馆藏资源</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={this.state.Breadcrumb[0].link}>{this.state.Breadcrumb[0].container}</Link></Breadcrumb.Item>
                        {this.state.Breadcrumb[1].start && <Breadcrumb.Item><Link to={this.state.Breadcrumb[1].link}>{this.state.Breadcrumb[1].container}</Link></Breadcrumb.Item>}
                        {this.state.Breadcrumb[2].start && <Breadcrumb.Item>  <Link to={this.state.Breadcrumb[2].link}> {this.state.Breadcrumb[2].container}</Link></Breadcrumb.Item>}
                    </Breadcrumb>
                </div>
                { this.state.detailOk ||
                <div className="resourceMenu container">
                    <h3>资源  /<span> RESOURCES</span></h3>
                    <ul>
                        <li className={this.state.SituationMenu === 'Dzi' ? 'active':''}><span className="iconfont">&#xe61a; </span><Link to="/resource">电子资源</Link> </li>
                        <li className={this.state.SituationMenu === 'Zzhi' ? 'active':''}><span className="iconfont">&#xe6cf; </span><Link to="/resource/Zzhi">纸质资源</Link> </li>
                    </ul>
                </div>
                }
                <Switch>
                    <Route exact path="/resource" render={()=><Dzi Breadcrumb={this.handLoading}/>}/>
                    <Route path="/resource/Dzi" render={()=><Dzi Breadcrumb={this.handLoading}/>}/>
                    <Route path="/resource/Zzhi" render={()=><Zzhi Breadcrumb={this.handLoading}/>}/>
                </Switch>
            </div>
        )
    }
};

export default Service;

// Inform   通知公告
// Trends   动态新闻
// Detail   新闻详情