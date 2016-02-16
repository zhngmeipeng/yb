/**
 * Created by zmp on 2016/2/1.
 */

(function($){
    $.test2=function(options,element){
        $this=this;
        this.element=element;
        this.$element=$(element);
        this.init(options);

    };

    $.test2.prototype={
       init : function (options){
            this.option= $.extend(true,{},options);
           this.$element.append('<div>zhangsan</div>');

       }
    }

    $.fn.test2 = function(options, content) {

        return this.each(function() {

            new $.test2(options, this);

        });

    };
}(jQuery));