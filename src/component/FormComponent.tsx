import {useState} from 'react';

interface FormProp{
    onAddItem:(id:number,name:string,detail:string,price:number,img:string)=>void
    
}

function FormComponent({onAddItem}:FormProp):JSX.Element{
    const [addID,setID] = useState(0)
    const [addName, setAddName] = useState("");
    const [addDetail, setAddDetail] = useState("");
    const [addPrice, setAddPrice] = useState(0);
    const [addImg, setAddImg] = useState("");

    function generateID(){
        return setID(Math.random()*100)
    }

    function saveItem(e:React.FormEvent){
        e.preventDefault();
        if(!addName || !addDetail || !addPrice || !addImg){
            alert("Please input information")
        }else {
            onAddItem(addID,addName,addDetail,addPrice,addImg)
            setAddName("");
            setAddDetail("");
            setAddPrice(0);
            setAddImg("")
        }
    }
    return(
        <form onSubmit={saveItem}>
            <input type="text" placeholder="Input name product" onChange={(e)=>setAddName(e.target.value)} value={addName}/>
            <input type="text" placeholder="Input detail product" onChange={(e)=>setAddDetail(e.target.value)} value={addDetail}/>
            <input type="text" placeholder="Input price product" onChange={(e)=>(setAddPrice(parseInt(e.target.value)))} value={addPrice}/>
            <input type="file" accept="image/*" onChange={(e)=>setAddImg(e.target.value)} value={addImg}/> 
            <button type="submit" onClick={generateID}>Add Product</button>
        </form>
    )
}

export default FormComponent;