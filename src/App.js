import './App.css';
// import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';

// There are no lifecycles in functional component
// Functional components rerender when there is change in hooks and props
const App = ()=>{
  const [searchField,setSearchField] = useState(''); // value,setValue
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // useEffect(()=>{Call abck function},[Whenever any value change here use callback function])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((respose)=>respose.json())
    .then((users)=> setMonsters(users));
  },[]); //only one time

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)

  }

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchField]);

  

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      className = 'monsters-search-box'
      onChangeHandler = {onSearchChange}
      placeholder = 'search monster' />
      <CardList monsters = {filteredMonsters}/>
    </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();

//   //   this.state = {
//   //     monsters: [
//   //     {
//   //       name:'Linda'
//   //     },
//   //     {
//   //       name:'Frank'
//   //     },
//   //     {
//   //       name:'Jacky'
//   //     },
//   //   ]
//   // };
//       this.state = {
//         monsters:[],
//         searchField:"",
//       };
//       // console.log('constructor');

//   }

//   componentDidMount(){ // only happens one time
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((respose)=>respose.json())
//     .then((users)=> this.setState(()=>{
//       return {monsters:users};
//     }
//     )
//     )
//   }

//   onSearchChange = (event)=>{
//     const searchField = event.target.value.toLowerCase()
//     this.setState(
//       ()=>{
//         return {searchField}
//       }
//     )

//   } // react will create anonymous function again and again so we are create a non anonymous function

//   render(){
//     // console.log('render');
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//     <div className='App'>
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox 
//       className = 'monsters-search-box'
//       onChangeHandler = {onSearchChange}
//       placeholder = 'search monster' />
//       <CardList monsters = {filteredMonsters}/>
//     </div>
//     );
//   }

// }

export default App;
