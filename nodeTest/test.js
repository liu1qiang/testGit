// // /*
// // * @Author: Administrator
// // * @Date:   2016-12-21 15:17:40
// // * @Last Modified by:   Administrator
// // * @Last Modified time: 2017-06-22 14:12:02
// // */

// // // 'use strict';
// // // var s = {"access_token":"zkCL7pug3YzojfILzYG_WlwQxKDAxJdfV_3r0TOSy1uQbAF_TaUFKGj-Jv2R4mj84RQVCSgJcL4jEsGqcz31BI1IzP30qykLOoNoKnt078nX-70H0HNj26K000Qmttv2BKOaAGAOXB","expires_in":7200}
// // // console.log(s.access_token);
// // // var test = {'phone':123,'pwd':456,'age':'dd'};
// // // var updateSql ='upadte admin set '
// // // for(var i in test){
// // // 	updateSql = updateSql+'"'+i+'"="'+test[i]+'",';
// // // }
// // // var sub = updateSql.substring(0,updateSql.length - 1);
// // // 	 sub += ' WHERE id = ' +2;
// // // console.log(sub);
// // // var s = '2';
// // // console.log(s.valueOf());
// // // var test = 12;
// // // 	var s  = test.toString();
// // // console.log(s);
// // var s  = [
// //             {
// //                 "pass": 46, 
// //                 "class": "1"
// //             }, 
// //             {
// //                 "pass": 36, 
// //                 "class": "1(分)"
// //             }, 
// //             {
// //                 "pass": 44, 
// //                 "class": "10"
// //             }, 
// //             {
// //                 "pass": 43, 
// //                 "class": "10(分)"
// //             }, 
// //             {
// //                 "pass": 49, 
// //                 "class": "11(分)"
// //             }, 
// //             {
// //                 "pass": 38, 
// //                 "class": "12(分)"
// //             }, 
// //             {
// //                 "pass": 7, 
// //                 "class": "13(分)"
// //             }, 
// //             {
// //                 "pass": 10, 
// //                 "class": "14(分)"
// //             }, 
// //             {
// //                 "pass": 9, 
// //                 "class": "15(分)"
// //             }, 
// //             {
// //                 "pass": 55, 
// //                 "class": "2"
// //             }, 
// //             {
// //                 "pass": 45, 
// //                 "class": "2(分)"
// //             }, 
// //             {
// //                 "pass": 49, 
// //                 "class": "3"
// //             }, 
// //             {
// //                 "pass": 48, 
// //                 "class": "3(分)"
// //             }, 
// //             {
// //                 "pass": 47, 
// //                 "class": "4"
// //             }, 
// //             {
// //                 "pass": 45, 
// //                 "class": "4(分)"
// //             }, 
// //             {
// //                 "pass": 56, 
// //                 "class": "5"
// //             }, 
// //             {
// //                 "pass": 49, 
// //                 "class": "5(分)"
// //             }, 
// //             {
// //                 "pass": 50, 
// //                 "class": "6"
// //             }, 
// //             {
// //                 "pass": 56, 
// //                 "class": "6(分)"
// //             }, 
// //             {
// //                 "pass": 49, 
// //                 "class": "7"
// //             }, 
// //             {
// //                 "pass": 45, 
// //                 "class": "7(分)"
// //             }, 
// //             {
// //                 "pass": 48, 
// //                 "class": "8"
// //             }, 
// //             {
// //                 "pass": 46, 
// //                 "class": "8(分)"
// //             }, 
// //             {
// //                 "pass": 56, 
// //                 "class": "9"
// //             }, 
// //             {
// //                 "pass": 36, 
// //                 "class": "9(分)"
// //             }
// //         ]
// //         var daifen = [];
// //       //   s.sort(function(a,b){
// //       //   	return parseInt(a.class) - parseInt(b.class)
// //       //   })
// //       //   var e = []
// //       // for(var i in s){
// //       //   e.push(s[i].class+'班');
// //       // }
// //       var e = [];
// //       for(var i in s){
// //         if(s[i].class.indexOf('(分)') >0){
// //             daifen.push(s[i]);
// //         }else{
// //             e.push(s[i]);
// //         }
// //       }
// //       var p = [];
// //       console.log(daifen.sort(function(a,b){
// //         return parseInt(a.class) - parseInt(b.class);
// //       }));
// //       console.log(e.sort(function(a,b){
// //         return parseInt(a.class)-parseInt(b.class)
// //       }));
// //       p.push(daifen);
// //       p.push(e);
// //       var c = e.concat(daifen);
// //       // [ 
// //     //   [ 
// //     // { pass: 36, class: '1(分)' },
// //     // { pass: 45, class: '2(分)' },
// //     // { pass: 48, class: '3(分)' },
// //     // { pass: 45, class: '4(分)' },
// //     // { pass: 49, class: '5(分)' },
// //     // { pass: 56, class: '6(分)' },
// //     // { pass: 45, class: '7(分)' },
// //     // { pass: 46, class: '8(分)' },
// //     // { pass: 36, class: '9(分)' },
// //     // { pass: 43, class: '10(分)' }
// //     // { pass: 49, class: '11(分)' }
// //     // { pass: 38, class: '12(分)' }
// //     // { pass: 7, class: '13(分)' },
// //     // { pass: 10, class: '14(分)' },
// //     // { pass: 9, class: '15(分)' }
// //     // ],
// //     // [ { pass: 46, class: '1' },
// //     // { pass: 55, class: '2' },
// //     // { pass: 49, class: '3' },
// //     // { pass: 47, class: '4' },
// //     // { pass: 56, class: '5' },
// //     // { pass: 50, class: '6' },
// //     // { pass: 49, class: '7' },
// //     // { pass: 48, class: '8' },
// //     // { pass: 56, class: '9' },
// //     // { pass: 44, class: '10' } ] ]
// // // p.replace(']','')
// //  console.log(c);
// // var s  = ['img/touxinag.png','img/5.png'];
// // for(var i in s ){
// //     console.log(s[i])
// // // }
// // var l = [['img/touxinag.png','img/1.png'],['img/touxinag.png','img/2.png']];
// // for(var i in l){
// //     console.log(l[i])
// // }
// //
// //  var configs = {'KGF1':"客观题1",'KGF2':"客观题2",'KGF3':"客观题3"};
// // // var configs = ['KGF1','KGF2','KGF3','KGF4','KGF5','KGF6','KGF7','KGF8','KGF9','KGF10'];
// //  // for(var k in configs){
// //  // 	if(k == 'KGF1'){
// //  // 		k.replace('KGF1','change客观题1') ;
// //  // 	};
// //  // 	if(k == 'KGF2'){
// //  // 		k = 'change客观题2';
// //  // 	};
// //  // 	if(k == 'KGF3'){
// //  // 		k = 'change客观题3';
// //  // 	};
// //  // }
// //  configs = configs.replace('KGF1','change客观题1');
// //  console.log(configs);
// // var  s = "zg_2016-11";
// // var d = s.replace(/zg/,'主观题');
// // console.log(d);
// // var s  = {
// // 	"南川中学":"dhaidhiadioasdio"
// // }
// // console.log(s.南川中学);
// // function 测试(){
// // var 张三 = "sdasda";
// //  console.log(张三)	
// // };
// // 测试();
// // var s  = {
// //  	"南川中学":"dhaidhiadioasdio"
// //  }
// //  console.log(s["南川中学"]);
// // var s  = "考勤[0/0],作业[0/0]";
// // console.log(s.split(",")[1]);
// // var s  = "qiandao20156"
// // console.log(s.substring(0,7));
// // var i = 2;
// // var s =  "考勤：0/35";
// // var t = s.replace(/0/,i);
// // console.log(t);
// // var configs = { 'KGF1': "客观题1", 'KGF2': "客观题2", 'KGF3': "客观题3" };
// // // configs = JSON.stringify(configs).replace("KGF1", "change客观题1"),
// // // configs = JSON.stringify(configs).replace("KGF2", "change客观题2")
// // // configs = JSON.stringify(configs).replace("KGF3", "change客观题3")
// // // console.log(JSON.parse(JSON.parse(JSON.parse(configs))));
// // console.log(configs.KGF1);
// // if(configs.KGF1.indexOf('客观') > -1){
// // 	console.log('有')
// // }else{
// // 	console.log('没有')
// // }
// // var  test = "1,18,33";
// // if (test.indexOf("26") > -1)
// // {
// // console.log("存在");
// // }
// // else
// // {
// // console.log("不存在");
// // }
// // var oDate = new Date(); //实例一个时间对象；
// // var getTime = oDate.getTime(); //获取当前的时间戳
// // // var year = oDate.getFullYear();   //获取系统的年；
// // // var month = oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
// // // var day = oDate.getDate(); // 获取系统日，
// // // var hour = oDate.getHours(); //获取系统时，
// // // var min = oDate.getMinutes(); //分
// // // var sec = oDate.getSeconds(); //秒
// // // console.log(year+'年'+month+'月'+day+'日'+' '+hour+':'+min+':'+sec);
// // console.log(getTime.toString().length);
// // console.log(-9*(-1));
// //var data = [{"id":1,"title":"KGF1"},{"id":2,"title":"KGF2"},{"id":3,"title":"KGF3"},{"id":4,"title":"KGF4"},{"id":5,"title":"KGF5"},{"id":6,"title":"zg12_13_1"},{"id":7,"title":"zg12_13_2"},{"id":8,"title":"zg14_15_1"},{"id":9,"title":"zg14_15_2"},{"id":10,"title":"zg16_17_1"},{"id":11,"title":"zg16_17_2"},{"id":12,"title":"zg18_19_1"},{"id":13,"title":"zg18_19_2"},{"id":14,"title":"zg20_21_1"},{"id":15,"title":"zg20_21_2"},{"id":16,"title":"zg22_1"},{"id":17,"title":"zg6_7__1_1"},{"id":18,"title":"zg6_7__1_2"},{"id":19,"title":"zg7__2_3_1"},{"id":20,"title":"zg7__2_3_2"},{"id":21,"title":"zg8_1"},{"id":22,"title":"zg9_11_1"},{"id":23,"title":"zg9_11_2"},{"id":24,"title":"zg9_11_3"},{"id":25,"title":"zg作文_1"}]
// //
// //var configs = {'KGF1':"客观题1",'KGF2':"客观题2",'KGF3':"客观题3",'KGF4':"客观题4",'KGF5':"客观题5"};
// //
// //for(var i in data){
// //	for(var k in configs){
// //		if(data[i].title == k){
// //			data[i].title = configs[k];
// //		}else{
// //			data[i].title = data[i].title.replace('zg','主观题');
// //}
// //		}
// //	}
// //
// //console.log(data);
// // for(var i=0;i<=3;i++){
// // 	setTimeout(function(){
// // 		console.log(i);
// // 	},1)
// // }
// // var arr = [1,2,3,4,3,2,5,1,5];
// // for(i = 0; i < arr.length; i++){
// //     for(j = i+1; j < arr.length; j++){
// //         if(arr[i] == arr[j]){
// //             arr.splice(j,1);
// //             j--; 
// //         }
// //   }
// // }
// // console.log(arr);
// // 
// // var s = ['一、1','一、3','一、2',]
// // console.log(s.length);
// // console.log(JSON.stringify(s).replace(/;/,','));
// // for(var i in s){
// // 	console.log(s[i]);
// // }
// // var  s = "dsadasjdljsald";
// // console.log(s.replace(/d/g,'你好'));
// // var s  =
// //   [{
// // "id": 2,
// // "jf_id": 12,
// // "section_name": "测试修改教辅语文板块",
// // "topic_num": "二、1",
// // "topic_pagenum": 11,
// // "topic_score": null,
// // "topic_type": "填空题",
// // "topic_index": 1,
// // "topic_zsd1id": null,
// // "topic_zsd1": "知识点一",
// // "topic_zsd2id": null,
// // "topic_zsd2": "知识点二",
// // "topic_zsd3id": null,
// // "topic_zsd3": "知识点三",
// // "topic_tag": null
// // },
// //   {
// // "id": 1,
// // "jf_id": 12,
// // "section_name": "测试语文教辅",
// // "topic_num": "一",
// // "topic_pagenum": 11,
// // "topic_score": null,
// // "topic_type": null,
// // "topic_index": 2,
// // "topic_zsd1id": null,
// // "topic_zsd1": null,
// // "topic_zsd2id": null,
// // "topic_zsd2": null,
// // "topic_zsd3id": null,
// // "topic_zsd3": null,
// // "topic_tag": null
// // },
// //   {
// // "id": 3,
// // "jf_id": 12,
// // "section_name": "测试语文教辅",
// // "topic_num": "三",
// // "topic_pagenum": 11,
// // "topic_score": null,
// // "topic_type": null,
// // "topic_index": 3,
// // "topic_zsd1id": null,
// // "topic_zsd1": null,
// // "topic_zsd2id": null,
// // "topic_zsd2": null,
// // "topic_zsd3id": null,
// // "topic_zsd3": null,
// // "topic_tag": null
// // },
// //   {
// // "id": 5,
// // "jf_id": 12,
// // "section_name": "测试语文教辅",
// // "topic_num": "五",
// // "topic_pagenum": 11,
// // "topic_score": null,
// // "topic_type": null,
// // "topic_index": 4,
// // "topic_zsd1id": null,
// // "topic_zsd1": null,
// // "topic_zsd2id": null,
// // "topic_zsd2": null,
// // "topic_zsd3id": null,
// // "topic_zsd3": null,
// // "topic_tag": null
// // },
// //   {
// // "id": 4,
// // "jf_id": 12,
// // "section_name": "测试语文教辅",
// // "topic_num": "四",
// // "topic_pagenum": 11,
// // "topic_score": null,
// // "topic_type": null,
// // "topic_index": 5,
// // "topic_zsd1id": null,
// // "topic_zsd1": null,
// // "topic_zsd2id": null,
// // "topic_zsd2": null,
// // "topic_zsd3id": null,
// // "topic_zsd3": null,
// // "topic_tag": null
// // }
// // ]
// // console.log(s[s.length-1].topic_index);
// // var  s  = [{"jfid":12,"sectionName":"xuexitanjiu"},{"jfid":12,"sectionName":"xuexitanjiu2"},{"jfid":12,"sectionName":"xuexitanjiu3"}]
// // var sectionName = "xuexitanjiu2";
// // for(var i in s){
// // 	if(sectionName == s[i].sectionName){
// // 		s.splice(i,1);
// // 	}
// // }
// // console.log(s);
// // var s  = "q";
// // var f = [];
// // for(var i = 0;i<3;i++){
// // 	f.push(s);
// // }
// // console.log(f.length);
// // for(var g in f){
// // 	console.log(f[g]);
// // }
// // var s  = {"topic_index":1,"topic_aswer":"hahahhahahah","topic_question":"今天是个好日子","topic_item":[{'options':'测试选项A','img':'dsadasdasdas'},{'options':'测试选项B','img':'dsadasdasdas'},{'options':'测试选项C','img':'dsadasdasdas'}]};
// // var updateSql = 'update jf_topic_detil set ';
// // for(var i in s){
// // 	// console.log(i);
// // 	updateSql += i+"= '"+ JSON.stringify(s[i]) + "',"; 
// // }
// // updateSql = updateSql.substring(0, updateSql.length - 1) + ' WHERE id = 2';
// // console.log(updateSql);
// 	// var value = '语文';
// 	// var s = [];
// 	// var type = {
// 	// 			'语文':[{
// 	// 				'typeNmae':'选择题'
// 	// 			},{
// 	// 				'typeNmae':'判断题'
// 	// 			},{
// 	// 				'typeNmae':'填空题'
// 	// 			},{
// 	// 				'typeNmae':'阅读理解'
// 	// 			},{
// 	// 				'typeNmae':'写作'
// 	// 			}],
// 	// 			'数学':[{
// 	// 				'typeNmae':'选择题'
// 	// 			},{
// 	// 				'typeNmae':'判断题'
// 	// 			},{
// 	// 				'typeNmae':'填空题'
// 	// 			},{
// 	// 				'typeNmae':'阅读理解'
// 	// 			},{
// 	// 				'typeNmae':'写作'
// 	// 			},{
// 	// 				'typeNmae':'文言文'
// 	// 			}]
// 	// }
// 	// for(var i in type){
// 	// 	if(i == value){
// 	// 		s = type[i];
// 	// 	break;
// 	// 	}
// 	// };
// 	// console.log(s);
// 	// var j = [{"id":12,"jf_id":4,"section_name":"探究交流","section_tag":""},{"id":13,"jf_id":4,"section_name":"课堂达标","section_tag":""},{"id":14,"jf_id":4,"section_name":"课后练习","section_tag":null}];
// 	// var s  = ["yuwen","shuxue","yinyu"];
// 	// var u = [];
// 	// for(var i in s){
// 	// 	u.push({"section_name":s[i]});
// 	// 	// console.log({"section_name":s[i]});
// 	// };
// 	// j = j.concat(u);
// 	// console.log(j);
// 	// var s = [{"fieldname":"ygf_image_file","originalname":"Hydrangeas.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/jfimags","filename":"1488852348664.jpg","path":"public\\uploads\\jfimags\\1488852348664.jpg","size":595284},{"fieldname":"ygf_image_file","originalname":"Jellyfish.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/jfimags","filename":"1488852784613.jpg","path":"public\\uploads\\jfimags\\1488852784613.jpg","size":775702}]
// 	// for(var i in s){
// 	// 	s[i].path = s[i].path.substring(6).replace(/\\/g,"/");
// 	// }
// // 	// console.log(s);
// // var s = [{"options":"A.dasdasdasda","img":{"img":"/uploads/jfimags/1488865114752.jpg"}},{"options":"B.dsadasdas","img":{"img":"/uploads/jfimags/1488865370298.jpg"}},{"options":"C.dsadasdasdas","img":{"img":"/uploads/jfimags/1488864553061.jpg"}},{"options":"D.dasdasdasdas","img":{"img":"/uploads/jfimags/1488865319438.jpg"}}]
// // for(var i in s){
// // 	console.log(s[i].options)
// // }
// // var s  = "<img src=\"/uploads/jfimags/1488878296019.jpg\">afsdfs";
// // console.log(s);
// // s = s.replace(/\//g,'');
// // console.log(s);
// // var s  = '二';
// // console.log(3+'、1');
// //  var fruits = [{"Banana":"sdasd"}, {"Banana":"sdasd"}, {"Banana":"sdasd"}];
// //     fruits.pop();
// // // return s[0];
// // console.log(fruits);



