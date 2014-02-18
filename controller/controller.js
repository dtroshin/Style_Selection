function addEventHandler(elem,eventType,handler) {
    if (elem.addEventListener)
        elem.addEventListener (eventType,handler,false);
    else if (elem.attachEvent)
        elem.attachEvent ('on'+eventType,handler); 
}

function removeEventHandler(elem,eventType,handler) {
    if (elem.removeEventListener) 
        elem.removeEventListener (eventType,handler,false);
    if (elem.detachEvent)         
        elem.detachEvent ('on'+eventType,handler); 
}

function handlerFunction1() {switch_style('style1');return false;}
function handlerFunction2() {switch_style('style2');return false;}
function handlerFunction3() {switch_style('style3');return false;}
function handlerFunction4() {switch_style('style4');return false;}
function handlerFunction5() {switch_style('style5');return false;}
function handlerFunction6() {switch_style('style6');return false;}

function init() {
    return function () {
        addEventHandler(document.getElementById('style1'),'click',handlerFunction1);
        addEventHandler(document.getElementById('style2'),'click',handlerFunction2);
        addEventHandler(document.getElementById('style3'),'click',handlerFunction3);
        addEventHandler(document.getElementById('style4'),'click',handlerFunction4);
        addEventHandler(document.getElementById('style5'),'click',handlerFunction5);
        addEventHandler(document.getElementById('style6'),'click',handlerFunction6);
    };                
 }


var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

function switch_style ( css_title )
{
    var i, link_tag ;
    for (i = 0, link_tag = document.getElementsByTagName("link") ;
        i < link_tag.length ; i++ ) {
        if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) && link_tag[i].title) 
        {
          link_tag[i].disabled = true ;
          if (link_tag[i].title == css_title) {
                link_tag[i].disabled = false ;
          }
        }
        set_cookie( style_cookie_name, css_title,
          style_cookie_duration );
    }
}
function set_style_from_cookie()
{
    var css_title = get_cookie( style_cookie_name );
    if (css_title.length) {
          switch_style( css_title );
    }
}
function set_cookie ( cookie_name, cookie_value,lifespan_in_days, valid_domain )
{
        var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=" + encodeURIComponent( cookie_value ) +
            "; max-age=" + 60 * 60 *
            24 * lifespan_in_days +
            "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
        var cookie_string = document.cookie ;
        if (cookie_string.length != 0) {
            var cookie_value = cookie_string.match ('(^|;)[\s]*' +
                    cookie_name + '=([^;]*)' );
            return decodeURIComponent ( cookie_value[2] ) ;
        }
        return '' ;
}
                
window.onload = init();