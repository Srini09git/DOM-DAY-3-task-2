//Pagination Task

function tagWithClass(tgname, attrname, attrvalue) {
    var ele = document.createElement(tgname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}
function tagWithIdClass(tgname, attrname, attrvalue, attrname1, attrvalue1) {
    var ele = document.createElement(tgname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
}
function tag(tgname) {
    var ele = document.createElement(tgname);
    return ele;
}
function tagWithClassContent(tgname, attrname, attrvalue, content) {
    var ele = document.createElement(tgname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

var div1 = tagWithClass("div", "class", "container");
var div2 = tagWithClass("div", "class", "heading");
var div3 = tagWithClass("div", "class", "table-responsive");
var div4 = tagWithIdClass("div", "id", "buttons", "class", "d-flex justify-content-center");
div1.append(div2, div3, div4);
document.body.append(div1);
var h1 = tagWithClassContent("h1", "id", "title", "Pagination Task");
div2.append(h1,);
var table = tagWithClass("table", "class", "table table-bordered");
div3.append(table);
var thd = tagWithClass("thead", "class", "thead-dark");
var tbd = tag("tbody");
table.append(thd, tbd);
var tr1 = tag("tr");
thd.append(tr1);
var th1 = tagWithClassContent("th", "scope", "col", "Id");
var th2 = tagWithClassContent("th", "scope", "col", "Name");
var th3 = tagWithClassContent("th", "scope", "col", "Email");
tr1.append(th1, th2, th3);

var b = 10;
var temp = [];

let request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    //console.log(res);

    function print(x) {
        tbd.innerHTML = " ";
        for (var i = ((x - 1) * b); i < (b * x); i++) {
            console.log(res, i, x, b);
            let tr2 = document.createElement("tr");
            tr2.setAttribute("id", "row2");
            let td1 = document.createElement("td");
            td1.innerHTML = res[i].id;
            let td2 = document.createElement("td");
            td2.innerHTML = res[i].name;
            let td3 = document.createElement("td");
            td3.innerHTML = res[i].email;
            tr2.append(td1, td2, td3);
            tbd.append(tr2);
        }
    }

    for (var j = 0; j <= (res.length / b) - 1; j++) {
        var button = document.createElement("button");
        button.innerHTML = j + 1;
        document.body.appendChild(button);
        temp.push(button);
        //console.log(temp[temp.length - 1], temp[temp.length - 1].innerHTML);
    }
    //console.log(temp[temp.length - 1].innerHTML);
    temp.forEach(ele => {
        ele.onclick = function () {
            print(ele.innerHTML);
        }
    });
}