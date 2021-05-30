import React,{useEffect, useState} from 'react'; 
import './styles.css';
import Filter from './components/filter/filter';
import Header from './components/header/header';
import Result from './components/result/result'; 
function App() {
//SETTING OF DARKMODE THEME.
const [darkMode, setDarkMode]=useState(false); 
//ARRAY TO SHOW THE RESULT OF THE REQUEST.
const [result, setResult] = useState([]);
//CATCH THE VALUE ENTERED BY INPUT.
const [search, setSearch] = useState(""); 
//HOOK THAT INDICATES IF THE SEARCH IS ACTIVE.
const [searchGif, setSearchGif] = useState(false);
//RESULTS LEGEND.
const [showResult, setShowResult] = useState(false);
//HOOK FOR AUTOCOMPLETE
const [complete, setComplete] = useState([]);
//HOOK FOR CATCH THE VALUE OF THE SEARCH AND SHOW IT BY LEGEND.
const [valueInput, setValueInput] = useState("");
//HOOK FOR CLEAN THE INPUT ELEMENT USING AN EVENT ONCLICK.
const [clearInput, setClearInput] = useState(false);

 /**
   * @description useEffect for request to bring a list of gifs from an api.
  /* If the result of the petition exists, it shows 12 gifs on the screen. If it does not exist, it shows a text on the screen of search failed*/
useEffect(()=>{
  if(!!searchGif){

   let api = fetch(`https://api.giphy.com/v1/gifs/search?api_key=2ChuJQreZfShqfStn1d2SjzHXuBI7rT3&q=${search}&limit=12&offset=0&rating=g&lang=es`
  ); 
  api
  .then((response)=>{
    return response.json();
  })
  .then((results)=>{
    setResult(results.data); 
    setValueInput(search); 
    setSearchGif(false); 
    setSearch("");
    setShowResult(true); 
    setClearInput(false); 
  })
  .catch((error)=> console.log("Error", error)); 
  }
},[searchGif])

 /**
   * @description useEffecct to control the autocomplete list.
   * If the result of the petition exists, it shows 4 tags on the screen*/

useEffect(()=>{
  if(!searchGif){
    let autocomplete = fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=2ChuJQreZfShqfStn1d2SjzHXuBI7rT3&q=${search}&limit=4&offset=0&rating=g&lang=es`
  ); 
  autocomplete
  .then((response)=>{
    return response.json();
  })
  .then((results)=>{
    setComplete(results.data); 
  })
  .catch((error)=> console.log("Error", error));  
  }
},[search]); 
  return (
    <div className={darkMode? "App darkMode" : "App"}>
        <Header setDark={setDarkMode}/>
        <Filter search = {search} setSearch = {setSearch} setClearInput={setClearInput} setShowResult={setShowResult} setSearchGif={setSearchGif} complete={complete} setComplete={setComplete} />
        <Result result={result} searchGif={searchGif} showResult={showResult} valueInput={valueInput} clearInput={clearInput} />
    </div>
  );
}
export default App;
