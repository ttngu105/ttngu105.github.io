// data for post request
const formId = '1FAIpQLScyoiZntCX8uDACL1D_VQkXBuC8Dv6iO_LovkX4x1DddIEemg';
const name = 'entry.130530209';
const message = 'entry.1159817613';
const title = 'entry.2000012467';
const urlPOST = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
//data for get request
let sheetId = '1CWyXmIUQKCyjabcGc1uOQGVD__riczejwyEeRir0gts';
const key = 'AIzaSyAsXJcdU0jV8bynU6IMWPIo7JdoB8CuD8Y';
const sheet = encodeURIComponent('Sheet1');
const urlGET = `https://sheets.googleapis.com/v4/spreadsheets/1CWyXmIUQKCyjabcGc1uOQGVD__riczejwyEeRir0gts/values/${sheet}!a2:d2000?key=${key}`;
const blogname = document.title;
const postToGoogleDB = function(data){
	const urlEncoded = encodeURL(urlPOST,data);
	const request = initRequest("POST",urlEncoded,"no-cors");
	sendRequest(request)
		.then(responseEventPOST);
}
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
