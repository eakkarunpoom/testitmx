import {useState} from 'react';
import { Container,Button } from 'react-bootstrap';
import "./formComponent.css"

interface FormProp{
    onAddItem:(id:number,name:string,detail:string,price:number,img:string)=>void
}

function FormComponent({onAddItem}:FormProp):JSX.Element{
    const [addID,setID] = useState(0)
    const [addName, setAddName] = useState("");
    const [addDetail, setAddDetail] = useState("");
    const [addPrice, setAddPrice] = useState(0);
    const [addImg, setAddImg] = useState<string | null>('');

    function generateID(){
        return setID(Math.random()*100)
    }

    function saveItem(e:React.FormEvent){
        e.preventDefault();
        if(!addName || !addDetail || !addPrice || !addImg){
            alert("Please input information")
        }else{
            onAddItem(addID,addName,addDetail,addPrice,addImg)
            setAddName("");
            setAddDetail("");
            setAddPrice(0);
            setAddImg(null)
        }
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            setAddImg(base64String);
          };
          reader.readAsDataURL(file);
        }
    }

    return(
        <Container>
            <form onSubmit={saveItem}>
                <div className='info-form'>
                    <div>
                        <label>Name Product : </label>
                        <input type="text" placeholder="Input name product" onChange={(e)=>setAddName(e.target.value)} value={addName}/>
                    </div>
                    <div>
                        <label>Detail Product : </label>
                        <input type="text" placeholder="Input detail product" onChange={(e)=>setAddDetail(e.target.value)} value={addDetail}/>
                    </div>
                    <div>
                        <label>Price Product : </label>
                        <input type="number" placeholder="Input price product" onChange={(e)=>(setAddPrice(parseInt(e.target.value)))} value={addPrice}/>
                    </div>
                    <div>
                        <label>Image Product : </label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                </div>
                <div className='btn-form'>
                    <Button type="submit" onClick={generateID} variant="dark">Add Product</Button>
                </div>            
            </form>
        </Container>

    )
}

export default FormComponent;