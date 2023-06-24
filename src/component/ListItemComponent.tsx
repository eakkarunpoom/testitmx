import Item from "../models/item"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useState } from "react";

interface ItemProps{
    items:Item[]
}

interface DeleteProps{
    onDeleteItem:(id:number)=>void
}

interface EditProps{
    onEditItem:(id:number)=>void
}

function ListItemComponent(props: ItemProps & DeleteProps & EditProps):JSX.Element {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <>
            {props.items.map((element)=>(
                <div key={element.id}>
                    <button onClick={()=>props.onEditItem(element.id)} >Edit</button>
                    <button onClick={()=>props.onDeleteItem(element.id)}>Delete</button>
                    <img src={element.img} />
                    <p>{element.name}</p>
                    <p>{element.detail}</p>
                </div>
            ))}
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal> */}
        </>

    )
}

export default ListItemComponent;