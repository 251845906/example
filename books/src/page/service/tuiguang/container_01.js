import React,{ Component } from 'react';

export default () => {
    return(
        <div className="NewBook">
            <h5 className="title">新书上架</h5>
            <b>本周上新</b>
            <form action="">
                <table border="1">
                    <thead>
                        <tr>
                            <th className="Num">序号</th>
                            <th className="BookNum">索书号</th>
                            <th className="BookName">书名</th>
                            <th className="BookWrite">作者</th>
                            <th className="BookHouse">出版社</th>
                            <th className="BookTimer">出版日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>BO-0/383</td>
                            <td>马克思主义哲学论</td>
                            <td>中国唯物主义研究会编</td>
                            <td>社会科学文献出版社</td>
                            <td>2010</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}