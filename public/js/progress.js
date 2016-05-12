var w = window.innerWidth;
var h = window.innerHeight/2.3;

var progressInit = function(){


var countStep = _.map(stepData, function(datum){ return datum["value"] });
var countTime = _.map(stepData, function(datum){ return datum["dateTime"] });



 //---D3----//

 //Width and height
      var barPadding = 40;
      
      var dataset = countStep;

      console.log(dataset);
      
      //Create SVG element
      var svg = d3.select("#progressPage")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#6C7B8A");

      svg.append("text")
         .attr("text-anchor", "middle")
         .attr("id", "backBtn")
          .attr('x',60)
          .attr('y',90)
          .attr("font-family", "sans-serif")
          .attr("font-size", "5em")
          .attr("font-weight", "normal")
          .attr("fill", "white")
          .text("×");
      svg.append("text")
          .attr("text-anchor", "middle")
          .attr("id", "backBtn")
          .attr('x',w/2)
          .attr('y',90)
          .attr("font-family", "sans-serif")
          .attr("font-size", "3em")
          .attr("font-weight", "normal")
          .attr("fill", "white")
          .text("進度");


      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
            return i * (w / dataset.length);
         })
         .attr("y", function(d) {
            return h - (d/10);
         })
         .attr("width", w / dataset.length - barPadding)
         .attr("height", function(d) {
            return d/10;
         })
         .attr("fill", "#AABAC9")
         .on("mouseover", function(d){
            //document.getElementById("numData").innerHTML = d;
            calcuArc(d);
            d3.select(this).style("fill", "#E87975");})
         .on("mouseout", function(){
            d3.select(this).style("fill", "#AABAC9");})

         ;

         //mouseHandel
        // function handleMouseOver(d, i) {  // Add interactivity

        //   // Use D3 to select element, change color and size
        //   d3.select(this).attr({
        //       fill: "orange",
        //       r: radius * 2
        //   });

      //  svg.selectAll("text")
         // .data(dataset)
         // .enter()
         // .append("text")
         // .text(function(d) {
         //     d = Math.ceil(d);
         //     return d;
         // })
         // .attr("text-anchor", "middle")
         // .attr("x", function(d, i) {
         //     return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
         // })
         // .attr("y", function(d) {
         //     return h - (d/10) + 14;
         // })
         // .attr("font-family", "sans-serif")
         // .attr("font-size", "11px")
         // .attr("fill", "white");
      

        // var dayDate = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];
        var dayDate = ["四月", "四月", "四月", "四月", "四月", "四月", "四月"];
        var svg = d3.select("#progressPage")
         .append("svg")
         .attr("width", w)
         .attr("height", h/8);

         svg.append("rect")
         .attr("width", "100%")
         .attr("height", "100%")
         .attr("fill", "#3A4651");
          
        svg.selectAll("text")
         .data(dayDate)
         .enter()
         .append("text")
         .text(function(d) { return d; })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
            return i * (w / dayDate.length) + (w / dayDate.length - barPadding) / 2;
         })
         .attr("y", h/8 - 20)
         .attr("font-family", "sans-serif")
         .attr("font-size", "18px")
         .attr("fill", "white");




      var svg = d3.select("#progressPage")
         .append("svg")
         .attr("width", w)
         .attr("height", h/8);

         svg.append("rect")
         .attr("width", "100%")
         .attr("height", "100%")
         .attr("fill", "#3A4651");
          
        svg.selectAll("text")
         .data(countTime)
         .enter()
         .append("text")
         .text(function(d) {
            d = d.split("-").pop(); 
            return d;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
            return i * (w / countTime.length) + (w / countTime.length - barPadding) / 2;
         })
         .attr("y", 25)
         .attr("font-family", "sans-serif")
         .attr("font-size", "35px")
         .attr("fill", "white");

         // for(i=1; i<7; i++){
         // svg.append('text')
         // .attr('x',i*100)
         // .attr('y',20)
         // .text("movieTitle");
         // }

      // var svg = d3.select("#progressPage")
      //    .append("svg")
      //    .attr("width", w)
      //    .attr("height", h*3);

      //    svg.append("rect")
      //    .attr("width", "100%")
      //    .attr("height", "100%")
      //    .attr("fill", "#ffffff");

    //   var selectedData = stepData[6].value
    //   //Arc
    //   var colors = {
    //     'pink': '#E87975',
    //     'yellow': '#f0ff08',
    //     'green': '#47e495'
    //  };

    //  var color = colors.pink;

    //  var radius = 200;
    //  var border = 12;
    //  var padding = 30;
    //  var startPercent = 0;
    //  var endPercent = 0.85;
    //  // (d/5000)


    //  var twoPi = Math.PI * 2;
    //  var formatPercent = d3.format('.0%');
    //  var boxSize = (radius + padding) * 2;


    //  var count = Math.abs((endPercent - startPercent) / 0.01);
    //  var step = endPercent < startPercent ? -0.01 : 0.01;

    //  var arc = d3.svg.arc()
    //  .startAngle(0)
    //  .innerRadius(radius)
    //  .outerRadius(radius - border);

    //  // var parent = d3.select('div#content');

    //  // var svg = parent.append('svg')
    //  var svg = d3.select("#progressPage")
    //  // .attr('width', boxSize)
    //  // .attr('height', boxSize);
    //      .append("svg")
    //      .attr("width", w)
    //      .attr("height", h*3);

    //      svg.append("rect")
    //      .attr("width", "100%")
    //      .attr("height", "100%")
    //      .attr("fill", "#ffffff");

    //  var defs = svg.append('defs');

    //  var filter = defs.append('filter')
    //  .attr('id', 'blur');

    //  filter.append('feGaussianBlur')
    //  .attr('in', 'SourceGraphic')
    //  .attr('stdDeviation', '7');

    //  var g = svg.append('g')
    //  .attr('transform', 'translate(' + w/ 2 + ',' + h / 1.8 + ')');

    //  var meter = g.append('g')
    //  .attr('class', 'progress-meter');

    //  meter.append('path')
    //  .attr('class', 'background')
    //  .attr('fill', '#ccc')
    //  .attr('fill-opacity', 0.5)
    //  .attr('d', arc.endAngle(twoPi));

    //  var foreground = meter.append('path')
    //  .attr('class', 'foreground')
    //  .attr('fill', color)
    //  .attr('fill-opacity', 1)
    //  .attr('stroke', color)
    //  .attr('stroke-width', 5)
    //  .attr('stroke-opacity', 1)
    //  .attr('filter', 'url(#blur)');

    //  var front = meter.append('path')
    //  .attr('class', 'foreground')
    //  .attr('fill', color)
    //  .attr('fill-opacity', 1);

    //  var numberText = meter.append('text')
    //  .attr('fill', '#fff')
    //  .attr('text-anchor', 'middle')
    //  .attr('dy', '.35em');

    //  function updateProgress(progress) {
    //     foreground.attr('d', arc.endAngle(twoPi * progress));
    //     front.attr('d', arc.endAngle(twoPi * progress));
    //     numberText.text(formatPercent(progress));
    //  }

    //  var progress = startPercent;

    //  (function loops() {
    //     updateProgress(progress);

    //     if (count > 0) {
    //       count--;
    //       progress += step;
    //       setTimeout(loops, 10);
    //    }
    // })();
     
    //   svg.append('text')
    //       .attr("text-anchor", "middle")
    //       .attr('x',w/2)
    //       .attr('y',h/2.5)
    //       .attr("font-family", "sans-serif")
    //       .attr("font-size", "3em")
    //       .attr("font-weight", "normal")
    //       .attr("fill", "#6C7B8A")
    //       .text("今日");

    //   // <g id = "selectedStep">
    //   svg.append('text')
    //       .attr("id","numData")
    //       .attr("text-anchor", "middle")
    //       .attr('x',w/2)
    //       .attr('y',h/1.65)
    //       .attr("font-family", "sans-serif")
    //       .attr("font-size", "6em")
    //       .attr("font-weight", "normal")
    //       .attr("fill", "black")
    //       .text(selectedData);
    //   // </g>

    //   svg.append("line")
    //       .attr("x1", (w/2)-40)
    //       .attr("y1", h/1.45)
    //       .attr("x2", (w/2)+40)
    //       .attr("y2", h/1.45)
    //       .attr('fill', color)
    //       .attr('fill-opacity', 1)
    //       .attr('stroke', color)
    //       .attr('stroke-width', 5)
    //       .attr('stroke-opacity', 1)

    //   svg.append('text')
    //       .attr("text-anchor", "middle")
    //       .attr('x',w/2)
    //       .attr('y',h/1.3)
    //       .attr("font-family", "sans-serif")
    //       .attr("font-size", "2em")
    //       .attr("font-weight", "normal")
    //       .attr("fill", "#6C7B8A")
    //       .text("步數");


    calcuArc();


};


