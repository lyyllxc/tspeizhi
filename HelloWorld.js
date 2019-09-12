"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var console = __importStar(require("console"));
var img = '<p><img src="http://img.redbull888.com:18082/imgUploads/11/20190912152029506.jpg" alt="20190912152029506.jpg"></p>';
var reg = /http:\/\/(\w+\.){2}.+.jpg"\s/;
var imgArry = img.match(reg);
var str;
if (imgArry) {
    str = imgArry[0].replace('" ', '');
    console.log(str);
}
//# sourceMappingURL=HelloWorld.js.map