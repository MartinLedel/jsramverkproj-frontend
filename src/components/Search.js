import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button, InputGroup, FormControl } from "react-bootstrap";

const Search = () => {
    const history = useHistory();
    const [searchResult, setSearchResult] = useState("");
    const apiUrl = "http://localhost:1337";

    const savingSearch = event => {
        setSearchResult(event.target.value);
    };

    const searchHandleKeyDown = event => {
        if (event.key === 'Enter') {
            searchStock(event);
        }
    };

    const searchStock = event => {
        event.preventDefault();

        let data = {
            search: searchResult,
        }
        fetch(apiUrl + `/stock/search`, {
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
              history.push(`/stock-page/${res.data[0].stockname}`);
          })
          .catch(error => console.error('Error:', error));
    }

    function validateSearch() {
        return searchResult.length > 0;
    }

    return (
    <div>
      <h1>User search</h1>
      <InputGroup className="mb-3 search-field">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@stock</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={searchResult}
        onChange={savingSearch}
        onKeyDown={searchHandleKeyDown}
      />
      <Button
          block
          disabled={!validateSearch()}
          onClick={searchStock}
      >
          Search
      </Button>
    </InputGroup>
    </div>
    );
};

export default Search;
