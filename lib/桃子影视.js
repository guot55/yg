muban.mxpro.二级.title = 'h1&&Text;.module-info-tag&&Text';
muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&span';
muban.mxpro.二级.lists = '.module-play-list:eq(#id)&&a';
var rule = {
    title: '桃子影视[优]', //原91free
    模板: 'mxpro',
    host: 'https://www.taozi007.com',
    "url": "/show/fyfilter.html",
    class_parse: '.navbar-items&&a[href*=type];a&&title;a&&href;(\\d+).html',
    lazy: $js.toString(() => {
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.from != 'ty') {
            if (/\\.m3u8|\\.mp4/.test(url)) {
                input = {
                    jx: 0,
                    url: url,
                    parse: 0
                }
            } else {
                url = unescape(base64Decode(url))
                input = {
                    jx: 0,
                    url: url,
                    parse: 0
                }
            }
        } else {
            const key = {
                "words": [
                    1447445076,
                    2053404010,
                    1884436806,
                    1463969893
                ],
                "sigBytes": 16
            }
            const iv = {
                "words": [
                    942945847,
                    959918642,
                    875967541,
                    842610233
                ],
                "sigBytes": 16
            }
            eval(getCryptoJS)
            let data = CryptoJS.AES.decrypt(text, key, {
                'iv': iv
            }).toString(CryptoJS.enc.Utf8);
            let data_json = JSON.parse(data);
            let url = data_json.url;
            input = {
                jx: 0,
                url: url,
                parse: 0
            }
        }
    }),
    推荐: '*',
    double: false, // 推荐内容是否双层定
    searchUrl: '/search/**----------fypage---.html',
    filterable: 1,
    filter: "H4sIAAAAAAAAA+2Za08bVxCG/8t+ptKyQNLkW+73+z1VPkQVUqO2qdSklaoIicTYNSTYgAiOawihwYFEGMxFFJYa/ozP2v4XXfvMvDNug2WlJGqq/ebnnZ3dc+asz7w6+8jpdA5+9cj5tvcX56BjBueCWNzpcO7f/b5X8893v/upt3Hh/bocn6/F5utyCE5fB6kTk+H1pBIgNjRfLk1yzALHguSLsj9IMQKOVZLLNAAB5D1ZqEyMcp4F5M2Nms0tzrOAsSTGatm3PBYLapyV8S0ZZx367tSjVKDJonnmqwIxt1Wg2blaNsE3t8Cx2ptssLFEMQLkpYvB5jbnWcBEt1MmV+KJWkCBVp9LjIBj1afLEiNAXiYfTC5wngWMc/qt5BFgnNt/SIxAxlLUYyk25Q0Xjf+G8ywgbyAdVsokeb2EMZP8TiVdqAxmeTJgWdRXwdOdMA3ryowr4uvlrQkOW9DLXl0qVOf7ZdnBbS17rhRezze3oJZBYgRY2pVZiRFgGTIlM5yRsLBaKBW2oBZYYgTqpVExC2qB1UwsqBKaxZiUsA5N/5zNtfJWSf1zmNspoed2fkla46fS94u+X+v7RN+n9R7Re7TeLXq31rtE79K6J7qn9U7RO7Xuiu42F6aQCZaGVWGY/1YYyLowh0g4BOUwKYehHCHlCJSjpByFcoyUY1COk3IcyglSTkA5ScpJKKdIOQXlNCmnoZwh5QyUs6SchXKOlHNQzpNyHsoFUi5AuUjKRSiXSLkE5TIpl6FcIeUKlKukXIVyjZRrUK6Tch3KDVJuQLlJyk0ot0i5BeU2KbehuF8cIK35RQlSY8ZPy4sCbn5Rgsx6LbMmwVB6eC9M4NuXfT8ojjfFv7n38IFsSUsDJploij/4+ocfe+tjudPheHtmF9Kz1dfc2gnasQS1qbHgRd48XjcxHl+T1JYdWVw3PjYyC9h2h5YqpXe87Vpox8aY/K9iOQgQQ2EEEEslTHqFYxYwlq20iW/wWCxgHTdngim2PwSoXyweZNlNEOB5zxNhRfl5FvC80qjUjKDdHvnvrFEiHl4PT9aAdizHh9qmVhantaXa3ca0tFQTxdB1mKkZTgVHFuQfFuQjWwlPWr2nW70nrd7Trd6TVu/pVu9Jq/eaWv0B6OHP/62Fge7KfF09X1fm6+r5ujJfV8/Xlfm6er6uzNfV83VlvuHPyFI5kaX6PC1V115Zqlr/YGWunzdcC9oSDEwrSxACxre4Uy0muQVYQN5YIRjKc54F2cTjwQbbEwLZ/FfLmyPY/BugOmztNY+FADH/nVl8yTELeF5upTro8/MsIG98OljDiY8F5G1sBMl02R8LLRtnawl1WPs9NFlcBwu4x/KT6uNnnG3hk9if0NKE5gXDboDqomFflS5aB8QW5sLScsxCZCiiswknauxRY48a+6do7N171dhbNe9WnzoqsUJ1hg0BAe6Zmq+M8NcIAsRGXlYW8GnFgvSq3T+fVEemqik+tyHAPV/NmBw2aAu4Z6vPQ5O+nFcQ4Hk7I9LSCZDX4gzJFMMyrfHzLOhYflXFQkA9Z7fLf/7G9bSAvNS0SeY4z4K8RyumwGaIAPfMDQVZNjUEUpdls5NBXRqgmtpHPI/Jlco+Ds8sqE6769nJe01HmwOODMleGZLohCMyQpERciIj9F8xQj3aCEWvbvTqfi6vbt9fsJ3zwyAlAAA=",
    filter_url: "{{fl.类型}}-{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}",
    filter_def: {
        "1": {
            "类型": "1"
        },
        "2": {
            "类型": "2"
        },
        "3": {
            "类型": "3"
        },
        "4": {
            "类型": "4"
        },
        "5": {
            "类型": "5"
        }
    },
}