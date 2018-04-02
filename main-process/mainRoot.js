const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;
const fs = require('fs');
const path = require("path");
const spawn = require('child_process').spawn;
const sudo = require('sudo');
const shell = require('electron').shell
var filesArr = [];

function spawnLog(ls, event) {
    // ls.stdout.on('data', (data) => {
    //     console.log(`stdout: ${data}`);
    // });

    ls.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });

    ls.on('close', (code) => {
        event.sender.send('res', '执行完成，结果编码为' + code);
    });
}

ipc.on('buildElementClick', function (event) {
    const ls = spawn('npm', ['run', 'build'], {
        cwd: '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element'
    });
    spawnLog(ls, event);
})

ipc.on('elementToApClick', function (event) {
    const ls0 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/node_modules/ifbp-element/lib']);
    ls0.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    spawnLog(ls, event);
})

ipc.on('elementToUIClick', function (event) {
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-uitemplate-fe/src/vendor/ifbp-element/lib']);
    spawnLog(ls, event);
})


ipc.on('devApClick', function (event) {
    const ls = spawn('npm', ['run', 'dev'], {
        cwd: '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze'
    });
    spawnLog(ls, event);
})

ipc.on('buildApClick', function (event) {
    const ls = spawn('npm', ['run', 'build'], {
        cwd: '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze'
    });
    spawnLog(ls, event);
})

ipc.on('devUIClick', function (event) {
    const ls = spawn('npm', ['run', 'dev'], {
        cwd: '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-uitemplate-fe'
    });
    spawnLog(ls, event);
})

ipc.on('addDNSClick', function (event) {
    const ls = spawn('networksetup', ['-setdnsservers', 'Wi-Fi','10.10.2.45','10.10.5.70']);
    spawnLog(ls, event);
})


ipc.on('emptyDNSClick', function (event) {
    const ls = spawn('networksetup', ['-setdnsservers', 'Wi-Fi','empty']);
    spawnLog(ls, event);
})

ipc.on('openNginxClick', function (event) {
    const ls = spawn('sudo', ['nginx']);
    spawnLog(ls, event);
})

ipc.on('closeNginxClick', function (event) {
    const ls = spawn('sudo', ['nginx', '-s','stop']);
    spawnLog(ls, event);
})