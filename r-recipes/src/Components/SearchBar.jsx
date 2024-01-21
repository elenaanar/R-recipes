import Reach, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css'


export const SearchBar = () =>  {
    const [input, setInput] = useState("")
    return(
       <div className='input-wrapper'>  
            <FaSearch id="search-icon" />
            <input type="text" placeholder="Type to search..."
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            />
            <button type="button">Enter</button>
        </div>
    );
}


// import Reach, {useState} from 'react';
// import {FaSearch} from 'react-icons/fa';
// import './SearchBar.css'

// export const SearchBar = () =>  {
//     const [input, setInput] = useState("");
//     return(
//         <div className='input-wrapper'>  
//             <FaSearch id="search-icon" />
//             <input type="text" placeholder="Type to search..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)} 
//             />
//             <button type="button">Enter</button>
//         </div>
//     );
// }


//     const [input, setInput] = useState("");

//     const fetchData = (value)=> {
//         fetch("https://jsonplaceholder.typicode.com/users ")
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json);
//         });
//     };

//     const handleChange = (value) => {
//         setInput(value)
//         fetchData(value) //async
//     };