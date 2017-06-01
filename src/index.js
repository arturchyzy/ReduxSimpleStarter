import React from "react";
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDEO72E2rqSRyartmI93-T822kcof2aKT4';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// Take this component's HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));