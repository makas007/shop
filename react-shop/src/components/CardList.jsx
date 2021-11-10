import React from "react";
import Card from "./Card";


function CardList(props) {
  // const [allData, setAllData] = useState(null)
  console.log(props.data, 'card list');
   return (
    
    <div className="card-list">
      {props.data.map((item) => (
        <Card card={item}/>
      ))}
    </div>
  )
}
export default CardList;