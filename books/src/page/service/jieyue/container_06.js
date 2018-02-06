import React,{ Component } from 'react';

export default () => {
    return(
        <div>
            <h5 className="title">续借</h5>
            <p>续借</p>
            <p> 续借服务对所有本校读者开放。<br/>
                续借周期：图书在到期之前可续借2次，续期为自续借之日起一个借期。医科馆外借图书，在没有读者预约的前提下，可无限次续借。<br/>不予续借的情况：有逾期图书者、一卡通已挂失者 ；已被其他读者预约的图书也不能再续借。（注意：为了最大化的利用好您的续借时间，请您最好在临近还书日期前续借，不要太早。）<br/>
            </p>
            <p>续借流程：
                <img src={require('../../../images/Jyue01.png')} alt=""/>
            </p>
        </div>
    )
}