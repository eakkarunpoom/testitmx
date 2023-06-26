import Item from "../models/item"
import { useState } from "react";
import ModalEdit from "../component/ModalEdit";
import { Card,Button,Row } from 'react-bootstrap';
import "./listProduct.css"
import ModalView from "./ModalView";
interface ItemProps{
    items:Item[]
}

interface DeleteProps{
    onDeleteItem:(id:number)=>void
}

interface EditProps{
    onEditItem:(id:number)=>void;
    saveEdit:(id:number,name:string,detail:string,price:number,img:string)=>void
}

function ListItemComponent(props: ItemProps & DeleteProps & EditProps ):JSX.Element {
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);


    const handleUpdate = (id: number) => {
        const selectedItem = props.items.find((element) => element.id === id) || null;
        setSelectedItem(selectedItem);
        setShow(true);
    };

    const handleView = (id:number) => {
        const viewItem = props.items.find((element) => element.id === id) || null;
        setSelectedItem(viewItem);
        setShowProduct(true)
    }

    console.log(show,showProduct)
    const handleCloseProduct = () => setShowProduct(false);
    const handleClose = () => setShow(false);

    return(
        <Row className="list-product" xs={1} md={1} lg={2}>
            {props.items.map((element)=>(
                <Card style={{ width: '36rem' , margin: '8px'}} key={element.id}>
                    <Row className="content-product">
                        <div className="pic-product">
                            <img src={element.img} />
                        </div>
                        <div className="title-product">
                            <p>Name : {element.name}</p>
                            <p>Detail : {element.detail}</p>
                            <div className="btn-list-product">
                                <Button variant="dark" onClick={()=>handleView(element.id)}>View</Button>
                                <Button variant="secondary" onClick={() => { props.onEditItem(element.id); handleUpdate(element.id); }}>Edit</Button>
                                <Button variant="danger" onClick={()=>props.onDeleteItem(element.id)}>Delete</Button>
                            </div>
                        </div>
                    </Row>
                </Card>
            ))}
            {
                show && <ModalEdit handleClose={handleClose} show={show} selectedItem={selectedItem} saveEdit={props.saveEdit}/>
            }
            {
                showProduct && <ModalView handleCloseProduct={handleCloseProduct} showProduct={showProduct} selectedItem={selectedItem}/>
            }
        </Row>
    )
}

export default ListItemComponent;