import React,{ Component } from 'react';

export default () => {
    return(
        <div className="OpeningTimer">
            <h5 className="title">开馆时间</h5>
            <p>本馆开馆时间：</p>
            <pre>夏季： 上午    08 : 00  ——  11 : 50        下午    14 : 00  —— 18 : 10</pre>
            <pre>冬季： 上午    08 : 00  ——  11 : 50        下午    14 : 00  —— 17 : 40</pre>
        </div>
    )
}