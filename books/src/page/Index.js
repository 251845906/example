import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd'
const Index = () => {
    return(
        <div className='box Index'>
            <Banner />
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
                    arrows={true}
                    focusOnSelect ={true}
                >
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../images/index_banner_01.png')} alt=""/></div></div>

                </Carousel>
                <div className="container">
                    <Link to="/"><img src={require('../images/logo.png')} alt="山西工商学院图书馆"/></Link>
                    <Link to="/"><img src={require('../images/logo.png')} alt="山西工商学院图书馆"/></Link>
                    <form action="">
                        <select>
                            <option value="作者">作者</option>
                            <option value="书名">书名</option>
                        </select>
                        <input type="text"/>
                        <input type="button" className="search iconfont" value="&#xe61f;检索"/>
                        <input type="button" className="translate iconfont" value="&#xe620;中文英文"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Index;