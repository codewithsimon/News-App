import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <Router>          
          <LoadingBar
            color='#ffc107'
            height={4}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" country="us" category="general" pageSize={this.pageSize} />} />
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="business" country="us" category="business" pageSize={this.pageSize} />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="entertainment" country="us" category="entertainment" pageSize={this.pageSize} />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="health" country="us" category="health" pageSize={this.pageSize} />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" country="us" category="science" pageSize={this.pageSize} />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="sports" country="us" category="sports" pageSize={this.pageSize} />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="technology" country="us" category="technology" pageSize={this.pageSize} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

