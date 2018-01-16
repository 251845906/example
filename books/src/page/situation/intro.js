import React,{ Component } from 'react';



class Intro extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '本馆介绍',
            LinkToNav: '/situation/intro',
            rulesNav: [false, ''],
            SituationMenu: 'intro',
        }
    }
    componentDidMount(){
        this.props.Breadcrumb(this.state);
    }
    render(){
        return(
            <div className="_intro container clearfix">
                <div className="_introImg fl">
                    <img src={require('../../images/Situation_intro.png')} alt="本官简介"/>
                </div>
                <div className="_introText fl">
                    <p>山西工商学院图书馆创建于2003年，建筑面积9200平方米。馆藏文献中以社会科学门类图书为主，形成了以收藏工商管理类专业学科文献为重点，　适当入藏相关学科理论著作和一般性图书的馆藏文献信息资源体系。经过九年的基本建设，围绕学院各学科专业的发展，专业图书报刊占馆藏量的80%，其它类图书占20%。截止2012年底馆藏纸质文献共计74.62万册；2013年订购报纸48种，期刊311种；同时增加了 “万方数据知识服务平台系统”，该系统收录了中国重要期刊全文6700余种，自80年代以来收录我国各学科领域的学位论文，目前已建成国内数量最多、专业涵盖面最广、收集单位最为权威的学位论文全文数据库。</p>
                </div>
            </div>
        )
    }
}

export default Intro