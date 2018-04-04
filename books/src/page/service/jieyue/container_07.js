import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            <h5 className="title">名人藏书馆</h5>
            <div className="Cshu">
                <div className="Cshu_List">
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                </div>
                <div className="Cshu_List">
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                </div>
                <div className="Cshu_List">
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                    <span><Link href="#">XX藏书馆</Link></span>
                </div>
                <div className="Cshu_Container">
                    <div className="Cshu_title">
                        <h6>XX藏书馆简介</h6>
                    </div>
                    <p>山西工商学院图书馆创建于2003年，建筑面积9200平方米。馆藏文献中以社会科学门类图书为主，形成了以收藏工商管理类专业学科文献为重点，　适当入藏相关学科理论著作和一般性图书的馆藏文献信息资源体系。经过九年的基本建设，围绕学院各学科专业的发展，专业图书报刊占馆藏量的80%，其它类图书占20%。截止2012年底馆藏纸质文献共计74.62万册；2013年订购报纸48种，期刊311种；同时增加了 “万方数据知识服务平台系统”，该系统收录了中国重要期刊全文6700余种，自80年代以来收录我国各学科领域的学位论文，目前已建成国内数量最多、专业涵盖面最广、收集单位最为权威的学位论文全文数据库。</p>
                    <button className="Cshu_Link"> >>  进入该馆  {'<<'} </button>
                </div>
            </div>

        </div>
    )
}