// // var s = [
// // 			{ "option": "<label class='active'>A<input type='checkbox'  name=' value='A' /></label>", "value": "<label>A.<textarea name=' rows=' ' cols=' ' placeholder='请输入文字A的选项内容'  v-model='A' id='optionA'></textarea></label><p><input type='file' value=' ' name=' ' @change='uploadIMGA'/></p>"},
// // 			{ "option": "<label class='active'>B<input type='checkbox'  name=' value='B' /></label>", "value": "<label>B.<textarea name=' rows=' ' cols=' ' placeholder='请输入文字B的选项内容'  v-model='B' id='optionB'></textarea></label><p><input type='file' value=' ' name=' ' @change='uploadIMGB'/></p>"},
// // 			{ "option": "<label class='active'>C<input type='checkbox'  name=' value='C' /></label>", "value": "<label>C.<textarea name=' rows=' ' cols=' ' placeholder='请输入文字C的选项内容'  v-model='C' id='optionC'></textarea></label><p><input type='file' value=' ' name=' ' @change='uploadIMGC'/></p>"},
// // 			{ "option": "<label class='active'>D<input type='checkbox'  name=' value='D' /></label>", "value": "<label>D.<textarea name=' rows=' ' cols=' ' placeholder='请输入文字D的选项内容'  v-model='D' id='optionD'></textarea></label><p><input type='file' value=' ' name=' ' @change='uploadIMGD'/></p>"}
// // 		]

