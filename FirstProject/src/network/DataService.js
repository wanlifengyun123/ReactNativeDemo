

var SERVER = 'http://www.yudianer.com/api';


export default function login(username,password) {
	//http://www.imooc.com/api/userloginbyemail?email=wyjcool123@163.com&password=wyj123456
	return fetch('http://www.imooc.com/api/userloginbyemail?email='+ username + '&password='+ password + '')
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载项目完成：",responseData.data);
			return responseData.data;
		});
}

/**
 * 获取工程列表项
 */
function getProjectList() {
    return fetch(`${SERVER}/project`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载项目完成：",responseData.data);
			return responseData.data;
		});
}

/**
 * 获取工程问题列表
 * @param {*} projectId 
 */
function getProjectIssuesList(projectId) {
    
}