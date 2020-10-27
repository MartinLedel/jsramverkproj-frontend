import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const UserOverview = () => {
    const [userData, setUserData] = useState({
        balance: null,
        stocks: [],
    });
    const apiUrl = "http://localhost:1337";

    useEffect(() => {
        fetch(apiUrl + `/stock/overview/${sessionStorage.getItem('user')}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('token'),
            },
        })
          .then(res => res.json())
          .then(res => {
              console.log(res);

              setUserData({
                  balance: res.data[0].balance,
                  stocks: res.data[0].stocks
              });
          })
          .catch(error => console.error('Error:', error));
    }, []);

    return (
    <main>
      <h1>User overview</h1>
      <p>
        Current balance: {userData.balance}
      </p>
      <h3>Stocks</h3>
      <Container fluid>
        <Row>
            {userData.stocks.map((stock, i) => (
                <Col sm={4}>
                <p key={i}>
                    {stock.stockname}: {stock.qty}
                </p>
                </Col>
            ))}
        </Row>
      </Container>
    </main>
    );
};
export default UserOverview;