// // 		console.log(s[s.length-1]);


// // 		function IndexDemo(){ 
// // var str1 = "BABEBIBOBUBABEBIBOBU" 
// // var s = str1.indexOf('2'); 
// // console.log(s); 
// // } IndexDemo();
// // var s = ["B","A"];
// // var d = s.join(',');
// // console.log(d);
// var s = '\uploads\jfimages\1489054730163.jpg'
// s = s.replace(/\\/g,'');
// console.log(s);
// var s  = [
// {"dm":01,"mc":"汉族"},
// 02 　　　　　 蒙古族  
// 03 　　　　　 回族  
// 04 　　　　　 藏族  
// 05 　　　　　 维吾尔族  
// 06 　　　　　 苗族 　 
// 07 　　　　　 彝族  
// 08 　　　　　 壮族  
// 09 　　　　　 布依族  
// 10 　　　　　 朝鲜族  
// 11 　　　　　 满族  
// 12 　　　　　 侗族  
// 13 　　　　　 瑶族  
// 14 　　　　　 白族  
// 15 　　　　　 土家族  
// 16 　　　　　 哈尼族  
// 17 　　　　　 哈萨克族  
// 18 　　　　　 傣族 　 
// 19 　　　　　 黎族  
// 20 　　　　　 傈僳族 　 
// 21 　　　　　 佤族  
// 22 　　　　　 畲族  
// 23 　　　　　 高山族  
// 24 　　　　　 拉祜族  
// 25 　　　　　 水族  
// 26 　　　　　 东乡族  
// 27 　　　　　 纳西族  
// 28 　　　　　 景颇族  
// 29 　　　　　 柯尔克孜族  
// 30 　　　　　 土族  
// 31 　　　　　 达斡尔族  
// 32 　　　　　 仫佬族  
// 33 　　　　　 羌族  
// 34 　　　　　 布朗族  
// 35 　　　　　 撒拉族  
// 36 　　　　　 毛难族  
// 37 　　　　　 仡佬族  
// 38 　　　　　 锡伯族  
// 39 　　　　　 阿昌族  
// 40 　　　　　 普米族 　 
// 41 　　　　　 塔吉克族  
// 42 　　　　　 怒族  
// 43 　　　　　 乌孜别克族  
// 44 　　　　　 俄罗斯族  
// 45 　　　　　 鄂温克族  
// 46 　　　　　 崩龙族  
// 47 　　　　　 保安族  
// 48 　　　　　 裕固族  
// 49 　　　　　 京族  
// 50 　　　　　 塔塔尔族  
// 51 　　　　　 独龙族  
// 52 　　　　　 鄂伦春族  
// 53 　　　　　 赫哲族 
// 54 　　　　　 门巴族 　　 
// 55 　　　　　 珞巴族  
// 56 　　　　　 基诺族  
// 97 　　　　　 其他 ]
// var s = {
// 	"calssavg":[112, 34, 4324, 234, 5, 23, 42, 4, 24, 23, 4, 24, 4, 23, 42],
// 	"calssmax":[112, 34, 4324, 234, 5, 23, 42, 4, 24, 23, 4, 24, 4, 23, 43],
// 	"self":[112, 34, 4324, 234, 5, 23, 42, 4, 24, 23, 4, 24, 4, 23, 44]