var calcuArc = function(d){




var goal = 5000;
var initData = stepData[6].value;


    //console.log (initData);
      //Arc
      var colors = {
        'pink': '#E87975',
        'yellow': '#f0ff08',
        'green': '#47e495'
     };

     var color = colors.pink;

     var radius = 200;
     var border = 12;
     var padding = 30;
     var startPercent = 0;
     var endPercent = null;


     if(d + "" == "undefined"){
        endPercent = initData/goal;
        d = 4012;

        //console.log(endPercent);
     }else{
        endPercent = d/goal;
        // endPercent = (Math.round((d/5000)*100))/100;
        //console.log(endPercent);
     }
     console.log(endPercent);


     var twoPi = Math.PI * 2;
     var formatPercent = d3.format('.0%');
     var boxSize = (radius + padding) * 2;


     var count = Math.abs((endPercent - startPercent) / 0.01);
     var step = endPercent < startPercent ? -0.01 : 0.01;

     //console.log("count" + count + ","+ step );

     var arc = d3.svg.arc()
     .startAngle(0)
     .innerRadius(radius)
     .outerRadius(radius - border);

     // var parent = d3.select('div#content');

     // var svg = parent.append('svg')

     var oldSvg = document.getElementById("myProgress");
     $("#myProgress").remove();

     var svg = d3.select("#progressPage")
     // .attr('width', boxSize)
     // .attr('height', boxSize);
         .append("svg")
         .attr("id", "myProgress")
         .attr("width", w)
         .attr("height", h*3);

         svg.append("rect")
         .attr("width", "100%")
         .attr("height", "100%")
         .attr("fill", "#ffffff");

     var defs = svg.append('defs');

     var filter = defs.append('filter')
     .attr('id', 'blur');

     filter.append('feGaussianBlur')
     .attr('in', 'SourceGraphic')
     .attr('stdDeviation', '7');

     var g = svg.append('g')
     .attr('transform', 'translate(' + w/ 2 + ',' + h / 1.8 + ')');

     var meter = g.append('g')
     .attr('class', 'progress-meter');

     meter.append('path')
     .attr('class', 'background')
     .attr('fill', '#ccc')
     .attr('fill-opacity', 0.5)
     .attr('d', arc.endAngle(twoPi));

     var foreground = meter.append('path')
     .attr('class', 'foreground')
     .attr('fill', color)
     .attr('fill-opacity', 1)
     .attr('stroke', color)
     .attr('stroke-width', 5)
     .attr('stroke-opacity', 1)
     .attr('filter', 'url(#blur)');

     var front = meter.append('path')
     .attr('class', 'foreground')
     .attr('fill', color)
     .attr('fill-opacity', 1);

     var numberText = meter.append('text')
     .attr('fill', '#fff')
     .attr('text-anchor', 'middle')
     .attr('dy', '.35em');

     function updateProgress(progress) {
        foreground.attr('d', arc.endAngle(twoPi * progress));
        front.attr('d', arc.endAngle(twoPi * progress));
        numberText.text(formatPercent(progress));
        //console.log(progress)        
     }

     var progress = startPercent;

     (function loops() {
        updateProgress(progress);
        if (count > 0) {
          count--;
          progress += step;
          setTimeout(loops, 10);
       }
    })();
     
      svg.append('text')
          .attr("text-anchor", "middle")
          .attr('x',w/2)
          .attr('y',h/2.5)
          .attr("font-family", "sans-serif")
          .attr("font-size", "3em")
          .attr("font-weight", "normal")
          .attr("fill", "#6C7B8A")
          .text("今日");

      // <g id = "selectedStep">
      svg.append('text')
          .attr("id","numData")
          .attr("text-anchor", "middle")
          .attr('x',w/2)
          .attr('y',h/1.65)
          .attr("font-family", "sans-serif")
          .attr("font-size", "6em")
          .attr("font-weight", "normal")
          .attr("fill", "black")
          .text(initData);
      // </g>

      svg.append("line")
          .attr("x1", (w/2)-40)
          .attr("y1", h/1.45)
          .attr("x2", (w/2)+40)
          .attr("y2", h/1.45)
          .attr('fill', color)
          .attr('fill-opacity', 1)
          .attr('stroke', color)
          .attr('stroke-width', 5)
          .attr('stroke-opacity', 1)

      svg.append('text')
          .attr("text-anchor", "middle")
          .attr('x',w/2)
          .attr('y',h/1.3)
          .attr("font-family", "sans-serif")
          .attr("font-size", "2em")
          .attr("font-weight", "normal")
          .attr("fill", "#6C7B8A")
          .text("步數");

      svg.append('text')
          .attr("text-anchor", "middle")
          .attr('x',w/2)
          .attr('y',h)
          .attr("font-family", "sans-serif")
          .attr("font-size", "2em")
          .attr("font-weight", "normal")
          .attr("fill", "#6C7B8A")
          .text("老爸 完成了 所有任務");

    document.getElementById("numData").innerHTML = d;


}
