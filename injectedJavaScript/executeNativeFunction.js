var content = `
  function executeNativeFunction(fnName, args) {
    try {
      window.location.hash = '&executeFunction<-' + fnName + '&' + '&arguments<-' + JSON.stringify(args) + '&' + (window.ReactNativeWebView || window['ReactABI33_0_0NativeWebView']).postMessage(JSON.stringify(args)) + '&';
    } catch (error) {
      alert('' + error + ',' + Object.keys(window).join('   '))
    }
  }
`;

export default content;