// };

// // for(var t in s){
// // 	if(t == 5){
// // 		return;
// // 	}
// // 	console.log(t);
// // }
// var sw = [{
//     name: '班级平均分',
//     marker: {
//         symbol: 'circle',
//         fillColor: 'white',
//         lineWidth: 2,
//         lineColor: "#ff5f49"
//     },
//     data:[]
// },{
//     name: '班级最高分',
//     marker: {
//         symbol: 'circle',
//         fillColor: 'white',
//         lineWidth: 2,
//         lineColor: "#ff5f49"
//     },
//     data:[]
// },{
//     name: '个人水平',
//     marker: {
//         symbol: 'circle',
//         fillColor: 'white',
//         lineWidth: 2,
//         lineColor: "#ff5f49"
//     },
//     data:[]
// }]
// sw[0].data = s.calssavg;
// sw[1].data = s.calssmax;
// sw[2].data = s.self;


// console.log(sw);
// var fg;
// var f = [23,13,312,3,12,31,3,1,3];
// for(var i = 0;i<f.length;i++){
// 	fg = f[i+1];
// 	break;
// }

// console.log(fg)
//
// var fs = require("fs");
// fs.readFile(__dirname+'/user.json',"utf8",function(err,data){
//   if (err) {
// //        return console.error(err);
// //    }
// //   console.log("文件打开成功！",data);
// // });
// var s = 2.33;
// console.log("文件打开成功！og(s.toString().indexOf(".") > -1);
// var s = [{ id: 12, dire_pagenum: 1, dire_content: '1 观察为题（三）' }, { id: 14, dire_pagenum: 4, dire_content: '1 观察为题（五）' }];
// var d = [{ pagenum: 2, "cotent": "dasdsa" }, { pagenum: 1, "cotent": "dasdss" }, { pagenum: 2, "cotent": "dasdsqqqqq" }, { pagenum: 4, "cotent": "dasdsawwwww" }];
// var f = 0;
// for (var j in d) {
//     for (var k = 0; k < s.length - 1; k++) {
//         if(d[j].pagenum >= s[k].dire_pagenum && d[j].pagenum < s[k+1].dire_pagenum){
//         	console.log(4)
//         }else{
//         	console.log(8);
//         }
//     }
// }
//  var ary = new Array("111","22","33","111");  

