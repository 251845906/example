function Ajax (options) {
    options.method = options.method.toUpperCase() || '';
    // 请求格式  get  post
    options.url = options.url +'' || '';
    // 请求地址 http://
    options.async =  options.async || true;
    // 同步和异步
    options.date =  options.date || '';
    // post格式下发送数据
    options.success = options.success || function () {};
    // 请求成功 回调函数
    // options.error = options.error || function (){};
    //请求失败 回调
    const request = new XMLHttpRequest();
//     //XMLHttpRequest对象用于在后台与服务器交换数据
    request.open(options.method,options.url,options.async);
// // 规定
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 请求的类型、URL 以及是否异步处理请求。 true（异步）或 false（同步） url文件在服务器上的位置
//     request.setHeader("Access-Control-Allow-Origin", "*");

    // request.getWriter().write();
//
// // 向请求添加 HTTP 头 value: 规定头的值  请求格式
    request.send(options.string);
// // 将请求发送到服务器。
    request.onreadystatechange = function(){
        // 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
        // readyState
        // 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
        // 0: 请求未初始化
        // 1: 服务器连接已建立
        // 2: 请求已接收
        // 3: 请求处理中
        // 4: 请求已完成，且响应已就绪
        // status	200: "OK"
        // 404: 未找到页面
        // return request

        if (request.readyState === 4 && request.status === 200){
            //     // 当请求完成相应就绪    文件也‘ok’时候进行下面代码
            //     request.responseText	//获得字符串形式的响应数据
            //     request.responseXML	   //获得 XML 形式的响应数据。
            options.success(request.responseText)

        }
        // else{
        //     options.error(request)
        // }
    };
};




export default Ajax;







