import React from "react";
import {InputGroup, Form, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {resetSearchQuery, setSearchQuery, setSortValue} from "../store/actionCreators";

const SortAndSearchForm = () => {
  const { searchQuery, select } = useSelector((state) => state.sortAndSearch);
  const dispatch = useDispatch();
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search..."
          aria-describedby="basic-addon2"
          value={searchQuery}
          onChange={(e)=>dispatch(setSearchQuery(e.target.value))}
        />
          <Button variant="outline-secondary" id="button-addon2" onClick={()=>dispatch(resetSearchQuery())}>
              &#x2716;
          </Button>
      </InputGroup>

      <Form.Select aria-label="Default select example" value={select} onChange={(e)=>dispatch(setSortValue(e.target.value))}>
        <option value="default">Sorting by...</option>
        <option value="title">Title</option>
        <option value="body">Body</option>
      </Form.Select>
    </div>
  );
};

export default SortAndSearchForm;