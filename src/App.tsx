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
    const itemWithBase64 = { id, name, detail, price, img };
    setItems([...items, itemWithBase64]);
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

  function saveEdit(id: number, name: string, detail: string, price: number, img: string) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name, detail, price, img };
      }
      return item;
    });
    setItems(updatedItems);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length > 0) {
      const base64Images = items.map((item) => item.img);
      localStorage.setItem("images", JSON.stringify(base64Images));
    }
  }, [items]);
  
  return (
    <div>
      <CoverComponent />
      <FormComponent onAddItem={addItem} />
      <h1 style={{display : "flex", justifyContent: "center", color:"blue"}}>PRODUCTS</h1>
      <ListItemComponent items={items} onDeleteItem={deleteID} onEditItem={editID} saveEdit={saveEdit} />
    </div>
  );
}

export default App;
