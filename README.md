# mgn-menu ( Don't Need jQuery )


Implement function to operate **hamburger menu's** opening and closing.  
When menu button is clicked, **class is added/deleted** in response to menu button and global navigation.
- Target browser : IE9+

___

# Install

```
npm i mgn-menu -S
```

## Or Download raw data
[↓ download "mgn-menu.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-menu/master/src/mgn-menu.js)


___

# Import

```
import mgnScrollNav from 'mgn-menu';
```

___

# Constructor

```
new mgnScrollNav( element [, option] )
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) ".j-menu"|
|option|Object|-|ex)<br> option = {<br> globalNav: "#globalnav",<br> activeName: "open",<br> noScroll: false,<br> closePoint: 768<br>}|

|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|globalNav|String|"#globalnav"|Specify global navigation's ID or Class.|
|activeName|String|"active"|Specify class to assign.|
|noScroll|Boolean|true|Specify whether to scroll back content.|
|closePoint|Number|Null|Specify the boundary value to forcefully close the global navigation.|

___

# Method

|Method|Argument|Description|
|:-------|:--------|:------|
|Open( element )|String|Open Menu.|
|Close( element )|String|Close Menu.|
|OpenEnd = function(){};|-|To be executed after opening Menu.|
|CloseEnd = function(){};|-|To be executed after closing Menu.|

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-menu/](https://frontend-isobar-jp.github.io/mgn-menu/)

```
import mgnMenu from 'mgn-menu';

let menu = new mgnMenu(
    ".j-menu",
    {
        globalNav: "#gNav",
        activeName: "open",
        closePoint: 768,
        noScroll: false
    }
);

menu.Open();

setTimeout(function() {

    menu.Close();

},1000);

menu.OpenEnd = function() {
    console.log("openEnd")
}
menu.CloseEnd = function() {
    console.log("closeEnd")
}
```
