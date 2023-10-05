var rule = {
	title: '小苹果影视盒子', // csp_AppYsV2
	host: 'http://yumi.ghlyys.com/',
	//host: 'http://ytcms.lfytyl.com',
  hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":"Dart/3.0 (dart:io)"}});let src = JSON.parse(html).domain;print(src);HOST=src',
	url: '/api.php/app/video?tid=fyclassfyfilter&limit=20&pg=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',

	detailUrl:'/api.php/app/video_detail?id=fyid',
	searchUrl: '/api.php/app/search?text=**&pg=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/2.14 (dart:io)'},
	timeout:5000,
	class_name:'电影&电视剧&综艺&动漫&国产剧', // 分类筛选 /api.php/app/nav
	class_url:'1&2&3&4&5',
	play_parse:true,
	lazy:'js:if(/m3u8|mp4/.test(input)){input}else if(/YuMi/.test(input)){let purl=request("http://61.147.93.21:8090/index.php?url="+input);input={jx:0,url:JSON.parse(purl).url,parse:0}}else if(/YuMi/.test(input)){let purl=request("http://123.99.192.241:5000/api/jiexi/xg?Key=NLoNjn48GAF3UQdsP0&url="+input);input={jx:0,url:JSON.parse(purl).url,parse:0}}else if(/qiqi/.test(input)){let purl=request("http://42.51.37.161:5678/json/520238app8/ml77.php?url="+input);input={jx:0,url:JSON.parse(purl).url,parse:0}}',
	limit:6,
	推荐:'json:list[0].vlist;*;*;*;*',
	一级:'json:list;vod_name;vod_pic;vod_remarks||vod_score;vod_id',
	二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_url_with_player;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["name"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from= ("🌙宝盒专享");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}