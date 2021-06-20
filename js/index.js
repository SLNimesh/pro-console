console.log("Loaded index.js")

const interface = new CSInterface;

function showMsg() {	
    console.log("Executing showMsg() function");
    interface.evalScript('showAlert()');
}

function showHostVersion() {
    console.log("Executing showHostVersion() function");
    let host = interface.getHostEnvironment();
    let hostInfo = `${host.appName} ${host.appVersion}v lang(${host.appUILocale})`;
    interface.evalScript(`showHost("${hostInfo}")`);
}