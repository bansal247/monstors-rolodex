// import { Component, forwardRef } from "react";
import './card-list.styles.css';
import Card from '../card/card.component.jsx'


const CardList = (props, forwardRef) => {
    const {monsters} = props; // Whenever props change rerender
       return (
        <div className="card-list">
            {
                monsters.map((monster)=>{
                    
                    return(
                    <Card key={monster.id} monster = {monster}/>
                );
                })
            }
        </div>
       );
}


// class CardList extends Component{
//     render(){
//         const {monsters} = this.props // Whenever props change rerender
//        return (
//         <div className="card-list">
//             {
//                 monsters.map((monster)=>{

//                     return(
//                     <Card monster = {monster}/>
//                 );
//                 })
//             }
//         </div>
//        );
//     }
// }

export default CardList;