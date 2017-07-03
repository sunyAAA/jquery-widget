/**
 * Created by xsann on 2017/6/11.
 */
if (window.jQuery === undefined) throw new Error("myAccordion插件依赖于jQuery");
jQuery.fn.myAccordion = function () {//class 侵入
    this.addClass("accordion")
        .children(":nth-child(odd)").addClass("title")
        .attr("data-toggle", "title");
    this.children(":nth-child(even)").addClass("content");
    this.children(":nth-child(even):first").addClass("open");
    $(".accordion").on("click", "[data-toggle='title']", function () { //绑定行为
        $(this).next().toggleClass("open").siblings(".content.open").removeClass("open");
    });
};
