import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

class NavBanner extends Component{
    render(){
        return(
            <div className="New_banner">
                <Carousel
                    autoplay={true}
                    autoplaySpeed={3000}
                    effect="fade"
                    speed="500"
                    dots={false}
                >
                    <div><div className="_banner_bj"><img src={require('../../images/new_banner.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../../images/new_banner.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../../images/new_banner.png')} alt=""/></div></div>
                    <div><div className="_banner_bj"><img src={require('../../images/new_banner.png')} alt=""/></div></div>
                </Carousel>
                <div className="container">
                    <Link to="#"><img src={require('../../images/logo.png')} alt="山西工商学院图书馆"/></Link>
                    <Link to="#"><img src={require('../../images/index_banner_text.png')} alt="山西工商学院图书馆"/></Link>
                </div>
            </div>
        )
    }
}
export default NavBanner