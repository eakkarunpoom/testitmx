import { useState,useEffect } from 'react';
import CoverComponent from './component/CoverComponent';
import ListItemComponent from './component/ListItemComponent';
import Item from "../src/models/item"
import FormComponent from './component/FormComponent';


function App() {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [editItem, setEditItem] = useState<number | null>(null);
  function addItem(id:number,name:string,detail:string,price:number,img:string){
    setItems([...items,{id,name,detail,price,img}])
  }
  function deleteID(id:number){
    const deleteItem = items.filter(item=>item.id !== id)
    setItems(deleteItem)
  }
  function editID(id:number){
    setEditItem(id)
    const edit = items.find((item)=>item.id === id)
    console.log(edit)
  }

  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
  },[items])

  return (
    <div>
      <CoverComponent />
      <FormComponent onAddItem={addItem} />
      <h1>PRODUCTS</h1>
      <ListItemComponent items={items} onDeleteItem={deleteID} onEditItem={editID}/>
    </div>
  );
}

export default App;
