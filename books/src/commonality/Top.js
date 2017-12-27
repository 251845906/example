import React,{ Component } from 'react';
import action from '../redux/action';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
// import 'top.less';

class Top extends Component{
    render(){
        const {login} = this.props ;
        return(
            <div onClick={this.LoginAndLoginOut.bind(this)}> login</div>
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