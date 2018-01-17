import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Ajax from '../../commonality/ajax';

class Rules extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '规章制度',
            LinkToNav: '/situation/rules',
            rulesNav: [false, ''],
            SituationMenu: 'rules',
            ItemList:''
        }
    }
    componentDidMount(){
        this.props.Breadcrumb(this.state);
        const _this = this;
        Ajax({
            method:'GET',
            url:'/JSON/rulesList.json',
            async:true,
            string:'',
            success:function(data){
                const ItemListArr = [];
                const Data = JSON.parse(data);
                for(let i in Data){
                    ItemListArr.push(Data[i])
                }
                _this.setState({ItemList:ItemListArr})
            }
        });
    }
    render(){
        // 直接渲染有卡顿现象
        if(this.state.ItemList === ""){
            return(
                <div className="_rules container clearfix">
                </div>
            )
        }else{
            let ItemLi = this.state.ItemList.map((i,a) => {
                let List = i.list.map((x,b) => {
                    return(
                        <Link
                            to={{
                                pathname: '/situation/rules/details',
                                search: '?'+x.id,
                            }}
                            key={b}>
                            <p><span className="dian"> </span>{x.title}</p>
                        </Link>
                    )
                });
                return(
                    <li key={a}>
                        <div className="ItemTitle clearfix" ><h4>{i.title}</h4><span><Link
                            to={{
                                pathname: '/situation/rules/item',
                                search: '?'+i.id,
                            }}>更多<sub>+</sub></Link></span></div>
                        {List}
                    </li>
                )
            });
            return(
                <div className="_rules container clearfix">
                    <strong>前言：图书馆根据读者的需求、设施设备的更新以及服务功能的转变，在广泛征求师生意见的基础上，制定完善图书馆的各项规章制度。现予以公布，望周知。各项规章制度解释权归本馆所有，如有建议，可发邮件至：</strong>
                    <ul className="_rulesList clearfix">
                        {ItemLi}
                    </ul>
                </div>
            )
        }
    }
}

export default Rules