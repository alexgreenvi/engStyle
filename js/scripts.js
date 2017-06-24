/*
 Alex GreenVi
 v 4.0
 * https://github.com/alexgreenvi/engStyle
 */
$(document).ready(function() {
    _tabs.init(); /* Табы
     ._tabs-nav : Стиль меню >li>a id ='val'
     ._tabs : Табы переключения div id ='val'
     */
});
var _tabs = {
    init: function () {
        this.tabs = $('._tabs');
        this.tabsNav = $('._tabs-nav');
        this.tabsContent = $('._tabs-content');

        this.tabsNav_ar = this.tabsNav.find('a');
        this.tabsContent_ar = this.tabsContent.find('._tab');

        _tabs.load();

        this.tabsNav_ar.each(function(index, element){
            $(element).on('click', _tabs.click);
        });
    },
    load: function () {
        _tabs.tabs.each(function(index, element){
            $(element).attr('_tabs-data-id',index);

            $(element).find('._tab').removeClass('active');

            if($(element).find('a.active').length !== Number(1)){
                $(element).find('a').removeClass('active');
                $(element).find('a').filter(':first').addClass('active');
            }

            var id = $(element).find('a.active').attr('href');
            $(element).find('._tab'+id).addClass('active');
        });
    },
    click: function (e){
        e.preventDefault();
        var id = $(this).attr("href"),
            tab = _tabs.tabsContent.find(id),
            tabs = tab.parents('._tabs[_tabs-data-id]');

        _tabs.update(tabs);

        $(this).addClass('active');
        tab.addClass('active');

    },
    update: function (_this) {
        _this.find('._tabs-nav a').removeClass('active');
        _this.find('._tabs-content ._tab').removeClass('active');
    }
};