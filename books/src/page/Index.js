import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel , Select , Tabs  } from 'antd'
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const Index = () => {
    return(
        <div className='box Index'>
            <Banner />
            <Container />
        </div>
    )

};
class Banner extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="banner">
                <Carousel
                    autoplay={true}
                    autoplaySpeed={3000}
                    effect="fade"
                    speed="500"
                >
                    <div><div className="_banner_bj"><img src={require('../images/index_banner.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner.png')} alt=""/></div></div>
                </Carousel>
                <div className="container">
                    <Link to="/"><img src={require('../images/logo.png')} alt="山西工商学院图书馆"/></Link>
                    <Link to="/"><img src={require('../images/index_banner_text.png')} alt="山西工商学院图书馆"/></Link>
                    <form action="">
                        <Select
                            defaultValue="作家"
                            dropdownClassName="Index_option"
                            getPopupContainer={() => document.getElementsByClassName('banner')[0]}
                        >
                            <Option value="作家">作家</Option>
                            <Option value="书名">书名</Option>
                        </Select>
                        <input type="text" placeholder="输入检索内容"/>
                        <input type="button" className="search iconfont" value="&#xe61f; 检索"/>
                        <input type="button" className="translate iconfont" value="&#xe620; 中文英文"/>
                    </form>
                </div>
            </div>
        )
    }
}
class Container extends Component{
    render(){
        return(
            <div className="Index_container box">
                {/*===============================公告组件*/}
                <div className="notice">
                    <div className="container">
                        <span className="notice_title iconfont">公告 &#xe681;</span>
                        <Carousel
                            autoplay={true}
                            autoplaySpeed={3000}
                            vertical={true}
                            dots={false}
                        >
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                        </Carousel>
                        <Carousel
                            autoplay={true}
                            autoplaySpeed={4000}
                            vertical={true}
                            dots={false}
                        >
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian"> </span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                        </Carousel>
                        <span className="more"><Link to="#">MORE  >></Link></span>
                    </div>
                </div>
                {/*最新动态组件   */}
                <Trends />
                {/*图书馆介绍     about*/}
                <About />
                {/*友情链接*/}

            </div>
        )
    }
}
class Trends extends Component{
    constructor(props){
        super(props);
    }
    handlCarousel(e){
        const siblings = e.target.parentNode.childNodes;
        for(let i = 0;i< siblings.length;i++){
            if (siblings[i].nodeName === '#text'&&/\s/.test(siblings[i].nodeValue)){
                siblings.removeChild(siblings[i]);
            }else{
                siblings[i].setAttribute('data_index',i);
                siblings[i].className = '';
            }
        };
        const index = e.target.getAttribute('data_index');
        e.target.className = 'active';
        this.carousel.goTo(index);
    }
    render(){
        return(
            <div className="trends container clearfix">
                {/*==============================================================*/}
                {/*新闻部分*/}
                <div className="_trendsContainer fl clearfix">
                    <div className="_trendsTittle"> </div>
                    <div className="_trendsLeft fl clearfix">
                        <Carousel dots={false} ref={(i)=>{this.carousel = i;}} speed="300">
                            <div><img src={require('../images/index_new_1.png')} alt=""/></div>
                            <div><img src={require('../images/index_new_1.png')} alt=""/></div>
                            <div><img src={require('../images/index_new_1.png')} alt=""/></div>
                            <div><img src={require('../images/index_new_1.png')} alt=""/></div>
                        </Carousel>
                        <div className="_menu fr">
                            <span className="active" onClick={this.handlCarousel.bind(this)}>1</span>
                            <span onClick={this.handlCarousel.bind(this)}>2</span>
                            <span onClick={this.handlCarousel.bind(this)}>3</span>
                            <span onClick={this.handlCarousel.bind(this)}>4</span>
                        </div>
                    </div>
                    <div className="_trendsRight fl">
                        <p className="_RightTitle"><span>RECENT NEWS</span>最新动态</p>
                        <ul>
                            <li><Link to="#"><span className="dian"> </span>图书馆组织师生参加现场采购图书活动 </Link></li>
                            <li><Link to="#"><span className="dian"> </span>2017年3月图书馆利用情况“排行榜</Link></li>
                            <li><Link to="#"><span className="dian"> </span>五一放假开馆通知 </Link></li>
                            <li><Link to="#"><span className="dian"> </span>研修间预约小助手上线了！！！ </Link></li>
                            <li><Link to="#"><span className="dian"> </span>世界读书日走进山西图书大厦</Link></li>
                            <li><Link to="#"><span className="dian"> </span>四月读书节——我能为图书馆做点事</Link></li>
                        </ul>
                        <Link to="#" className="more fr">更多</Link>
                    </div>
                </div>
                {/*=================================================================*/}
                {/*次级导航*/}
                <ul className="_trendsMenu clearfix fl">
                    <li className="clearfix">
                        <Link to="#">
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="新生入馆教育"/>
                                <figcaption>新生入馆教育</figcaption>
                            </figure>
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="开放时间"/>
                                <figcaption>开放时间</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="clearfix">
                        <Link to="#">
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="就业指导"/>
                                <figcaption>就业指导</figcaption>
                            </figure>
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="馆藏资源"/>
                                <figcaption>馆藏资源</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="clearfix">
                        <Link to="#">
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="科学沙龙"/>
                                <figcaption>科学沙龙</figcaption>
                            </figure>
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="论文提交"/>
                                <figcaption>论文提交</figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="clearfix">
                        <Link to="#">
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="读者荐购"/>
                                <figcaption>读者荐购</figcaption>
                            </figure>
                            <figure>
                                <img src={require('../images/index_category_1.png')} alt="院长信箱"/>
                                <figcaption>院长信箱</figcaption>
                            </figure>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
class About extends Component{
    render(){
        return(
            <div className="container _about clearfix">
                {/*about 左侧*/}
                <div className="about_Left fl clearfix">
                    {/*=======================================*/}
                    {/*tab卡*/}
                    <Tabs
                        defaultActiveKey="1"
                        animated = {true}
                    >
                        <TabPane tab="电子资料" key="1" className="clearfix">
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用 通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <div className="more fl clearfix"><Link to="#">更多</Link></div>
                        </TabPane>
                        <TabPane tab="学术研究" key="2" className="clearfix">
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用 通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <div className="more fl clearfix"><Link to="#">更多</Link></div>
                        </TabPane>
                        <TabPane tab="阅读指导" key="3" className="clearfix">
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用 通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <div className="more fl clearfix"><Link to="#">更多</Link></div>
                        </TabPane>
                        <TabPane tab="规章制度" key="4" className="clearfix">
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"> </span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于产品试用通知</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"> </span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"> </span>关于开通电子资源 </Link></li>
                            </ul>
                            <ul className="fl">
                                <li><Link to="#"><span className="dian"></span>山西工商学院第二届大学生人文</Link></li>
                                <li><Link to="#"><span className="dian"></span>关于产品试用 通知</Link></li>
                                <li><Link to="#"><span className="dian"></span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"></span>关于开通电子资源 </Link></li>
                                <li><Link to="#"><span className="dian"></span>考试题库</Link></li>
                                <li><Link to="#"><span className="dian"></span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"></span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"></span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"></span>山西工商学院大学生人文知识竞赛</Link></li>
                                <li><Link to="#"><span className="dian"></span>关于开通电子资源 </Link></li>
                            </ul>
                            <div className="more fl clearfix"><Link to="#">更多</Link></div>
                        </TabPane>
                    </Tabs>
                </div>
                {/*about 右侧*/}
                <div className="about_Right fl">
                    <p className="_rightTitle">数字资源 <Link to="#" className="more">MORE >></Link></p>
                    <ul>
                        <li><Link to="#"><span className="dian"> </span>SCI—SSCI引文索引库</Link></li>
                        <li><Link to="#"><span className="dian"> </span>Ei Village美国工程索引库 </Link></li>
                        <li><Link to="#"><span className="dian"> </span>爱思唯尔（Elsevier Science Direct） </Link></li>
                        <li><Link to="#"><span className="dian"> </span>PQDT博硕士论文库 </Link></li>
                        <li><Link to="#"><span className="dian"> </span>ASME美国机械工程师学会数据库</Link></li>
                        <li><Link to="#"><span className="dian"> </span>ASCE美国土木工程师学会数据库</Link></li>
                        <li><Link to="#"><span className="dian"> </span>EBSCO全文数据库(学术、商业期刊）</Link></li>
                        <li><Link to="#"><span className="dian"> </span>Ei Village美国工程索引库</Link></li>
                        <li><Link to="#"><span className="dian"> </span>爱思唯尔（Elsevier Science Direct）</Link></li>
                        <li><Link to="#"><span className="dian"> </span>爱思唯尔（Elsevier Science Direct）</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Index;