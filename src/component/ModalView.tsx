import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Item from '../models/item';
import "./modalView.css";

interface ViewProps{
    handleCloseProduct:()=>void;
    showProduct:boolean;
    selectedItem: Item | null;
}

function ModalView({handleCloseProduct , showProduct , selectedItem}:ViewProps) {
    return(
        <Modal show={showProduct} onHide={()=>handleCloseProduct()}>
            <Modal.Header closeButton>
                <Modal.Title>View Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='view-name-product'>
                    Name : {selectedItem?.name}
                </div>
                <div className='view-detail-product'>
                    Detail : {selectedItem?.detail}
                </div>
                <div className='view-price-product'>
                    Price : {selectedItem?.price}
                </div>
                <div className="view-img-product">
                    Image: <img src={selectedItem?.img} alt="Product" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleCloseProduct()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalView;