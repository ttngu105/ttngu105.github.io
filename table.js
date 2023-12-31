//data for get request
let sheetId = '1CWyXmIUQKCyjabcGc1uOQGVD__riczejwyEeRir0gts';
const key = 'AIzaSyAsXJcdU0jV8bynU6IMWPIo7JdoB8CuD8Y';
const sheet = encodeURIComponent('Sheet1');
const urlGET = 'https://docs.google.com/spreadsheets/d/1CWyXmIUQKCyjabcGc1uOQGVD__riczejwyEeRir0gts/edit#gid=1737297764!a2:d2000?key=${key}'
//const urlGET = `https://sheets.googleapis.com/v4/spreadsheets/1CWyXmIUQKCyjabcGc1uOQGVD__riczejwyEeRir0gts/values/${sheet}!a2:d2000?key=${key}`;
const blogname = document.title;
//get data
const getFromGoogleDB = function(){
    const request = initRequest('GET', urlGET);
    sendRequest(request)
    .then( responseEventGET);
}


const encodeURL = function(path ,params){
    const url = new URL(path);
	for (let key in params){
		url.searchParams.set(key,params[key]);
	}
	return url;
}

const initRequest = function (verb,url,mode='cors'){
	const init = new Object();
	init.method = verb;
	init.mode = mode;
	return new Request(url,init);
}

const sendRequest = async function(request){
	const response = await fetch(request);
	return response;
}

const responseEventGET = async function(response){
    var sheetData = await response.json();
    showComments(sheetData);
}

const showComments = function(data){
	clearChat();
	for(row of data.values){
		addComment(row)
	}
}

const addtable= function(row){
	const[time,name,message,sheettitle]=row
	const chatList = document.getElementById('chat-list');
	if (sheettitle == blogname){
	chatList.innerHTML += `<li class="left-align no-bullets"><font color ="white"><div class ="card bg-dark card-text"><ul>Username: ${name}</ul>time: ${time}<ul >Message: \"${message}\"</font></ul></div></li>`
	}
}
const clearChat = function(){
	const chatlist = document.getElementById('chat-list');
	chatlist.innerHTML="";
}


const initViews = function(){
	getFromGoogleDB();
}
const responseEventPOST = response => getFromGoogleDB();

initViews();
