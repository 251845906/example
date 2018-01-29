import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';


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
                论文提交
            </div>
        )
    }
};
export default Inform