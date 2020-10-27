import React from "react";
import StockInterface from './StockInterface.js';
import StockChart from './StockChart.js';

const StockPage = ({ match }) => {
    const stockname = match.params.stock ;

    return (
    <div>
      <StockInterface stockname={stockname}></StockInterface>
      <StockChart stockname={stockname}></StockChart>
    </div>
    );
};

export default StockPage;
