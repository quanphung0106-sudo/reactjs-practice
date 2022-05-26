import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import "./list.css";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8808/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

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
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                dates[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>

            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small> per night</small>
                </span>
                <input
                  onChange={(e) => setMin(e.target.value)}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small> per night</small>
                </span>
                <input
                  onChange={(e) => setMax(e.target.value)}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  min={1}
                  placeholder={options.adult}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  min={0}
                  placeholder={options.children}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  min={1}
                  placeholder={options.room}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
