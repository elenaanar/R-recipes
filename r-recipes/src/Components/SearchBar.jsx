import Reach, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css'
import axios from 'axios'


export const SearchBar = ({data, setData, ingredients, setIngredients}) =>  {
    const [input, setInput] = useState("")
    async function handleSubmit(e){
        console.log(input)
        e.preventDefault();
        const query = {ingredients: ingredients, search: input};
        let res = await axios.get("http://localhost:5010/search_recipes", {
            params: query
        })
        setData(res.data);
    }
    return(

       <div className='input-wrapper'>  
            {/*<FaSearch id="search-icon" />*/}
            <input type="text" placeholder="Type to search..."
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            onSubmit={handleSubmit}
            />
            <button type="button" onClick={handleSubmit}>Search</button>
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