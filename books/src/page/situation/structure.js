import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class Structure extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BreadcrumbNav: '组织机构',
            LinkToNav: '/situation/structure',
            rulesNav: [false, ''],
            SituationMenu: 'structure',
        }
    }
    componentDidMount(){
        this.props.Breadcrumb(this.state);
    }
    render(){
        return(
            <div className="_structure container clearfix">
                <div className="_structureImg"> </div>
                <div className="_structureLeader">
                    <h4>现任领导</h4>
                    <div>
                        <p>馆长：</p>
                        <p>党委书记：</p>
                        <p>副馆长：</p>
                        <p>党委副书记：</p>
                        <p>工会主席：</p>
                    </div>
                </div>
                <div className="_structureCase">
                    <h4>部门概况</h4>
                    <div className="_table">
                        <table  border="1">
                            <thead>
                            <tr>
                                <th>部门名称</th>
                                <th>主要职责</th>
                                <th>业务范围</th>
                                <th>部门负责人与联系方式</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>资源建设中心</td>
                                <td>承担图书馆文献资源的<br/>采访、组织与揭示业务。</td>
                                <td>1. 根据学校学科建设和教学科研的需要采集各种文献；收集开放获取的网络文献资源；对电子资源进行管理；与港、澳、台地区和国外的大学、科研机构进行书刊交换，处理文献受赠等事务。<br/>2. 负责图书馆文献资源（含图书、期刊、学位论文、电子资源、缩微文献等非书资料等）的组织、揭示、目录维护、质量控制等；负责实体文献的技术加工等；负责学位论文、期刊的装订。<br/>3. 开展与上述内容相关的文献资源建设理论、技术、方法的研究工作；参与CALIS、CASHL相关项目等。<br/>4. 回溯编目与数据清理：组织落实总、分馆文献的回溯编目，清理回溯和清点过程中发现的数据垃圾等。
                                </td>
                                <td>
                                    主  任：<br/>电  话：<br/>地  址：<br/><br/>副主任：<br/>电  话：<br/>地  址：<br/><span className="iconfont">&#xe642;</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table  border="1">
                            <thead>
                            <tr>
                                <th>部门名称</th>
                                <th>主要职责</th>
                                <th>业务范围</th>
                                <th>部门负责人与联系方式</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>资源建设中心</td>
                                <td>承担图书馆文献资源的<br/>采访、组织与揭示业务。</td>
                                <td>1. 根据学校学科建设和教学科研的需要采集各种文献；收集开放获取的网络文献资源；对电子资源进行管理；与港、澳、台地区和国外的大学、科研机构进行书刊交换，处理文献受赠等事务。<br/>2. 负责图书馆文献资源（含图书、期刊、学位论文、电子资源、缩微文献等非书资料等）的组织、揭示、目录维护、质量控制等；负责实体文献的技术加工等；负责学位论文、期刊的装订。<br/>3. 开展与上述内容相关的文献资源建设理论、技术、方法的研究工作；参与CALIS、CASHL相关项目等。<br/>4. 回溯编目与数据清理：组织落实总、分馆文献的回溯编目，清理回溯和清点过程中发现的数据垃圾等。
                                </td>
                                <td>
                                    主  任：<br/>电  话：<br/>地  址：<br/><br/>副主任：<br/>电  话：<br/>地  址：<br/><span className="iconfont">&#xe642;</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table  border="1">
                            <thead>
                            <tr>
                                <th>部门名称</th>
                                <th>主要职责</th>
                                <th>业务范围</th>
                                <th>部门负责人与联系方式</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>资源建设中心</td>
                                <td>承担图书馆文献资源的<br/>采访、组织与揭示业务。</td>
                                <td>1. 根据学校学科建设和教学科研的需要采集各种文献；收集开放获取的网络文献资源；对电子资源进行管理；与港、澳、台地区和国外的大学、科研机构进行书刊交换，处理文献受赠等事务。<br/>2. 负责图书馆文献资源（含图书、期刊、学位论文、电子资源、缩微文献等非书资料等）的组织、揭示、目录维护、质量控制等；负责实体文献的技术加工等；负责学位论文、期刊的装订。<br/>3. 开展与上述内容相关的文献资源建设理论、技术、方法的研究工作；参与CALIS、CASHL相关项目等。<br/>4. 回溯编目与数据清理：组织落实总、分馆文献的回溯编目，清理回溯和清点过程中发现的数据垃圾等。
                                </td>
                                <td>
                                    主  任：<br/>电  话：<br/>地  址：<br/><br/>副主任：<br/>电  话：<br/>地  址：<br/><span className="iconfont">&#xe642;</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table  border="1">
                            <thead>
                            <tr>
                                <th>部门名称</th>
                                <th>主要职责</th>
                                <th>业务范围</th>
                                <th>部门负责人与联系方式</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>资源建设中心</td>
                                <td>承担图书馆文献资源的<br/>采访、组织与揭示业务。</td>
                                <td>1. 根据学校学科建设和教学科研的需要采集各种文献；收集开放获取的网络文献资源；对电子资源进行管理；与港、澳、台地区和国外的大学、科研机构进行书刊交换，处理文献受赠等事务。<br/>2. 负责图书馆文献资源（含图书、期刊、学位论文、电子资源、缩微文献等非书资料等）的组织、揭示、目录维护、质量控制等；负责实体文献的技术加工等；负责学位论文、期刊的装订。<br/>3. 开展与上述内容相关的文献资源建设理论、技术、方法的研究工作；参与CALIS、CASHL相关项目等。<br/>4. 回溯编目与数据清理：组织落实总、分馆文献的回溯编目，清理回溯和清点过程中发现的数据垃圾等。
                                </td>
                                <td>
                                    主  任：<br/>电  话：<br/>地  址：<br/><br/>副主任：<br/>电  话：<br/>地  址：<br/><span className="iconfont">&#xe642;</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Structure