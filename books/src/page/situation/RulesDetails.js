import React,{Component} from 'react';
import Ajax from '../../commonality/ajax';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
class Details extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '规章制度',
            LinkToNav: '/situation/rules',
            rulesNav: [true,{Link:'',container:''},{Link:'',container:''}],
            SituationMenu: 'rules',
            rulesTxT:'',
        };
        this.Ajax = this.Ajax.bind(this);
        this.detaultContainer = this.detaultContainer.bind(this);
    }
    componentDidMount(){
        this.Ajax()
    }
    Ajax(){
        const _this = this;
        const Search = window.location.search.substring(1);
        const SearchArr = Search.split('&');
        Ajax({
            method:'GET',
            url:'/JSON/details.json',
            async:true,
            string:'',
            success:function(data){
                _this.setState(function (){
                        return {
                            rulesTxT:JSON.parse(data)[SearchArr[0]][SearchArr[1]],
                            rulesNav: [true,{Link:'/situation/rules/item?'+SearchArr[0],container:JSON.parse(data)[SearchArr[0]].title},{Link:'/situation/rules/details?'+Search,container:JSON.parse(data)[SearchArr[0]][SearchArr[1]].title}]
                        }
                    },
                    ()=>{

                        _this.props.Breadcrumb(_this.state)
                    }
                )
            }
        });
    }

    detaultContainer(){
        // 初始化函数

    }
    render(){

         if(this.state.rulesTxT === ''){
             return false
         }
        return(
            <div className="_rulesDetails container">
                <h4>{this.state.rulesTxT.title}</h4>
                <p className="rulesSource"> 来源：{this.state.rulesTxT.Source}<i> </i>作者：{this.state.rulesTxT.writer}<i> </i>发布时间：{this.state.rulesTxT.pubDate.substring(0,4)}年{this.state.rulesTxT.pubDate.substring(4,6)}月{this.state.rulesTxT.pubDate.substring(6,8)}日<i> </i>浏览次数:{this.state.rulesTxT.browsedNumber}次 <Link to={{pathname:'/situation/rules/item',search:'?'+window.location.search.substring(1).split('&')[0]}}>[返回列表]</Link></p>
                <div className="rulesTxT">
                    {this.state.rulesTxT.container.map((i,k)=>{
                        return (<p key={k}>{i}</p>)
                    })}
                </div>
                <Divider dashed type="horizontal"/>
            </div>
        )
    }
}
export default Details