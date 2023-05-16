import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

  //   this.state = {
  //     monsters: [
  //     {
  //       name:'Linda'
  //     },
  //     {
  //       name:'Frank'
  //     },
  //     {
  //       name:'Jacky'
  //     },
  //   ]
  // };
      this.state = {
        monsters:[],
        searchField:"",
      };
      // console.log('constructor');

  }

  componentDidMount(){ // only happens one time
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((respose)=>respose.json())
    .then((users)=> this.setState(()=>{
      return {monsters:users};
    }
    )
    )
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLowerCase()
    this.setState(
      ()=>{
        return {searchField}
      }
    )

  } // react will create anonymous function again and again so we are create a non anonymous function

  render(){
    // console.log('render');
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      className = 'monsters-search-box'
      onChangeHandler = {onSearchChange}
      placeholder = 'search monster' />
      <CardList monsters = {filteredMonsters}/>
    </div>
    );
  }

}

export default App;
