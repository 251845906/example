import React,{ Component } from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import text from '../../../text';

class Container extends Component{
    render(){
        return(
            <div>
                <div className="JsuoTJ">
                    <div className="left fl">按字母:</div>
                    <div className="right fl">
                        <a href="">A</a>
                        <a href="">B</a>
                        <a href="">C</a>
                        <a href="">D</a>
                        <a href="">E</a>
                        <a href="">F</a>
                        <a href="">G</a>
                        <a href="">H</a>
                        <a href="">I</a>
                        <a href="">J</a>
                        <a href="">K</a>
                        <a href="">L</a>
                        <a href="">M</a>
                        <a href="">N</a>
                        <a href="">O</a>
                        <a href="">P</a>
                        <a href="">Q</a>
                        <a href="">R</a>
                        <a href="">S</a>
                        <a href="">T</a>
                        <a href="">U</a>
                        <a href="">V</a>
                        <a href="">W</a>
                        <a href="">X</a>
                        <a href="">Y</a>
                        <a href="">Z</a>
                    </div>
                    <div className="left fl">按学科:</div>
                    <div className="right fl">
                        <a href="">社会科学</a>
                        <a href="">哲学管理学</a>
                        <a href="">政治学</a>
                        <a href="">法学</a>
                        <a href="">经济学</a>
                        <a href="">教育/文化</a>
                        <a href="">图书档案学</a>
                        <a href="">新闻传播</a>
                        <a href="">语言文学</a>
                        <a href="">艺术</a>
                        <a href="">历史学</a>
                        <a href="">自然</a>
                        <a href="">科学</a>
                        <a href="">数学化学</a>
                        <a href="">生物学</a>
                        <a href="">医学</a>
                        <a href="">农业</a>
                        <a href="">工业技术</a>
                        <a href="">交通运输</a>
                        <a href="">航空/航天</a>
                        <a href="">环境科学</a>
                        <a href="">综合及工具类</a>
                        <a href="">地球科学/天文学</a>
                        <a href="">物理学/力学</a>
                        <a href="">计算机/网络</a>
                    </div>
                    <div className="left fl">按语种:</div>
                    <div className="right fl">
                        <a href="">中文</a>
                        <a href="">英文</a>
                        <a href="">德文</a>
                        <a href="">阿拉伯语</a>
                        <a href="">多语种</a>
                    </div>
                </div>
                <h5 className="title">电子期刊</h5>
                <ul className="_Item clearfix">
                    <li className="clearfixr" >
                        <div className="pubDate">
                            <strong>23</strong>
                            <p>2017-5</p>
                        </div>
                        <div className="introduce">
                            <h5 className="sub_title">专题一：Microsoft Excel使用技巧</h5>
                            <p>{text('图书馆拥有丰富的馆藏文献资源，其中电子资源是其重要的组成部分。')}...<Link to="#"><span>[详细]</span></Link></p>
                        </div>
                    </li>
                    <li className="clearfixr" >
                        <div className="pubDate">
                            <strong>23</strong>
                            <p>2017-5</p>
                        </div>
                        <div className="introduce">
                            <h5 className="sub_title">专题一：Microsoft Excel使用技巧</h5>
                            <p>{text('图书馆拥有丰富的馆藏文献资源，其中电子资源是其重要的组成部分。')}...<Link to="#"><span>[详细]</span></Link></p>
                        </div>
                    </li>
                    <li className="clearfixr" >
                        <div className="pubDate">
                            <strong>23</strong>
                            <p>2017-5</p>
                        </div>
                        <div className="introduce">
                            <h5 className="sub_title">专题一：Microsoft Excel使用技巧</h5>
                            <p>{text('图书馆拥有丰富的馆藏文献资源，其中电子资源是其重要的组成部分。')}...<Link to="#"><span>[详细]</span></Link></p>
                        </div>
                    </li>
                    <li className="clearfixr" >
                        <div className="pubDate">
                            <strong>23</strong>
                            <p>2017-5</p>
                        </div>
                        <div className="introduce">
                            <h5 className="sub_title">专题一：Microsoft Excel使用技巧</h5>
                            <p>{text('图书馆拥有丰富的馆藏文献资源，其中电子资源是其重要的组成部分。')}...<Link to="#"><span>[详细]</span></Link></p>
                        </div>
                    </li>
                    <li className="clearfixr" >
                        <div className="pubDate">
                            <strong>23</strong>
                            <p>2017-5</p>
                        </div>
                        <div className="introduce">
                            <h5 className="sub_title">专题一：Microsoft Excel使用技巧</h5>
                            <p>{text('图书馆拥有丰富的馆藏文献资源，其中电子资源是其重要的组成部分。')}...<Link to="#"><span>[详细]</span></Link></p>
                        </div>
                    </li>
                </ul>
                <Pagination
                    showQuickJumper
                    defaultCurrent={1}
                    //初始页面
                    total={100}
                    //{/*总页数*/}
                    onChange={(i)=>{
                    }}
                    // 点击回调
                />
            </div>
        )
    }
}
export default Container