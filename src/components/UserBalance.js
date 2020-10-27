import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, Modal } from "react-bootstrap";

const UserBalance = () => {
    const [balance, setBalance] = useState(0);
    const [userData, setUserData] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const apiUrl = "http://localhost:1337";

    useEffect(() => {
        fetch(apiUrl + `/stock/add-balance/${sessionStorage.getItem('user')}`, {
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
              setUserData(res.data[0].balance);
          })
          .catch(error => console.error('Error:', error));
    }, []);

    function validateForm() {
        return balance > 0;
    }

    const addBalance = event => {
        event.preventDefault();

        let data = {
            email: sessionStorage.getItem('user'),
            balance: balance
        }

        fetch(apiUrl + `/stock/add-balance`, {
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
              setUserData(res.data[0].balance);
              handleClose();
          })
          .catch(error => console.error('Error:', error));
    }

    return (

    <div>
      <h1>User balance</h1>
      <p>
        Current balance: {userData}
      </p>
      <Button variant="primary" onClick={handleShow}>
        Add balance to your account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>How much would you like to add?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormGroup controlId="balance">
              <FormControl
                autoFocus
                value={balance}
                onChange={e => setBalance(e.target.value)}
              />
            </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={!validateForm()} onClick={addBalance}>
            Add balance
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default UserBalance;
