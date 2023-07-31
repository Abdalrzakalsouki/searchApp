import React, { useState } from "react";
import { Radio, SearchInput, Button, Pane } from "evergreen-ui";
import Result from "./Result";
import "../App.css";

export default function Input(props) {
  const [radiovalue, setradiovalue] = useState("name");
  const [searchvalue, setsearchvalue] = useState("");
  const [searchresult, setsearchresult] = useState([]);
  const [error, seterror] = useState(false);
  const [scuess, setscuess] = useState(false);
  const [message, setmessage] = useState("");

  const getObjectFromJSONArray = (json, keyName, value) => {
    let tempary = json?.filter(
      (child) => child[keyName]?.toLowerCase() === value?.toLowerCase()
    );
    if (tempary.length === 0 || tempary === undefined) {
      setmessage("Nothing found");
    } else {
      setmessage("");
    }
    return tempary;
  };

  const getObjectFromJSONArray1 = (json, keyName, value) => {
    let temp = parseInt(value);
    let tempary = json?.filter((child) => child[keyName] === temp);
    if (tempary.length === 0 || tempary === undefined) {
      setmessage("Nothing found");
    } else {
      setmessage("");
    }
    return tempary;
  };

  const handleSearch = () => {
    try {
      switch (radiovalue) {
        case "name":
          const byName = getObjectFromJSONArray(
            props.building,
            "name",
            searchvalue
          );
          setsearchresult(byName);
          setscuess(true);
          return byName;
        case "location":
          const byLocation = getObjectFromJSONArray(
            props.building,
            "location",
            searchvalue
          );
          setsearchresult(byLocation);
          setscuess(true);
          return byLocation;
        case "number":
          const byNumber = getObjectFromJSONArray1(
            props.building,
            "number",
            searchvalue
          );
          setsearchresult(byNumber);
          setscuess(true);
          return byNumber;
        default:
          setscuess(true);
          const defaultvalue = getObjectFromJSONArray(
            props.building,
            "name",
            searchvalue
          );
          setsearchresult(defaultvalue);
          setscuess(true);
          return defaultvalue;
      }
    } catch (error) {
      console.error("Error while getting the data", error);
      seterror(true);
    }
  };

  const handleSearchPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div>
      <p id="radiotext">
        You are searching by: <b style={{ fontSize: "20px" }}> {radiovalue} </b>{" "}
      </p>
      <Pane display="flex" justifyContent="center" id="something">
        <Radio
          className="radioitems"
          size={30}
          marginRight={140}
          name="name"
          checked={radiovalue === "name"}
          value="name"
          label="Name"
          onChange={(e) => {
            setradiovalue(e.target.value);
          }}
        />
        <Radio
          id="test"
          className="radioitems"
          size={30}
          marginRight={140}
          name="location"
          checked={radiovalue === "location"}
          value="location"
          label="Location"
          onChange={(e) => {
            setradiovalue(e.target.value);
          }}
        />
        <Radio
          className="radioitems"
          size={30}
          marginRight={50}
          name="number"
          checked={radiovalue === "number"}
          value="number"
          label="Number"
          onChange={(e) => {
            setradiovalue(e.target.value);
          }}
        />
      </Pane>
      <Pane display="flex" justifyContent="center">
        <SearchInput
          id="search"
          placeholder="Search for a building"
          height={45}
          width={500}
          marginBottom={40}
          value={searchvalue}
          onChange={(e) => setsearchvalue(e.target.value)}
          onKeyDown={(e) => handleSearchPress(e)}
        />
        <Button
          id="button"
          appearance="primary"
          height={45}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Pane>
      <Pane display="flex" justifyContent="center">
        {scuess ? <Result result={searchresult} /> : <></>}
        <h3>{message}</h3>
        {error ? (
          <h4 id="error" style={{ color: "#e40017" }}>
            Error happened!
          </h4>
        ) : (
          <></>
        )}
      </Pane>
    </div>
  );
}