// var nary=ary.sort();  

//  for(var i=0;i<ary.length;i++){  

//  if (nary[i]==nary[i+1]){  

//   console.log("数组重复内容："+nary[i]);  

//  }  
// }
//ES6新增of循环	
// var someArray = [{name:"a"}, {name:"b"}, {name:"c"} ];

// for ([key,value] of someArray) {
//     console.log("key：",key+','+"value：",value);//输出 a,b,c
// }
// var async = require('async');
// var func1 = function(req, res, callback) {
//     setTimeout(function() {
//         console.log('in func1');
//         callback(req, res, 1);
//     }, 13000);
// }
// var func2 = function(req, res, callback) {
//     setTimeout(function() {
//         console.log('in func2');
//         callback(req, res, 2);
//     }, 5000);
// }
// var func3 = function(req, res, callback) {
//     setTimeout(function() {
//         console.log('in func3');
//         callback(req, res, 3);
//     }, 1000);
// }

// var req = null;
// var res = null;
// var callback = function() {};
// async.series(
//     [
//         function(callback) {
//             func1(req, res, callback);
//         },
//         function(callback) {
//             func2(req, res, callback);
//         },
//         function(callback) {
//             func3(req, res, callback);
//         }
//     ]
// );
//时间倒退
// var nowTime = new Date().getTime();
// var ThereMonthTime = nowTime - (7*24*60*60*1000);
// var unixTimestamp = new Date(ThereMonthTime)
// var commonTime = unixTimestamp.toLocaleString()
// console.log(commonTime);
// 
// 
// var array = ["dsad","dsawqewd","dsaddsada","dsacxcxzcd","dsacadasd"];

// var addSql = "insert into test(dire_id,jf_id,sectionName) values ";
// var param = [];
// for(var i of array){
// 	addSql += ' (?,?,?),';
// 	param.push(1);
// 	param.push(2);
// 	param.push(i);
// };

// addSql = addSql.substring(0, addSql.length - 1);
// console.log(addSql);
// console.log(param);
// 
// 

