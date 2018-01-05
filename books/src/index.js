import React from 'react';
import ReactDOM from 'react-dom';
import Page from './router';
import 'antd/dist/antd.css';
import './reset.css';
import './icon.css';
import './commonality/top.css';
// =============================
import './page/css/index.css';   // 首页css
import './page/css/carousel.css' //banner CSS
import './page/css/select.css' //select CSS
//===============================
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
