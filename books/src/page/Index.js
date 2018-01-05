import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel , Select } from 'antd'

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
            </div>
        )
    }
}

export default Index;