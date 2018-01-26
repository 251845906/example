import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider , Pagination } from 'antd';
import $ from 'jquery';


class  Trends extends Component{
    constructor(props){
        super(props);
        this.state = {
            Breadcrumb:[{link:"/new/trends",container:"动态新闻"},{start:true,link:"#",container:"内容标题内容标题"},{start:false,link:"",container:""}],
            SituationMenu:'trends',
            detailOk:true,
        };
        this.loadingFun = this.loadingFun.bind(this);
    }
    componentDidMount(){
        this.loadingFun(this.state);
        const title = $('title').html()
        console.log(title)
        window._bd_share_config={
            "common":{
                "bdSnsKey":{},
                "bdText":title,
                "bdMini":"2",
                "bdMiniList":false,
                "bdPic":"http://share.baidu.com/static/web/img/imagesharepreview.jpg?v=fc1dee9c.jpg",
                "bdStyle":"0",
                "bdSize":"16"
            },
            "share":{}
        };
        document.body.appendChild(document.createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)
    }
    loadingFun(i){
        this.props.Breadcrumb(i)
    }
    render(){
        function text(text) {
            // 文字介绍是否超过48个字符 超过截取前48个
            return text.length > 180 ? text.substring(0,180) : text
        }
        return(
            <div className="_newDetails container">
                <h4>北格校区开展“维护核心，见诸行动”主题教育活动</h4>
                <p className="newSource"> 来源：xxxxxxxxx来源<i> </i>作者：xxxxx作者<i> </i>发布时间：2018年02月11日<i> </i>浏览次数:551次 <Link to="#">[返回列表]</Link></p>
                <div className="newTxT">
                    <div className="figure">
                        <img src={require('../../images/detail.png')} alt=""/>
                        <p>北格校区召开“维护核心，见诸行动”主题教育活动</p>
                    </div>
                    <p>本网讯 5月18日，山西工商学院北格校区召开关于“维护核心、见诸行动”的主题教育活动。副院长武士俊，院长助理兼纪检书记李常仁，学生处副处长霍峰，会计学院党总支书记房振金，建筑工程学院党总支书记徐晋、院长牛学仁、计算机信息工程学院党总支书记吴建平以及北格校区全体党员。院长助理兼纪检书记李常仁主持会议。</p>
                    <p> 副院长武士俊就《关于开展维护核心、见诸行动主题教育和推进“两学一做”学习教育常态化制度化的实施方案》进行动员并讲话。他指出，推进“两学一做”学习教育常态化制度化，做好迎接党的十九大召开的思想政治准备，最根本的是不断增强广大党员干部维护核心的思想自觉、政治自觉、行动自觉，最关键的是把维护核心落实到行动上、融入到工作中；同时说明了本次活动的指导思想、总体要求、主要内容、落实举措等。一是增强“四个意识”。副院长武士俊强调，就开展“维护核心、见诸行动”专题教育，省委提出了五个方面的要求：要认真贯彻落实中央关于推进“两学一做”学习教育常态化制度化的部署要求，抓住以实际行动维护核心、立足岗位践行讲话这个关键，在全省各级党组织中扎实开展维护核心、见诸行动主题教育，形成今年推进“两学一做”学习教育常态化制度化的鲜明主题，把学习习近平总书记系列重要讲话精神全面提高到新水平。学校党委根据省委要求并结合我校工作实际成立了维护核心、见诸行动主题教育领导小组，并制定实施方案。二是要落实好“改革决不能落后”的理念和要求，认真贯彻落实习近平总书记系列重要讲话精神和中央、省委工作部署。三是推进“两学一做”学习教育常态化制度化。四是要加强组织领导，在学校党委领导下，增强维护核心的思想自觉，政治自觉，行动自觉要坚决维护以习近平同志为核心的党中央权威，按照学校党委统一安排部署，确保中央和省委政令畅通，确保学校各项工作平稳推进。</p>
                    <p>最后，院长助理兼纪检书记李常仁强调，我们各党组织、各部门要结合实际制定具体的实施方案，进行再动员再部署，紧盯重点任务和时间节点认真抓好落实；不折不扣落实中央、省委省政府和省高校工委及学校党委的安排部署切实推进，以“舍得的精神、豁得出的精神”干事创业、攻坚克难；以部门工作的新局面，学校发展的新成效，迎接党的十九大胜利召开。</p>
                </div>
                <div className="figure">
                    <img src={require('../../images/detail.png')} alt=""/>
                    <p>北格校区召开“维护核心，见诸行动”主题教育活动</p>
                    <p>北格校区召开“维护核心，见诸行动”主题教育活动</p>
                </div>
                <div className="figure">
                    <img src={require('../../images/detail.png')} alt=""/>
                    <p>北格校区召开“维护核心，见诸行动”主题教育活动</p>
                </div>
                <div className="share">
                    <div className="bdsharebuttonbox">
                        <a href="#" className="bds_more" data-cmd="more"> </a>
                        <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"> </a>
                        <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"> </a>
                        <a href="#" className="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"> </a>
                        <a href="#" className="bds_renren" data-cmd="renren" title="分享到人人网"> </a>
                        <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"> </a>
                    </div>
                </div>
                <Divider dashed type="horizontal"/>
            </div>
        )
    }
};
export default Trends