import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import Router from "next/router";
import { Card, Form } from 'react-bootstrap';

const Widget_v = (props) => {
  // let origin_country = [];

  // const [originOption, setOriginOption] = useState([]);
  // const [origin, setOrigin] = useState();
  // const [originv, setOriginv] = useState();
  // const [destinationOption, setDestinationOption] = useState([]);
  // const [destination, setDestination] = useState("");
  const [textShow, setTextShow ] = useState(false);
  const [sources, setSources] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [sourceName, setSourceName] = useState('Select...');
  const [sourceNameExt, setSourceNameExt] = useState('');
  const [toggleSource, settoggleSource] = useState(false);
  const [visitCountries, setVisitCountries] = useState([]);
  const [openToggle, setOpenToggle ] = useState(false);
  const [aimPlaceholder, setAimPlaceholder] = useState('Select...')
  const [aimData, setAimData] = useState('');

  const clickOriginCountry = async()=>{
   
}

const setOriginOnClick = async(e)=>{ 
  
}

const sourceInputClick = async()=>{
  
}
const handleSelect = ()=>{
}
const handleSelectAim = ()=>{}
const handleSourceName = async(e)=>{
    }
  
  
 

const visitInputClick = ()=>{
 
}
const handleVisitClick = (e)=>{
 
}

const GetEvisa = ()=>{

}

  return (
    <div className="widget_750 widgetform">
      <h4>
        Fly Anywhere.
        <br />
        Get an eVisa
      </h4>
      <form>
        <div className="ftv-field">
          <div className="citizenField">
            {textShow && <p> Lang is not available default set lang "en-in"</p>}
            <Form.Label htmlFor="input1">I am a citizen of</Form.Label>
            <Form.Control
              type="text"
              value={sourceName || ""}
              placeholder="Select.."
              onChange={handleSelect}
              onClick={sourceInputClick}
            />

            {toggleSource && Array.isArray(sources) ? (
              <ul>
                {sources.map((source) => {
                  return (
                    <li
                      key={source.extention}
                      data-ext={source.extention}
                      onClick={(e) => handleSourceName(e)}
                    >
                      {source.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="ftv-field">
          <div className="citizenField">
            <Form.Label htmlFor="input2">Planning to visit</Form.Label>
            <Form.Control
              placeholder={aimPlaceholder}
              type="text"
              value={aimData || ""}
              onChange={handleSelectAim}
              onClick={visitInputClick}
            />
            {openToggle && Array.isArray(visitCountries) ? (
              <ul>
                {visitCountries.map((visit, index) => {
                  return (
                    <li key={index} onClick={(e) => handleVisitClick(e)}>
                      {visit.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>

        <button type="button" className="btn btn-lg btn2" onClick={GetEvisa}>
          Get an eVisa
        </button>
      </form>
    </div>
  );
};

export default Widget_v;
