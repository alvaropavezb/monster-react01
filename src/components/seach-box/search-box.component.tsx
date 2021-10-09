import React from "react";
import './search-box.styles.css';


type SearchBoxType = {
    placeholder:string,
    handleChange:(e:any)=>void;
}

export const SearchBox = (props:SearchBoxType) =>(
    <input
          onChange={props.handleChange}
          type="text"
          placeholder={props.placeholder}
          className="search"
        />
)