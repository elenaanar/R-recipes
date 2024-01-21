import Reach from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css'

export const SearchBar = () =>  {
    return(
        <div className='input-wrapper'> 
            <FaSearch id="search-icon" />
            <input type="text" placeholder="Type to search..." />
            <button type="button">Enter</button>
        </div>
    );
}