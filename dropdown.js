/**
 * Created by xsann on 2017/6/11.
 */
if(window.jQuery===undefined) throw new Error("dropdown插件依赖于jQuery");//判断预加载
//class侵入
jQuery.fn.dropdown = function(){
    this.addClass("dropdown");
    this.children(":first").attr("data-trigger","dropdown");
    this.children("ul").addClass("dropdown-menu fade");
    //绑定行为
    $("a[data-trigger='dropdown']").click(function(e){
        $(this).next().toggleClass("in");
        e.preventDefault();
    })
};