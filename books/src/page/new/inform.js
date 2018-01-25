import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';


class  Inform extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/new",container:"通知公告"},{start:false,link:"/new",container:"通知公告"},{start:false,link:"",container:""}],
            SituationMenu:'inform',
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
            return text.length > 48 ? text.substring(0,48) : text
        }
        return(
            <div className="_NewInform container clearfix">
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
        )
    }
};
export default Inform