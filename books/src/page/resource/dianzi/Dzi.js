import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import C1 from './container_01'
// import C2 from './container_02'
// import C3 from './container_03'
// import C4 from './container_04'
// import C5 from './container_05'
// import C6 from './container_06'
// import C7 from './container_07'
// import C8 from './container_08'



class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/service/Tguang",container:"阅读推广"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'Tguang',
            detailOk:false,
            JsuoIpt:''
        };
        this.loadingFun = this.loadingFun.bind(this);
        this.JsuoIptChange = this.JsuoIptChange.bind(this);
    }
    componentDidMount(){
        this.loadingFun(this.state)
    }
    loadingFun(i){
        this.props.Breadcrumb(i)
    }
    JsuoIptChange(e){
        this.setState({JsuoIpt:e.target.value});
        console.log(this.state.JsuoIpt)
    }
    render(){
        return(
            <div className="_ServiceDzi container clearfix">
                <div className="Dzi clearfix">
                    <div className="_Menu fl">
                        <div className="Jsuo">
                            <div className="Jsuo_Bti"><p>数据库信息检索</p></div>
                            <input type="text" onChange={this.JsuoIptChange}/>
                            <input type="button" className="iconfont" value="&#xe61f; 检索"/>
                        </div>
                        <ul>
                            <li><Link to="/resource/Dzi/C1">中文数据库</Link></li>
                            <li><Link to="/resource/Dzi/C2">外文数据库</Link></li>
                            <li><Link to="/resource/Dzi/C3">免费数据库</Link></li>
                            <li><Link to="/resource/Dzi/C4">试用数据库</Link></li>
                            <li><Link to="/resource/Dzi/C5">随书光盘</Link></li>
                            <li><Link to="/resource/Dzi/C6">自建数据库</Link></li>
                            <li><Link to="/resource/Dzi/C7">电子期刊</Link></li>
                            <li><Link to="/resource/Dzi/C8">电子图书</Link></li>
                        </ul>
                    </div>
                    <div className="DziContainer fl">
                        <Switch>
                            <Route exact path="/resource/Dzi" component={C1}/>
                            <Route path="/resource/Dzi/C1" component={C1}/>
                            {/*<Route path="/resource/Dzi/C2" component={C2}/>*/}
                            {/*<Route path="/resource/Dzi/C3" component={C3}/>*/}
                            {/*<Route path="/resource/Dzi/C4" component={C4}/>*/}
                            {/*<Route path="/resource/Dzi/C5" component={C5}/>*/}
                            {/*<Route path="/resource/Dzi/C6" component={C6}/>*/}
                            {/*<Route path="/resource/Dzi/C7" component={C7}/>*/}
                            {/*<Route path="/resource/Dzi/C8" component={C8}/>*/}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
};
export default Inform