var d3 = window.d3;

var margin = { top: 0, right: 0, bottom: 0, left: 0 };
                    var width = 50 - margin.left - margin.right,
                        height = 75 - margin.top - margin.bottom;
                    // var color = d3.scale.ordinal().range(['rgba(0,0,0,0.25)', '#68a4d6', '#9ebb4f', '#d6a400', '#860024', '#880096','rgba(255,255,255,0.9)']);

                    // var tooltip = d3.select('body').append('div')
                    //     .style("position", "absolute")
                    //     .style("padding", "0.25vmin")
                    //     .style("background", "rgba(50,50,50,0.5)")
                    //     .style("-webkit-backdrop-filter", "blur(0.8pt)")
                    //     .style("-webkit-filter", "blur(0.2vmin)")
                    //     .style("filter", "blur(0.2vmin)")
                    //     .style("color", "#ddd")
                    //     .style("width", "66vmin")
                    //     .style("border-radius", "1vmin")
                    //     .style("opacity", 0)
                    //     .style("font-size","3vmin");
                    // var treemap = d3.layout.treemap()
                    //     .size([width, height])
                    //     .sticky(false)
                    //     .mode('squarify')
                    //     .padding(function(d){return pad(d);})
                    //     .value(function(d) { return evalu(d); })
                    //     .sort(function(d) { return evalu(d); });
                 //var form = d3.select("#input").html('<div class="panel-heading"><label style="float: left" for="size" class="fa fa-fw fa-2x fa-file-text text-primary"> <input type="radio" name="mode" value="size" checked class=""></label><label for="count" class="fa fa-2x fa-hashtag text-info"><input type="radio" name="mode" value="count" class=""></label><label class="nav-header">Filter by Claim Term:<input type="search" placeholder="Patent #" name="patent" id="patent" onblur="go(this.value)"/></div>');
                //    var patent = d3.select('#patent').value;
                    var div = d3.select('#chart')
                    //.append("div")
                      //  .attr("id", "pendingtreecontainer")
                        .style("position", "relative")
                        .style("width", (width + margin.left + margin.right) + "vw")
                        .style("height", (height + margin.top + margin.bottom) + "vh")
                        .style("left", margin.left + "vmin")
                        .style("top", margin.top + "vmin");
                //  var render = function(q) {
                        //div.selectAll('*').remove();
                        var divi = d3.select("#chart").append("div")
                            .attr("id","reversecontainer")
                            .style("position", "absolute")
                        .style("width", (width + margin.left + margin.right) + "vw")
                        .style("height", (height + margin.top + margin.bottom) + "vh")
                        .style("left", margin.left + "vmin")
                        .style("top", margin.top + "vmin")
                        .style("transform", "rotateY(180deg)rotateX(180deg)");
                        //var pattern = new RegExp(pattern);
                        var color = d3.scale.ordinal().range(['rgba(0,0,0,0.25)', '#68a4d6', '#9ebb4f', '#d6a400', '#860024', '#880096', 'rgba(255,255,255,0.9)']);

                        var tooltip = d3.select('body').append('div')
                            .attr('id', 'ttipcontainer')
                            .style("position", "absolute")
                            .style("padding", "0.25vmin")
                            .style("background", "rgba(50,50,50,0.5)")
                            .style("-webkit-backdrop-filter", "blur(0.8pt)")
                            .style("-webkit-filter", "blur(0.2vmin)")
                            .style("filter", "blur(0.2vmin)")
                            .style("color", "#ddd")
                            .style("width", "75vmin")
                            .style("border-radius", "1vmin")
                            .style("opacity", 0)
                            .style("font-size", "3vmin");
                        var treemap = d3.layout.treemap()
                            .size([width, height])
                            .sticky(false)
                            .mode('squarify')
                            .padding(function(d) {
                                return pad(d);
                            })
                            .value(function(d) {
                                return evalu(d);
                            })
                            .sort(function(a,b) {
                                return evalu(a) - evalu(b);
                            });
                        //var form = d3.select("#input").html('<div class="panel-heading"><label style="float: left" for="size" class="fa fa-fw fa-2x fa-file-text text-primary"> <input type="radio" name="mode" value="size" checked class=""></label><label for="count" class="fa fa-2x fa-hashtag text-info"><input type="radio" name="mode" value="count" class=""></label><label class="nav-header">Filter by Claim Term:<input type="search" placeholder="Patent #" name="patent" id="patent" onblur="go(this.value)"/></div>');
                        //    var patent = d3.select('#patent').value;

                        function axsis(d) {
                            if (Math.max(0, d.dx - 1) < Math.max(0, d.dy - 1)) {
                                return false;
                            } else {
                                return true;
                            }
                        }

                        function pad(d) {
                            if (d.class === 'independent') {
                                return axsis(d) ? [1, 7.5, 5, 1] : [1, 5, 7.5, 1];
                            } else if (d.class === 'dependent' && d.children && d.children.length > 0) {
                                return axsis(d) ? [1, 3, 3, 1] : [1, 3, 3, 1];
                            } else {
                                return [1, 1, 1, 1];
                            }
                        }

                        function evalu(d) {
                            if (d.class === 'independent') {
                                return 15;
                            } else {

                                if (d.parent && d.parent.children.length > 3) {
                                    var s = d.text.toString();
                                    // var a = [];
                                    //  for (key in d.children){
                                    //      a.push(key);
                                    //  }


                                    return s.length / 100;
                                } else {
                                    var s = d.text.toString();
                                    return s.length / 33;
                                }
                            }
                        }
                        var go = function(q) {
                            d3.json('http://127.0.0.1:8000/getphd/patents/'+ q,


                                function(error, root, data) {
                                    // root = root.claims;
                                    //$scope.children = root;
                                    // var children = [];
                                    // var root = {name:'issued', id: 0, class:'super-independent', text:'issued', children:children};
                                    // angular.forEach($scope.tree.claims, function(datum, key){
                                    //     if(datum.class=='independent'){
                                    //         children.push(datum);
                                    //     }else if(datum.class=='dependent'){
                                    //         treebuilder.insert(datum, datum.parent, children).then(function(data){
                                    //         children = data;
                                    //         });
                                    //     }
                                    // });
                                    // var root = $scope.tree.claims;
                                    root = root.claims;
                                    var node = divi.datum(root).selectAll(".node")
                                        .data(treemap.nodes)
                                        .enter().append("div")
                                        .attr("class", function(d) {
                                            return classify(d);
                                        })
                                        .attr("id", function(d) {
                                            return d.id;
                                        })
                                        .attr("tooltip", function(d) {
                                            return d.text;
                                        })
                                        .call(position)
                                        .call(colorize)
                                        // .style("background", function(d) { return colorize(d); })
                                        .text(function(d) {
                                            return d.children ? namer(d) : namer(d)
                                        })
                                        .style("font-size", function(d) {
                                            return font(d);
                                        })
                                        .style("color", function(d) {
                                            return fontcolor(d);
                                        })
                                        //.style("padding", function(d) { return pad(d); })
                                        .on("mouseover", function(d) {
                                            tooltip.html('<div class="img img-thumbnail" style="text-align: left; width: 90vw;"><h6>' + d.name + '</h6><blockquote>' + d.text + '</blockquote></div>')
                                                .transition().duration(250).style("opacity", 1)
                                                .style('left', (d3.event.pageX) + 'px')
                                                .style('top', (d3.event.pageY) + 'px')
                                                //  .style("left","1vmin")
                                                //  .style("top", "2vmin")
                                                .style("z-index", 2000)
                                                .style("-webkit-filter", "sepia(0)")
                                                .style("filter", "sepia(0)");


                                            d3.select(this)
                                                .transition().duration(250)
                                                .style("opacity", 0.66)
                                                .style("-webkit-backdrop-filter", "blur(0.2vmin)")
                                                .style("-webkit-filter", "sepia(0.75)")
                                                .style("filter", "sepia(0.75)")
                                                .style("background", "rgb(50,50,50)")
                                                .style("cursor", "pointer");
                                        })
                                        .on("mouseout", function(d) {
                                            tooltip.transition().duration(250)
                                                .style("opacity", 0)
                                                .style("z-index", -1);
                                            d3.select(this)
                                                .transition().duration(250)
                                                .style("opacity", 1)
                                                .style("-webkit-filter", "sepia(0)")
                                                .style("filter", "sepia(0)")
                                                .call(colorize);
                                        })
                                        .on("click", function(d) {

                                            info(d);
                                        });




                                    // d3.selectAll("[name='mode']").on("change", function change() {
                                    //     var value = this.value === "count"
                                    //         ? function() { return 1; }
                                    //         : function(d) { return d.text.length; };
                                    //     node
                                    //         .data(treemap.value(value).nodes)
                                    //         .transition()
                                    //         .duration(2500)
                                    //         .call(position);
                                    // });

                                    d3.select("#patterninput").on("change", function change() {
                                        var value = this.value;
                                        node.call(colorize);


                                    });
                                });

                            d3.json('/files/public/uspto/patents/'+q+'/'+q+'-claims.json',

                                function(error, root, data) {
                                    // root = root.claims;
                                    //$scope.children = root;
                                    // var children = [];
                                    // var root = {name:'issued', id: 0, class:'super-independent', text:'issued', children:children};
                                    // angular.forEach($scope.tree.claims, function(datum, key){
                                    //     if(datum.class=='independent'){
                                    //         children.push(datum);
                                    //     }else if(datum.class=='dependent'){
                                    //         treebuilder.insert(datum, datum.parent, children).then(function(data){
                                    //         children = data;
                                    //         });
                                    //     }
                                    // });
                                    // var root = $scope.tree.claims;
                                    var node = div.datum(root).selectAll(".node")
                                        .data(treemap.nodes)
                                        .enter().append("div")
                                        .attr("class", function(d) {
                                            return classify(d);
                                        })
                                        .attr("id", function(d) {
                                            return d.id;
                                        })
                                        .attr("tooltip", function(d) {
                                            return d.text;
                                        })
                                        .call(position)
                                        .call(colorize)
                                        // .style("background", function(d) { return colorize(d); })
                                        .text(function(d) {
                                            return d.children ? namer(d) : namer(d)
                                        })
                                        .style("font-size", function(d) {
                                            return font(d);
                                        })
                                        .style("color", function(d) {
                                            return fontcolor(d);
                                        })
                                        //.style("padding", function(d) { return pad(d); })
                                        .on("mouseover", function(d) {
                                            tooltip.html('<div class="img img-thumbnail" style="text-align: left; width: 90vw;"><h6>' + d.name + '</h6><blockquote>' + d.text + '</blockquote></div>')
                                                .transition().duration(250).style("opacity", 1)
                                                .style('left', (d3.event.pageX) + 'px')
                                                .style('top', (d3.event.pageY) + 'px')
                                                //  .style("left","1vmin")
                                                //  .style("top", "2vmin")
                                                .style("z-index", 2000)
                                                .style("-webkit-filter", "sepia(0)")
                                                .style("filter", "sepia(0)");


                                            d3.select(this)
                                                .transition().duration(250)
                                                .style("opacity", 0.66)
                                                .style("-webkit-backdrop-filter", "blur(0.2vmin)")
                                                .style("-webkit-filter", "sepia(0.75)")
                                                .style("filter", "sepia(0.75)")
                                                .style("background", "rgb(50,50,50)")
                                                .style("cursor", "pointer");
                                        })
                                        .on("mouseout", function(d) {
                                            tooltip.transition().duration(250)
                                                .style("opacity", 0)
                                                .style("z-index", -1);
                                            d3.select(this)
                                                .transition().duration(250)
                                                .style("opacity", 1)
                                                .style("-webkit-filter", "sepia(0)")
                                                .style("filter", "sepia(0)")
                                                .call(colorize);
                                        })
                                        .on("click", function(d) {

                                            info(d);
                                        });




                                    // d3.selectAll("[name='mode']").on("change", function change() {
                                    //     var value = this.value === "count"
                                    //         ? function() { return 1; }
                                    //         : function(d) { return d.text.length; };
                                    //     node
                                    //         .data(treemap.value(value).nodes)
                                    //         .transition()
                                    //         .duration(2500)
                                    //         .call(position);
                                    // });

                                    d3.select("#patterninput").on("change", function change() {
                                        var value = this.value;
                                        node.call(colorize);


                                    });
                                });

                            var info = function (d) {

                                var newEl = $(document.createElement('div'));
                                newEl.attr('id', d.id).addClass('card card-fancy claimcard').css('position', 'absolute').css('width', '90vmin').css('left', '25px').css('top', '25px').css('font-size', '3vmin').css('z-index', '100000');
                                newEl.html('<a class="text-muted" style="position:absolute;right:1vmin;" onclick="$(this).parent().remove()"><label class="label label-pill label-NOA">'+q+'</label><span class="pull-right">&times;</span></a><h6><b>' + d.name + '</b></h6><p>'+d.text+'</p>');
                                var a = newEl;
                                a.appendTo($('body')).hide();
                                newEl.draggable({
                                    stack: '.card',
                                    cursor: 'move',
                                    handle: 'h6',
                                    restrict: '#maincontent'
                                });
                                var dragStart = {}
                                    , dragging = false
                                    , curpos = { x: 100, y: -75 }
                                    ;

                                var touch = window.Modernizr.touch;
                                newEl.on(touch ? 'touchstart' : 'mousedown', function (e) {

                                    var evt = touch ? e.originalEvent.touches[0] : e;
                                    dragStart = {
                                        x: evt.screenX + curpos.x,
                                        y: evt.screenY + curpos.y
                                    };

                                    dragging = true;
                                    $('body').addClass('noselect');
                                });

                                $(document).on(touch ? 'touchend' : 'mouseup', function () {
                                    dragging = false;
                                    $('body').removeClass('noselect');
                                });

                                $(document).on(touch ? 'touchmove' : 'mousemove', function (e) {

                                    if (!dragging) return;

                                    e.preventDefault();

                                    var evt = touch ? e.originalEvent.touches[0] : e
                                        , x = dragStart.x - evt.screenX
                                        , y = dragStart.y - evt.screenY
                                        , amp = 0.2
                                        ;

                                    curpos.x = x;
                                    curpos.y = y;
                                });
                                return newEl.slideDown({
                                    duration: 500
                                });
                            };

                            function classify(d) {
                                if (d.children && d.children.length > 0) {
                                    return d.class + "   parent " + "node";
                                } else {
                                    return d.class + " " + "node";
                                }
                            }

                            function tposition(xy) {
                                if ((xy / $("#chart").width()) < 0.5) {
                                    return xy + 'px';
                                } else {
                                    return ($("#chart").width() - xy) + 'px';
                                }
                            }

                            function colorize() {
                                //var pattern = $(this).attr('pattern');

                                this.style("background", function (d) {
                                    return myfun(d);
                                    //return pattern && pattern.length > 1 && d.text && d.text.includes(pattern) ? '#ff4' : myfun(d)
                                });
                            }

                            function myfun(d) {
                                if (d.class.indexOf('super-independent') > -1) {
                                    return color(d);
                                } else if (d.class.indexOf('independent') > -1) {
                                    return color(d.id);
                                } else {
                                    return color(d.parent);
                                }
                            }

                            function brightness(rgb) {
                                return rgb.r * .299 + rgb.g * .587 + rgb.b * .114;
                            }

                            function position() {
                                this.style("left", function (d) {
                                    return d.x + "vw";
                                })
                                    .style("top", function (d) {
                                        return d.y + "vh";
                                    })
                                    .style("width", function (d) {
                                        return Math.max(0, d.dx - 1) + "vw";
                                    })
                                    .style("height", function (d) {
                                        return Math.max(0, d.dy - 1) + "vh";
                                    })

                            }

                            function font(d) {
                                var  ratio = 1;
                                switch (d.depth) {
                                    case 0:
                                        return '0vmin';
                                        break;
                                    case 1:
                                        return (6.5 * ratio) + 'vmin';
                                        break;
                                    case 2:
                                        return d.children ? (4.5 * ratio) + 'vmin' : (3 * ratio) + 'vmin';
                                        break;
                                    case 3:
                                        return (2.5 * ratio) + 'vmin';
                                        break;
                                }
                            }

                            function fontcolor(d) {
                                //return brightness(d3.rgb(colorize(d))) < 115 ? "#444" : "#fff";

                                switch (d.class) {
                                    case 'super-independent':
                                        return 'white';
                                        break;
                                    case 'independent':
                                        return brightness(d3.rgb(color(d.id))) < 25 ? "rgba(255,255,255,0.75)" : "#fff";
                                        break;
                                    case 'dependent':
                                        return brightness(d3.rgb(color(d.id))) < 25 ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
                                        break;
                                }
                            }

                            function sizer(dclass) {
                                switch (dclass) {
                                    case 'super-independent':
                                        return '';
                                        break;
                                    case 'independent':
                                        return 10;
                                        break;
                                    case 'dependent':
                                        return 2;
                                        break;
                                }
                            }

                            function namer(d) {
                                return d.name || '';
                                // if (!angular.isUndefined(d.name) && d.name.lastIndexOf('0') == d.name.length - 1) {
                                //     return d.name.slice(d.name.lastIndexOf('00') + 2, d.name.length);
                                // } else if (!angular.isUndefined(d.name) && d.name.lastIndexOf('0') !== d.name.length - 1) {
                                //     return d.name.slice(d.name.lastIndexOf('0') + 1, d.name.length);
                                // } else {
                                //     var reg = new RegExp(/\d+/);
                                //     var f = reg.exec(d.text)
                                //     return f[0];
                                // }
                            }
                        };

                if (window.callPhantom !== undefined){
                    window.callPhantom('takeShot');
                }

    //var s = window.location.search.slice(1,window.location.search.length);
    var s = window.prompt("Enter Patent Number", 1);
    go(s);
