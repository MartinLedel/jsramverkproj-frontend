import React, { useEffect } from "react";
import io from 'socket.io-client';
import Rickshaw from 'rickshaw';
import 'rickshaw/rickshaw.min.css';
let socket;

export const StockChart = props => {
    // const socketUrl = "http://localhost:9300";
    const socketUrl = "https://socket.ml-jsramverk.me";
    let stockname = props.stockname

    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w-]+/g, '')       // Remove all non-word chars
            .replace(/--+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }
    useEffect(() => {
        socket = io(socketUrl);
    }, []);

    useEffect(() => {
        socket.emit('stock name', {
            name: stockname,
        });
    }, [stockname]);

    useEffect(() => {
        let graphs = {};
        let first = true;
        let graphContainer = document.getElementById("graphs");

        socket.on('stocks', function (res) {
            if (first) {
               var palette = new Rickshaw.Color.Palette({ scheme: 'colorwheel' });

               res.map((stock) => {
                   let graphTitle = document.createElement("h1");

                   graphTitle.textContent = stock.name;

                   let graphElement = document.createElement("div");

                   graphContainer.appendChild(graphTitle);
                   graphContainer.appendChild(graphElement);

                   let graph = new Rickshaw.Graph({
                       element: graphElement,
                       width: "500",
                       height: "300",
                       renderer: "line",
                       series: new Rickshaw.Series.FixedDuration([{
                           name: stock.name,
                           color: palette.color(),
                       }], undefined, {
                           timeInterval: 5000,
                           maxDataPoints: 1000,
                           timeBase: new Date().getTime() / 1000
                       })
                   });

                   graph.configure({
                       width: graphContainer.clientWidth,
                   });

                   new Rickshaw.Graph.Axis.Time( { graph: graph } );

                   new Rickshaw.Graph.Axis.Y({
                       graph: graph,
                       orientation: 'left',
                       tickFormat: Rickshaw.Fixtures.Number.formatKMBT
                   });

                   new Rickshaw.Graph.HoverDetail({
                       graph: graph
                   });

                   graph.render();

                   let slug = slugify(stock.name);

                   graphs[slug] = {
                       name: stock.name,
                       graph: graph,
                   };
                   return "Done";
               });
               first = false;
           }

           res.map((stock) => {
               let slug = slugify(stock.name);
               let data = {};

               data[stock.name] = stock.startingPoint;
               graphs[slug].graph.series.addData(data);
               graphs[slug].graph.render();

               return "Done";
           });
       });
    }, []);
    return (
        <div className="graphs" id="graphs"></div>
    );
};
export default StockChart;
