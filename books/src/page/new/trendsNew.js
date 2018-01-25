import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider , Pagination } from 'antd';


class  Trends extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/new/trends",container:"动态新闻"},{start:false,link:"",container:""},{start:false,link:"",container:""}],
            SituationMenu:'trends',
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
        function text(text) {
            // 文字介绍是否超过48个字符 超过截取前48个
            return text.length > 180 ? text.substring(0,180) : text
        }
        return(
            <div className="_NewTrends container clearfix">
                <div className="rotNew clearfix">
                    <div className="fl rotImg"><Link to=""><img src="" alt=""/></Link></div>
                    <div className="fl rotArticle">
                        <h5>北格校区开展“维护核心，见诸行动”主题教育活动</h5>
                        <span>2017.05.19</span>
                        <p>{text('本网讯 5月18日，山西工商学院北格校区召开关于“维护核心、见诸行动”的主题教育活动。副院长武士俊，院长助理兼纪检书记李常仁，学生处副处长霍峰，会计学院党总支书记房振金，建筑工程学院党总支书记徐晋、院长牛学仁、计算机信息工程学院党总支书记吴建平以及北格校区全体党员。院长助理兼纪检书记李常仁主持会议。')}...</p>
                        <Link className="rotDetail" to="#">查看详情</Link>
                    </div>
                </div>
                <Divider dashed type="horizontal"/>
                <div className="_TrendsList">
                    <ul className="_Item clearfix">
                        <li className="clearfixr">
                            <div className="pubDate">
                                <strong>23</strong>
                                <p>2018-01</p>
                            </div>
                            <div className="introduce">
                                <h5 className="title">关于2017年报纸、期刊征订的通知</h5>
                                <p>{text("本规范适用于在图书馆内通过无线与有线方式上网的读者和工作人员。" +
                                    "一、不得制作、下载、复制、阅读")}...<Link to="#"><span>[详细]</span></Link></p>
                            </div>
                        </li>
                        <li className="clearfixr">
                            <div className="pubDate">
                                <strong>23</strong>
                                <p>2018-01</p>
                            </div>
                            <div className="introduce">
                                <h5 className="title">关于2017年报纸、期刊征订的通知</h5>
                                <p>{text("本规范适用于在图书馆内通过无线与有线方式上网的读者和工作人员。" +
                                    "一、不得制作、下载、复制、阅读")}...<Link to="#"><span>[详细]</span></Link></p>
                            </div>
                        </li>
                        <li className="clearfixr">
                            <div className="pubDate">
                                <strong>23</strong>
                                <p>2018-01</p>
                            </div>
                            <div className="introduce">
                                <h5 className="title">关于2017年报纸、期刊征订的通知</h5>
                                <p>{text("本规范适用于在图书馆内通过无线与有线方式上网的读者和工作人员。" +
                                    "一、不得制作、下载、复制、阅读")}...<Link to="#"><span>[详细]</span></Link></p>
                            </div>
                        </li>
                        <li className="clearfixr">
                            <div className="pubDate">
                                <strong>23</strong>
                                <p>2018-01</p>
                            </div>
                            <div className="introduce">
                                <h5 className="title">关于2017年报纸、期刊征订的通知</h5>
                                <p>{text("本规范适用于在图书馆内通过无线与有线方式上网的读者和工作人员。" +
                                    "一、不得制作、下载、复制、阅读")}...<Link to="#"><span>[详细]</span></Link></p>
                            </div>
                        </li>
                        <li className="clearfixr">
                            <div className="pubDate">
                                <strong>23</strong>
                                <p>2018-01</p>
                            </div>
                            <div className="introduce">
                                <h5 className="title">关于2017年报纸、期刊征订的通知</h5>
                                <p>{text("本规范适用于在图书馆内通过无线与有线方式上网的读者和工作人员。" +
                                    "一、不得制作、下载、复制、阅读")}...<Link to="#"><span>[详细]</span></Link></p>
                            </div>
                        </li>
                        <li className="clearfixr">
                            <div className="pubDate">
                                <strong>23</strong>
                                <p>2018-01</p>
                            </div>
                            <div className="introduce">
                                <h5 className="title">关于2017年报纸、期刊征订的通知</h5>
                                <p>{text("本规范适用于在图书馆内通过无线与有线方式上网的读者和工作人员。" +
                                    "一、不得制作、下载、复制、阅读")}...<Link to="#"><span>[详细]</span></Link></p>
                            </div>
                        </li>
                    </ul>
                    <Pagination
                        showQuickJumper
                        defaultCurrent={1}
                        //初始页面
                        total={100}
                        //{/*总页数*/}
                        onChange={(i)=>{}}
                        // 点击回调
                    />
                </div>
            </div>
        )
    }
};
export default Trends