import React from 'react';
import ReactDOM from 'react-dom';
import Page from './router';
import 'antd/dist/antd.css';
import './reset.css';
import './icon.css';
import './commonality/top.css';
import './commonality/Footer.css';
// =============================
import './page/css/index.css';   // 首页css
//===============================
import './page/css/stuation.css'; // 本官概括css
// =================================
import './page/css/new.css'; // 本官概括css
// =================================

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
