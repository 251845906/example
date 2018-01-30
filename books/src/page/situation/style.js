import React,{ Component } from 'react';
import { Carousel } from 'antd';

class Style extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '馆舍风貌',
            LinkToNav: '/situation/style',
            rulesNav: [false, ''],
            SituationMenu: 'style',
        }
    }
    componentDidMount(){
        this.props.Breadcrumb(this.state);
    }
    render(){
        return(
            <div className="_style container">
                <Carousel
                    infinite={true}
                    slidesToShow="3"
                    arrows={true}
                    dots={false}
                >
                    <div>
                        <span>
                            <img src={require('../../images/Situation_style01.png')} alt=""/>
                        </span>
                        <p>主楼外观掠影</p>
                    </div>
                    <div>
                        <span>
                            <img src={require('../../images/Situation_style02.png')} alt=""/>
                        </span>
                        <p>主楼外观掠影</p>
                    </div>
                    <div>
                        <span>
                            <img src={require('../../images/Situation_style03.png')} alt=""/>
                        </span>
                        <p>大厅掠影</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default Style