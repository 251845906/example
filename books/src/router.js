import 'babel-polyfill'
import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Top from './commonality/Top';
import Nav from './commonality/Nav';
import Index from './page/Index';
import Situation from './page/situation/main';
import New from './page/new/main';
import Service from './page/service/main';
import Resource from './page/resource/main';
import Exchange from './page/exchange/main';
import configureStore from './redux/store';
import Footer from './commonality/Footer'

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class Page extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Top />
                        <Nav />
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path="/situation" component={Situation}/>
                            <Route path="/new" component={New}/>
                            <Route path="/service" component={Service}/>
                            <Route path="/resource" component={Resource}/>
                            <Route path="/exchange" component={Exchange}/>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        )
    }
}
export default Page
//situation 公司概况
//new       新闻资讯
//service   本官服务
//resource  馆藏资源
//exchange  学术交流
//
//
//
//