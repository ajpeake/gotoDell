/*
	Opens a new tab and loads "http://www.dell.com/" into it.
*/

function openDell() {
	console.log("injecting");
	chrome.tabs.create({
		"url": chrome.extension.getURL("http://www.dell.com/")
	});
}


chrome.browserAction.onClicked.addListener(openDell);
