import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel , Select , Slider  } from 'antd'

const Option = Select.Option;
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
        this.state = {
            BannerNum:0
        }
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
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                </Carousel>
                <div className="container">
                    <Link to="/"><img src={require('../images/logo.png')} alt="山西工商学院图书馆"/></Link>
                    <Link to="/"><img src={require('../images/index_banner_text.png')} alt="山西工商学院图书馆"/></Link>
                    <form action="">
                        <Select
                            defaultValue="作家"
                            style={{
                                width: '108px',
                                height:'40px',
                                marginRight:'2px'
                            }}

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
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                        </Carousel>
                        <Carousel
                            autoplay={true}
                            autoplaySpeed={4000}
                            vertical={true}
                            dots={false}
                        >
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                            <div><p><span className="dian">·</span><Link to="#">关于2017年期刊、报纸征订的通知。</Link></p></div>
                        </Carousel>
                        <span className="more"><Link to="#">MORE  >></Link></span>
                    </div>
                </div>
                {/*最新动态组件   */}
                <Trends />
            </div>
        )
    }
}
class Trends extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu:0
        }
    }
    handlCarousel(e){
        const siblings = e.target.parentNode.childNodes;
        for (let i=0;i<siblings.length;i++){
            siblings[i].className = '';
        }
        e.target.className = 'active';
        this.carousel.goTo(parseInt(e.target.innerHTML)-1);
    }
    render(){
        return(
            <div className="trends container clearfix">
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
                            <span className={this.state.menu === 0? 'active':''} onClick={this.handlCarousel.bind(this)}>1</span>
                            <span className={this.state.menu === 1? 'active':''} onClick={this.handlCarousel.bind(this)}>2</span>
                            <span className={this.state.menu === 2? 'active':''} onClick={this.handlCarousel.bind(this)}>3</span>
                            <span className={this.state.menu === 3? 'active':''} onClick={this.handlCarousel.bind(this)}>4</span>
                        </div>
                    </div>
                    <div className="_trendsRight">
                        <p className="_RightTitle"><span>recent news</span>最新动态</p>
                        <ul>
                            <li><Link to="#"><span className="dian">·</span>图书馆组织师生参加现场采购图书活动 </Link></li>
                            <li><Link to="#"><span className="dian">·</span>2017年3月图书馆利用情况“排行榜</Link></li>
                            <li><Link to="#"><span className="dian">·</span>五一放假开馆通知 </Link></li>
                            <li><Link to="#"><span className="dian">·</span>研修间预约小助手上线了！！！ </Link></li>
                            <li><Link to="#"><span className="dian">·</span>世界读书日走进山西图书大厦</Link></li>
                            <li><Link to="#"><span className="dian">·</span>四月读书节——我能为图书馆做点事</Link></li>
                        </ul>
                        <Link to="#">更多</Link>
                    </div>
                </div>
                <ul className="_trendsMenu clearfix fl">
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
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

export default Index;