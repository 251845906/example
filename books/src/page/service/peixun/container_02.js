import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

export default () => {
    function text(text) {
        // 文字介绍是否超过48个字符 超过截取前48个
        return text.length > 48 ? text.substring(0,48) : text
    }
    return(
        <div>
            <h5 className="title">借阅制度</h5>
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