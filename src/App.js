import React, { Component } from 'react';

// import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
// import RespectModal from './components/RespectModal/RespectModal';

import './App.css';

class App extends Component{
    render(){
        return(
            <div>
                {/* <RespectModal/> */}
                {/* <Header /> */}
                <SearchBar/>
            </div>
        );
    };
};

export default App;