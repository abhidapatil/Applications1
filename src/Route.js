import React from "react";
import "./style.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = (props) => <h1>Welcome Home</h1>

 
export default function Route() {

    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
        </div>
      </Router>
    );
  }


