import React, { useState } from "react";
import { Button, FormGroup, FormControl, Modal } from "react-bootstrap";

export const StockInterface = props => {
    const stockname = props.stockname ;
    const [stockBuy, setStockBuy] = useState(0);
    const [showBuy, setShowBuy] = useState(false);
    const handleBuyClose = () => setShowBuy(false);
    const handleBuyShow = () => setShowBuy(true);
    const [stockSell, setStockSell] = useState(0);
    const [showSell, setShowSell] = useState(false);
    const handleSellClose = () => setShowSell(false);
    const handleSellShow = () => setShowSell(true);
    // const apiUrl = "http://localhost:1337";
    const apiUrl = "api.ml-jsramverkproj.me";

    function validateBuySell() {
      return stockBuy > 0 || stockSell > 0;
    }

    const buyStock = event => {
        event.preventDefault();

        let data = {
            stock: stockname,
            email: sessionStorage.getItem('user'),
            amount: stockBuy
        }

        fetch(apiUrl + `/stock/buy/`, {
          method: 'POST',
          body: JSON.stringify(data),
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': sessionStorage.getItem('token'),
          },
        })
          .then(res => {
              return res.json();
          }).then(res => {
              console.log(res);
              handleBuyClose();
          })
          .catch(error => console.error('Error:', error));
    }

    const sellStock = event => {
        event.preventDefault();

        let data = {
            stock: stockname,
            email: sessionStorage.getItem('user'),
            amount: stockSell
        }

        fetch(apiUrl + `/stock/sell/`, {
          method: 'POST',
          body: JSON.stringify(data),
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': sessionStorage.getItem('token'),
          },
        })
          .then(res => {
              return res.json();
          }).then(res => {
              console.log(res);
              handleSellClose();
          })
          .catch(error => console.error('Error:', error));
    }

    return (
    <div>
      <Button variant="success" onClick={handleBuyShow}>
        Buy
      </Button>
      {' '}
      <Button variant="danger" onClick={handleSellShow}>
        Sell
      </Button>

      <Modal show={showBuy} onHide={handleBuyClose}>
        <Modal.Header closeButton>
            <Modal.Title>How much would you like to buy?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormGroup controlId="buy">
              <FormControl
                autoFocus
                value={stockBuy}
                onChange={e => setStockBuy(e.target.value)}
              />
            </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBuyClose}>
            Close
          </Button>
          <Button variant="primary" disabled={!validateBuySell()} onClick={buyStock}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSell} onHide={handleSellClose}>
        <Modal.Header closeButton>
            <Modal.Title>How much would you like to sell?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormGroup controlId="sell">
              <FormControl
                autoFocus
                value={stockSell}
                onChange={e => setStockSell(e.target.value)}
              />
            </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSellClose}>
            Close
          </Button>
          <Button variant="primary" disabled={!validateBuySell()} onClick={sellStock}>
            Sell
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default StockInterface;
