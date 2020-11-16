import React, { Component } from 'react';
import { FaSistrix } from 'react-icons/fa';

export default function Search_bar(props) {
    return (
        <div className="search-box float-right">
            <form className="form" onSubmit={(e)=>props.changeWeather(e)}>
                <input type="text" placeholder="Enter Location" className="search-txt" 
                onChange={(e)=>props.changeRegion(e.target.value)} required />
                <button type="submit" className="search-btn"><FaSistrix /></button> 
            </form>
        </div>
    );
}