import React,{ Component } from 'react';
import { Link } from 'react-router-dom';



class Rules extends Component{
    constructor({ match },props) {
        super(props);
        this.match = match;
        this.state = {
            BreadcrumbNav: '规章制度',
            LinkToNav: '/situation/rules',
            rulesNav: [false, ''],
            SituationMenu: 'rules',
        }
    }
    componentDidMount(){
        this.props.Breadcrumb(this.state);
    }
    render(){
        return(
            <div className="_rules container clearfix">
                <strong>前言：图书馆根据读者的需求、设施设备的更新以及服务功能的转变，在广泛征求师生意见的基础上，制定完善图书馆的各项规章制度。现予以公布，望周知。各项规章制度解释权归本馆所有，如有建议，可发邮件至：</strong>
                <ul className="_rulesList clearfix">
                    <li>
                        <div className="ItemTitle clearfix"><h4>图书与电子资源管理制度</h4><span><Link to="#">更多<sub>+</sub></Link></span></div>
                        <Link to="#"><p><span className="dian"> </span>管际互借证使用规定</p></Link>
                        <Link to="#"><p><span className="dian"> </span>书刊赔偿制度</p></Link>
                        <Link to="#"><p><span className="dian"> </span>报退制度</p></Link>
                        <Link to="#"><p><span className="dian"> </span>假期内到期图书相关规定</p></Link>
                        <Link to="#"><p><span className="dian"> </span>接受捐赠图书相关规定（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>续借制度</p></Link>
                    </li>
                    <li>
                        <div className="ItemTitle clearfix"><h4>设施与设备使用管理制度</h4><span><Link to="#">更多<sub>+</sub></Link></span></div>
                        <Link to="#"><p><span className="dian"> </span>电子阅览室管理制度（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>图书馆参观接待制度（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>自习区使用管理了方法（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>图书馆影像采集须知（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>存包柜使用须知（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>图书馆展览布置的相关规定（试行）</p></Link>
                    </li>
                    <li>
                        <div className="ItemTitle clearfix"><h4>馆员与读者行为管理规范</h4><span><Link to="#">更多<sub>+</sub></Link></span></div>
                        <Link to="#"><p><span className="dian"> </span>网络行为规范（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>读者入馆注意事项（试行）</p></Link>
                        <Link to="#"><p><span className="dian"> </span>图书馆工作职责</p></Link>
                    </li>
                    <li>
                        <div className="ItemTitle clearfix"><h4>公共安全教育与管理规定</h4><span><Link to="#">更多<sub>+</sub></Link></span></div>
                        <Link to="#"><p><span className="dian"> </span>读者消防安全须知</p></Link>
                        <Link to="#"><p><span className="dian"> </span>图书馆保安工作规范(试行)</p></Link>
                        <Link to="#"><p><span className="dian"> </span>图书馆保卫制度(试行)</p></Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Rules