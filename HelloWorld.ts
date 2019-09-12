import * as console from "console"

let img:string = '<p><img src="http://img.redbull888.com:18082/imgUploads/11/20190912152029506.jpg" alt="20190912152029506.jpg"></p>'
const reg:RegExp = /http:\/\/(\w+\.){2}.+.jpg"\s/
const imgArry:RegExpMatchArray|null = img.match(reg)
let str: string|null
if (imgArry) {
    str = imgArry[0].replace('" ', '')
    console.log(str)
}
