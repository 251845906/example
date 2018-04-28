$(function(){
  init_province = typeof(init_province) != 'undefined' ? init_province : 0;
  init_city = typeof(init_city) != 'undefined' ? init_city : 0;
  init_area = typeof(init_area) != 'undefined' ? init_area : 0;
  setArea(init_province,init_city,init_area);
});

$(".area").change(function(){
  var ara_id = $(this).val();
  var id = $(this).attr('id');
  if(ara_id == ''){
    if(id == 'province'){
      $("#city").html('<option value="">城市</option>');
      $("#area").html('<option value="">区县</option>');
    }else if(id == 'city'){
      $("#area").html('<option value="">区县</option>');
    }
    return;
  }
  var level = id == 'province' ? 1 : 2;
  getArea(ara_id, level);
});

function setArea(province,city,area){

  $("#province").html('<option value="">省份</option>');
  $("#city").html('<option value="">城市</option>');
  $("#area").html('<option value="">区县</option>');

  var html = '<option value="">省份</option>';
  var data = '{"110000":"\u5317\u4eac\u5e02","120000":"\u5929\u6d25\u5e02","130000":"\u6cb3\u5317\u7701","140000":"\u5c71\u897f\u7701","150000":"\u5185\u8499\u53e4","210000":"\u8fbd\u5b81\u7701","220000":"\u5409\u6797\u7701","230000":"\u9ed1\u9f99\u6c5f","310000":"\u4e0a\u6d77\u5e02","320000":"\u6c5f\u82cf\u7701","330000":"\u6d59\u6c5f\u7701","340000":"\u5b89\u5fbd\u7701","350000":"\u798f\u5efa\u7701","360000":"\u6c5f\u897f\u7701","370000":"\u5c71\u4e1c\u7701","410000":"\u6cb3\u5357\u7701","420000":"\u6e56\u5317\u7701","430000":"\u6e56\u5357\u7701","440000":"\u5e7f\u4e1c\u7701","450000":"\u5e7f\u897f\u7701","460000":"\u6d77\u5357\u7701","500000":"\u91cd\u5e86\u5e02","510000":"\u56db\u5ddd\u7701","520000":"\u8d35\u5dde\u7701","530000":"\u4e91\u5357\u7701","540000":"\u897f\u85cf","610000":"\u9655\u897f\u7701","620000":"\u7518\u8083\u7701","630000":"\u9752\u6d77\u7701","640000":"\u5b81\u590f","650000":"\u65b0\u7586"}';
  data = eval('('+data+')');
  for(var i in data){
    html += '<option value="'+i+'">'+data[i]+'</option>';
  }
  $('#province').html(html);
  $('#province').val(province);

  if(province == 0){
    return ;
  }
  $.ajax({
    type: "GET",
    url: "/?c=general&a=getArea",
    data: "ara_id="+province,
    dataType: "json",
    success: function(msg){
      var html = '<option value="">城市</option>';
      var data = msg.data;
      for(var i in msg.data){
        if(typeof(allow_area) !== 'undefined'){
          html += typeof(allow_area[i]) !== 'undefined' ? '<option value="'+i+'">'+data[i]+'</option>' : '';
        }else{
          html += '<option value="'+i+'">'+data[i]+'</option>';
        }
      }
      $('#city').html(html);
      $('#city').val(city);
      if(city == 0){
        return ;
      }
      $.ajax({
        type: "GET",
        url: "/?c=general&a=getArea",
        data: "ara_id="+city,
        dataType: "json",
        success: function(msg){
          var html = '<option value="">区县</option>';
          var data = msg.data;
          for(var i in msg.data){
            html += '<option value="'+i+'">'+data[i]+'</option>';
          }
          $('#area').html(html);
          $('#area').val(area);
        }
      });
    }
  });
}

function getArea(ara_id,level){
  $.ajax({
    type: "GET",
    url: "/?c=general&a=getArea",
    data: "ara_id="+ara_id,
    dataType: "json",
    success: function(msg){
      var html = '<option value="">省份</option>';
      var id = 'province';
      if(level == 1){
        html = '<option value="">城市</option>';
        id = 'city';
      }else if(level == 2){
        html = '<option value="">区县</option>';
        id = 'area';
      }
      if(typeof(ignore_area) !== 'undefined'){
        if(ara_id != 110000 && ara_id != 120000 && ara_id != 310000 && ara_id != 500000){
          var data = msg.data;
          for(var i in msg.data){
            if(typeof(allow_area) !== 'undefined'){
              html += typeof(allow_area[i]) !== 'undefined' ? '<option value="'+i+'">'+data[i]+'</option>' : '';
            }else{
              html += '<option value="'+i+'">'+data[i]+'</option>';
            }
          }
        }
      }else{
        var data = msg.data;
        for(var i in msg.data){
          if(typeof(allow_area) !== 'undefined'){
            html += typeof(allow_area[i]) !== 'undefined' ? '<option value="'+i+'">'+data[i]+'</option>' : '';
          }else{
            html += '<option value="'+i+'">'+data[i]+'</option>';
          }
        }
      }
      $('#'+id).html(html);
    }
  });
}