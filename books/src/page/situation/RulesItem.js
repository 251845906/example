import React,{Component} from 'react';
import Ajax from '../../commonality/ajax';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '规章制度',
            LinkToNav: '/situation/rules',
            rulesNav: [true,{Link:'',container:''}],
            SituationMenu: 'rules',
            rulesItem:'',
            Paging:1
        };
        this.ItemLi = this.ItemLi.bind(this);
        this.Ajax = this.Ajax.bind(this);
    }
    componentDidMount(){
        this.Ajax()
    }
    Ajax(){
        const _this = this;
        const Search = window.location.search.substring(1);
        Ajax({
            method:'GET',
            url:'/JSON/item.json',
            async:true,
            string:'',
            success:function(data){
                _this.setState(function (){
                        return {
                            rulesItem:JSON.parse(data)[Search],
                            rulesNav: [true,{Link:'/situation/rules/item?'+Search,container:JSON.parse(data)[Search].title}]
                        }
                    },
                    ()=>{
                        _this.props.Breadcrumb(_this.state)
                    }
                )
            }
        });
    }
    ItemLi(arr,num) {
        // 分页处理
        if(arr.length>=num){
            // 数组的长度是能分多页
            // 判断是否是最后一页
            // 是的话从最后一页初始截取到最后
            // 不是的话截取n个
            return this.state.Paging * num > arr.length ? arr.splice((this.state.Paging-1)*num):arr.splice((this.state.Paging-1)*num,num)

        }else{
            // 不能分多页直接返回数组
            return arr
        }

    }
    PadingChange(i) {
        // 分页跳转
        this.setState({
            Paging:i
        })
    }
    lodingFunction(arr){
        function text(text) {
            // 文字介绍是否超过48个字符 超过截取前48个
            return text.length > 48 ? text.substring(0,48) : text
        }
        // 循环 填入列表和内容
        let ItemLiArr = arr.item.map((i,k)=>{
            return (
                <li className="clearfixr" key={k}>
                    <div className="pubDate">
                        <strong>{i.pubDate.substring(-1,2)}</strong>
                        <p>{i.pubDate.substring(0,4)}-{i.pubDate.substring(4,6)}</p>
                    </div>
                    <div className="introduce">
                        <h5 className="title">{i.title}</h5>
                        <p>{text(i.introduce)}...<Link to={{
                            pathname: '/situation/rules/details',
                            search: '?'+i.id,
                        }}><span>[详细]</span></Link></p>
                    </div>
                </li>
            )
        });
        return ItemLiArr
    }
    render(){
        // 渲染的时候执行了三遍
        // ajax 请求没完成时候  先渲染个空
        if(this.state.rulesItem === ""){
            return <div className="_rulesItem container"> </div>
        }else{
            const ItemLiArr = this.lodingFunction(this.state.rulesItem)
            // 获取有多少条内容
            const listNum = 6;
            // 多少条为一页
            return(
                <div className="_rulesItem container clearfix">
                    <h4>{this.state.rulesItem.title}</h4>
                    <ul className="_Item clearfix">{this.ItemLi(ItemLiArr,listNum)}</ul>
                    <Pagination
                        showQuickJumper
                        defaultCurrent={1}
                        //初始页面
                        total={(Math.ceil(ItemLiArr.length/listNum)+1)*10}
                        //{/*总页数*/}
                        onChange={(i)=>{
                            this.PadingChange(i)
                        }}
                        // 点击回调
                    />
                </div>
            )
        }

    }
}
export default Item