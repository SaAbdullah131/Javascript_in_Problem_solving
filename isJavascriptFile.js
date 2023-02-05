function isJavascriptFile(str) {
    if(typeof str !=="string") {
        console.log("Please Enter String");
    }else if(str.endsWith(".js")){
        return true;
    }else {
        return false;
    }
}
let myFile="app.js";
console.log(isJavascriptFile(myFile));