/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnMenu = factory();
    }
}(this, function() {

    function mgnMenu(selector, option) {

        this.selector = selector;
        this.menu = document.querySelectorAll( this.selector )[0];

        //option
        if(option == null) option = {};
        this.globalNav = option.globalNav ? option.globalNav : "#globalnav";
        this.activeName = option.activeName ? option.activeName : "active";
        this.closePoint = option.closePoint ? option.closePoint : null;

        this.noScroll = option.noScroll != null ? option.noScroll : true;
        this.globalNavElm = document.querySelectorAll( this.globalNav )[0];

        this.flag = false;
        this.scrollVal = null;
        this.baseWinWidth = window.innerWidth;

        this.OpenEnd = function(){};
        this.CloseEnd = function(){};

        if( this.menu ) {
            this.Init();
        }

    }


    /**
    **
    ** Init
    **
    **/
    mgnMenu.prototype.Init = function() {

        var this_ = this;

        this.menu.addEventListener( "click", function() {
            !this_.flag ? this_.Open() : this_.Close();
        } )

        window.addEventListener( "resize", function() {

            var WIN_WIDTH = window.innerWidth;

    		if( this_.closePoint && this_.flag ) {

    			if( this_.baseWinWidth < WIN_WIDTH ) {//右

    				if( (this_.baseWinWidth < this_.closePoint) && ( this_.closePoint < WIN_WIDTH ) ) {
    					this_.Close();
    				}

    			} else {//左

    				if( (this_.baseWinWidth > this_.closePoint) && ( this_.closePoint > WIN_WIDTH ) ) {
    					this_.Close();
    				}

    			}
    			this_.baseWinWidth = WIN_WIDTH;

    		}


        } );

    }


    /**
    **
    ** Open
    **
    **/
    mgnMenu.prototype.Open = function(i) {

        if( !this.menu ) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        var this_ = this;
        this.scrollVal = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        this.AddClass(this.menu,this.activeName);
        this.AddClass(this.globalNavElm,this.activeName);

        var EndFunc = function() {
            this_.OpenEnd();
            this_.globalNavElm.removeEventListener("transitionend", EndFunc);
        };

        this.globalNavElm.addEventListener("transitionend", EndFunc, false);

        if( this.noScroll ) {

            this.htmlTag = document.getElementsByTagName("html")[0];

            var css =  "position: fixed; ";
                css += "width: 100%; ";
                css += "top:"+ (-this.scrollVal) +"px;";

            this.htmlTag.style.cssText = css;

        }

        this.flag = true;

    }


    /**
    **
    ** Close
    **
    **/
    mgnMenu.prototype.Close = function() {

        if( !this.menu ) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        var this_ = this;

        if( this.noScroll ) this.htmlTag.style.position = "static";
        
        if( this.noScroll ) {
            window.scroll( 0, this.scrollVal );
        }

        this.RemoveClass(this.menu,this.activeName);
        this.RemoveClass(this.globalNavElm,this.activeName);

        var EndFunc = function() {
            this_.CloseEnd();
            this_.globalNavElm.removeEventListener("transitionend", EndFunc);
        };

        this.globalNavElm.addEventListener("transitionend", EndFunc, false);

        this.flag = false;

    }

    mgnMenu.prototype.AddClass = function( element, _className ) {

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }
    mgnMenu.prototype.RemoveClass = function( element, _className ) {

        if (element.classList) {
            element.classList.remove(_className);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + _className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

    }

    return mgnMenu;

}));
