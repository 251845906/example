import React,{ Compoment } from 'react';
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';


const Situation = () => {
    return(
        <Router>
            <div>
                <Banner />
                <Switch>
                    <Route exact path={`${this.match.url}/jj`} component={Index}/>
                    <Route path={`${this.match.url}/hj`} component={Situation}/>
                    <Route path={`${this.match.url}/gz`} component={New}/>
                    <Route path={`${this.match.url}/jg`} component={Service}/>
                </Switch>

            </div>
        </Router>
    )
};

export default Situation;