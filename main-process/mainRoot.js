const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;
const fs = require('fs');
const path = require("path");
const spawn = require('child_process').spawn;
// const sudo = require('sudo');
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
    const ls1 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/theme-default/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/theme-default']);
    ls1.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls2 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/theme-red/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/theme-red']);
    ls2.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls3 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-base.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls3.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls4 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-base.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls4.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls5 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-other.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls5.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-other.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    spawnLog(ls, event);
})

ipc.on('elementToApPubClick', function (event) {
    const ls1 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/theme-default/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe/static/ap/trd/ifbp-element/theme-default']);
    ls1.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls2 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/theme-red/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe/static/ap/trd/ifbp-element/theme-red']);
    ls2.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls3 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-base.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe/static/ap/trd/ifbp-element/']);
    ls3.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls4 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-base.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe/static/ap/trd/ifbp-element/']);
    ls4.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls5 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-other.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe/static/ap/trd/ifbp-element/']);
    ls5.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-other.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe/static/ap/trd/ifbp-element/']);
    spawnLog(ls, event);
})

ipc.on('elementToApFbpClick', function (event) {
    const ls1 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/theme-default/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fbp-pub-fe/static/ap/trd/ifbp-element/theme-default']);
    ls1.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls2 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/theme-red/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fbp-pub-fe/static/ap/trd/ifbp-element/theme-red']);
    ls2.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls3 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-base.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fbp-pub-fe/static/ap/trd/ifbp-element/']);
    ls3.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls4 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-base.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fbp-pub-fe/static/ap/trd/ifbp-element/']);
    ls4.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls5 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-other.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fbp-pub-fe/static/ap/trd/ifbp-element/']);
    ls5.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/index-other.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fbp-pub-fe/static/ap/trd/ifbp-element/']);
    spawnLog(ls, event);
})

ipc.on('elementToApMobileClick', function (event) {
    const ls0 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib-mobile/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/node_modules/ifbp-element/lib-mobile']);
    ls0.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls1 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib-mobile/theme-default/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/theme-default']);
    ls1.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    
    const ls3 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib-mobile/index-mobile.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls3.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib-mobile/index-mobile.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze/legacy/trd/ifbp-element/']);
    spawnLog(ls, event);
})

ipc.on('elementToUIClick', function (event) {
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element/lib/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-uitemplate-fe/src/vendor/ifbp-element/lib']);
    spawnLog(ls, event);
})

ipc.on('otherElementToApClick', function (event) {
    const ls0 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element/lib/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/node_modules/ifbp-element/lib']);
    ls0.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls1 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element/lib/theme-default/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/theme-default']);
    ls1.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls2 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element/lib/theme-red/', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/theme-red']);
    ls2.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls3 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element//lib/index-base.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls3.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls4 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element//lib/index-base.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls4.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls5 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element//lib/index-other.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls5.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls6 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element//lib/index-other.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls6.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls7 = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element//lib/index.min.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/']);
    ls7.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        // event.sender.send('res', '执行失败：' + data);
    });
    const ls = spawn('cp', ['-R', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ifbp-element/lib/index.js', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance-other/ap-fe-optimze/legacy/trd/ifbp-element/']);
    spawnLog(ls, event);
})


ipc.on('openITermClick', function (event) {
    const ls = spawn('open', ['-a', 'iTerm', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-fe-optimze', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ap-pub-fe', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-element', '/Users/liuyk/iCloudDrive-old/code/0jinrong/finance/ifbp-uitemplate-fe']);
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
    const ls = spawn('/usr/local/nginx/sbin/nginx');
    spawnLog(ls, event);
})

ipc.on('closeNginxClick', function (event) {
    const ls = spawn('/usr/local/nginx/sbin/nginx', ['-s','stop']);
    spawnLog(ls, event);
})