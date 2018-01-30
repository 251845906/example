import React,{ Component } from 'react';
import action from '../redux/action';
import { connect } from 'react-redux';

// import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import Ajax from './ajax';



class Top extends Component{
    constructor(props){
        super(props);
        this.state = {Data:''}
    }
    componentDidMount (){
        const _this = this;
        Ajax({
            method:'GET',
            url:'https://quan.suning.com/getSysTime.do?utm_source=union&utm_medium=14&utm_campaign=3dbb1e1e-dd69-4ebe-b290-cd9069fbe64d',
            async:true,
            string:'',
            success:function(data){
                _this.setState({Data:JSON.parse(data).sysTime1})
            }
        });
    }
    render(){
        const {login} = this.props ;
        return(
            <div className="box header">
                <div className="container clearfix">
                    <div className="fl">
                        <p>山西工商学院图书馆欢迎您！ </p>
                    </div>
                    <div className="fr">
                        <p>
                            <span onClick={this.LoginAndLoginOut.bind(this)}>{login? '注销':'登录'}</span>
                            {this.state.Data.substring(0,4) + '年' + this.state.Data.substring(4,6)+'月'+this.state.Data.substring(6,8)+'日'}
                            </p>
                    </div>
                </div>
            </div>
        )
    }
    LoginAndLoginOut(){
        // if(this.props.login){
            this.props.loginIn(!this.props.login)
        // } else {
        //
        // }
    }
}
const mapStateToProps = (state) => {
    return{
        login:state.login
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginIn: (event) => dispatch(action.Login(event))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Top)