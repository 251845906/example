import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './css/index.css';

const Index = () => {
    return(
        <div>
            <Banner />
        </div>
    )

};
class Banner extends Component{
    render(){
        return(
            <div className="box">
                <div className="banner"> </div>
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