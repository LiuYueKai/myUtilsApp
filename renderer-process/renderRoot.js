const ipc = require('electron').ipcRenderer

const $ = require('jquery');
jQuery = $;

// 按钮监听的公共方法
function buttonClick(id) {
	const buttonDom = $('#' + id)[0];
	buttonDom.addEventListener('click', function (event) {
		ipc.send(id + 'Click');
	})
}

// 循环添加按钮监听
const buttonIds = ['buildElement','elementToAp','elementToUI','devAp','buildAp','devUI','addDNS','emptyDNS'];
buttonIds.forEach((buttonId) => {
	buttonClick(buttonId)
})

// 执行结果打印
ipc.on('res', function (event, resMsg) {
	alert(resMsg);
})