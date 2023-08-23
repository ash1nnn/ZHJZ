// 本地
// const api = 'http://127.0.0.1:8888';
//服务器
const api = 'http://118.25.148.102:8080/';
// const api = 'http://118.25.148.102:8080/user/list';

/*需求界面*/
export const historyDemondUrl = api + '/demand/getHistoryDemand';
export const searchDemandUrl = api + '/demand/search';
export const oneDemandUrl = api + '/demand/getOneDemand';
export const demandReplyInitialUrl = api + '/demand/getDemand';
export const demandReplyUrl = api + '/demand/replyDemand';
export const demandAddUrl = api + '/demand/addDemand';
export const hostReplyUrl = api + '/demand/hostReply';

export const myrequest = function(url, method, data) {
	if (data != null || data != undefined || data != {}) {
		Object.keys(data).forEach(function(key) {
			url += '?' + data[key];
		});
	}
	console.log(url);
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: method,
			header: {
				'custom-header': 'housework'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err.data);
				console.log("获取数据失败");
			}
		});
	});
};

export const myget = function(name) {
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key: name,
			success: function(res) {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err.data);
				console.log("获取数据失败");
			}
		});
	});
}