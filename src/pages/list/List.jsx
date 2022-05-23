import { format } from "date-fns";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";

const List = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
