import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Pane } from "evergreen-ui";
import Input from "./Input";

export default function ImportAPI() {
  const [building, setBuilding] = useState([]);
  const [isloading, SetIsloading] = useState(true);

  async function getData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setBuilding(response.data);
        SetIsloading(false);
      })
      .catch((error) => {
        console.error("Error while fetching the data", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Pane display="flex" style={{ justifyContent: "center" }}>
        {isloading ? (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={100}
          >
            <Spinner delay={300} />{" "}
            <p style={{ margin: "5px" }}> Getting the data... </p>
          </Pane>
        ) : (
          <Input building={building} />
        )}
      </Pane>
    </div>
  );
}
