import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './router';
import 'antd/dist/antd.css';
import './reset.css';
import './icon.css';
import './commonality/top.less';
import './commonality/Footer.less';
// =============================
import './page/css/index.less';   // 首页css
//===============================
import './page/css/stuation.less'; // 本官概括css
// =================================
import './page/css/new.less'; // 新闻资讯css
// =================================    
import './page/css/service.less'; // 本官服务css
// =================================
import './page/css/resource.less'  // 馆藏css



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
