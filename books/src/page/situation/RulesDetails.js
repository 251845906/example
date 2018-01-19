import React,{Component} from 'react';
import Ajax from '../../commonality/ajax';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { ShareButtons } from 'react-share-buttons';

class Details extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '规章制度',
            LinkToNav: '/situation/rules',
            rulesNav: [true,{Link:'',container:''}],
            SituationMenu: 'rules',
            rulesTxT:'',
            Paging:1
        };
        this.Ajax = this.Ajax.bind(this)
    }
    componentDidMount(){
        this.Ajax()
        const script = document.createElement('script');
        script.src = "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=408841";
        document.body.appendChild(script);

    }
    Ajax(){
        const _this = this;
        const Search = window.location.search.substring(1);
        Ajax({
            method:'GET',
            url:'/JSON/details.json',
            async:true,
            string:'',
            success:function(data){
                console.log(data)
                _this.setState(function (){
                        return {
                            // rulesItem:JSON.parse(data)[Search],
                            // rulesNav: [true,{Link:'/situation/rules/item?'+Search,container:JSON.parse(data)[Search].title}]
                        }
                    },
                    ()=>{
                        _this.props.Breadcrumb(_this.state)
                    }
                )
            }
        });
    }
    render(){
        return(
            <div className="_rulesDetails container">
                <h4>图书馆工作职责</h4>
                <p className="rulesSource"> 来源：xxxx<i> </i>作者：xxxxx<i> </i>发布时间：2017年05月23日<i> </i>浏览次数:118次 <Link to="#">[返回列表]</Link></p>
                <div className="rulesTxT">
                    <p>大学图书馆是学校的信息资源中心，是为人才培养和科学研究服务的学术性机构。图书馆的建设和发展是学校总体水平的重要标志。图书馆全面贯彻、落实《普通高等学校图</p>
                    <p>书馆规程（2014修订）》，努力将图书馆建成服务本校、面向社会的信息资源中心之一。其职责是：</p>
                    <p>一、图书馆必须贯彻国家的教育方针，履行信息服务、文化传承和素质教育职能，为培养优秀人才，发展教育科学文化事业，建设社会主义物质文明和精神文明服务。</p>
                    <p>二、坚持发展、开放、共享的理念，根据学校教学、科研及学科发展需要，积极采用现代技术，不断深化服务内涵，拓展服务方式和手段，提高业务工作质量和服务水平，热情、快捷、方便地服务于读者。</p>
                    <p>三、建设适应学校发展需要的信息资源体系，对信息资源进行组织、管理、保存和维护，为学校的人才培养和科学研究提供切实有效的信息保障。</p>
                    <p>大学图书馆是学校的信息资源中心，是为人才培养和科学研究服务的学术性机构。图书馆的建设和发展是学校总体水平的重要标志。图书馆全面贯彻、落实《普通高等学校图</p>
                    <p>书馆规程（2014修订）》，努力将图书馆建成服务本校、面向社会的信息资源中心之一。其职责是：</p>
                    <p>一、图书馆必须贯彻国家的教育方针，履行信息服务、文化传承和素质教育职能，为培养优秀人才，发展教育科学文化事业，建设社会主义物质文明和精神文明服务。</p>
                    <p>二、坚持发展、开放、共享的理念，根据学校教学、科研及学科发展需要，积极采用现代技术，不断深化服务内涵，拓展服务方式和手段，提高业务工作质量和服务水平，热情、快捷、方便地服务于读者。</p>
                    <p>三、建设适应学校发展需要的信息资源体系，对信息资源进行组织、管理、保存和维护，为学校的人才培养和科学研究提供切实有效的信息保障。</p>
                </div>
                <Divider dashed type="horizontal"/>
                <div className="prevDetail"><Link to="#">上一篇：没有了！</Link></div>
                <div className="nextDetail"><Link to="#">下一篇：读者入馆注意事项</Link></div>
            </div>
        )
    }
}
export default Details