import React, { useState, useEffect } from 'react';
import { Component } from 'react';
class DataFetching extends Component {
    static displayName = DataFetching.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }
    populateData() {
        fetch('socialfly')
            .then(response => response.json())
            .then(data => console.log(data));

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }

  


}

export default DataFetching;