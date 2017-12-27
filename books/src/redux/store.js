import { createStore , applyMiddleware } from 'redux';
import reducer from './roducer';

export default function configureStore(init){
    const store = createStore(reducer,init)
    return(store)
}