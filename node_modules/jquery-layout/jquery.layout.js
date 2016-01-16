// vim: set et sw=4 ts=4
(function ( $ ) {

    var settings = {
        prefix: ""
    };

    function applySize($child, attr, px) {
        $child[attr](px);
    }

    function applyPosition($child, layout, pos) {

        pos = layout == 'vertical' ?
            { top: pos, left: 0 } : { top: 0, left: pos };

        $child.css(pos);
    }

    function makeLayout() {

        var pfx = settings.prefix;

        var $parent = $(this);

        $parent.css({ position: 'absolute' });

        var layout = $parent.attr(pfx + 'layout');
        var attr = layout == 'vertical' ? 'height' : 'width';
        var otherAttr = layout == 'horizontal' ? 'height' : 'width';
        var size = $parent[otherAttr]();

        var remainingSpace = $parent[attr]();
        var remainingSpace2;
        var layouter = [];
        var layouter2 = [];

        $parent.children().each(function () {
            var $child = $(this);
            $child.css({ position: 'absolute', display: 'block' });

            if ($child.hasClass('scroll')) {
                $child.css({ overflow: 'auto' });
            } else {
                $child.css({ overflow: 'hidden' });
            }
            var space = $child.attr(pfx + attr) || "";

            if (space.match(/^[1-9][0-9]*px$/)) {
                var px = parseInt(space);
                remainingSpace -= px;
                applySize($child, attr, px);

            } else if (space.match(/^(100|[1-9][0-9]?|0)%$/)) {
                var percent = parseInt(space) / 100;
                layouter.push(function () {
                    var space = Math.ceil(remainingSpace * percent);
                    applySize($child, attr, space);
                    remainingSpace2 -= space;
                });

            } else if (space == "*") {
                layouter2.push(function () {
                    var space = Math.ceil(remainingSpace2 / layouter2.length);
                    $child[attr](space);
                });

            } else {
                $child.hide();
            }

            $child[otherAttr](size);
        });

        remainingSpace2 = remainingSpace;
        layouter.forEach(function (f) { f(); });
        layouter2.forEach(function (f) { f(); });

        var pos = 0;
        $parent.children().each(function () {
            var $child = $(this);
            var size = $child[attr]();
            applyPosition($child, layout, pos);
            pos += size;
        });
        
        $parent.children().each(function () {
            var $child = $(this);
            if ($child.attr(pfx + 'layout')) {
                makeLayout.bind(this)();
            }
        });
    }

    $.fn.layout = function () {

        var pfx = settings.prefix;

        return this.each(function () {
            $(this).css({
                display: "block", visibility: "hidden"
            }).each(makeLayout).css({
                visibility: "visible"
            });
        });
    };

    $.fn.layout.defaults = settings;

}( jQuery ));
