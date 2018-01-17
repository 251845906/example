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
            rulesNav: [true, '馆员与读者行为管理规范'],
            SituationMenu: 'rules',
        }
    }
    componentDidMount(){
        this.props.Breadcrumb(this.state);
        // const _this = this;
        // Ajax({
        //     method:'GET',
        //     url:'/JSON/details.json',
        //     async:true,
        //     string:'',
        //     success:function(data){
        //
        //     }
        // });
    }
    render(){
        return(
            <div className="_rulesItem container clearfix">
                <h4>馆员与读者行为管理规范</h4>
                <ul>
                    <li className="clearfixr">
                        <div className="pubDate fl">
                            <strong>23</strong>
                            <p>2018-05</p>
                        </div>
                        <div className="introduce">
                            <h5 className="title">图书馆工作职责</h5>
                            <p>这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍<span>详细</span></p>
                        </div>
                    </li>
                    <li className="clearfixr">
                        <div className="pubDate fl">
                            <strong>23</strong>
                            <p>2018-05</p>
                        </div>
                        <div className="introduce">
                            <h5 className="title">图书馆工作职责</h5>
                            <p>这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍<span>详细</span></p>
                        </div>
                    </li>
                    <li className="clearfixr">
                        <div className="pubDate fl">
                            <strong>23</strong>
                            <p>2018-05</p>
                        </div>
                        <div className="introduce">
                            <h5 className="title">图书馆工作职责</h5>
                            <p>这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍<span>详细</span></p>
                        </div>
                    </li>
                    <li className="clearfixr">
                        <div className="pubDate fl">
                            <strong>23</strong>
                            <p>2018-05</p>
                        </div>
                        <div className="introduce">
                            <h5 className="title">图书馆工作职责</h5>
                            <p>这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍<span>详细</span></p>
                        </div>
                    </li>
                </ul>
                <Pagination defaultCurrent={5} total={10}/>
            </div>
        )
    }
}
export default Item