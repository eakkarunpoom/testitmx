import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Item from '../models/item';
import {useState,useEffect} from 'react';

interface ModalProps{
    handleClose:()=>void;
    show:boolean
    selectedItem: Item | null;
    saveEdit: (id: number, name: string, detail: string, price: number, img: string) => void;
}

function ModalEdit({ handleClose, show , selectedItem , saveEdit }: ModalProps):JSX.Element{
    const [nameEdit, setNameEdit] = useState(selectedItem?.name ?? '');
    const [detailEdit, setDetailEdit] = useState(selectedItem?.detail ?? '');
    const [priceEdit, setPriceEdit] = useState(selectedItem?.price ?? 0);
    const [imgEdit, setImgEdit] = useState(selectedItem?.img ?? '');

    function handleName(e: React.ChangeEvent<HTMLInputElement>) {
        setNameEdit(e.target.value);
    }
    function handleDetail(e: React.ChangeEvent<HTMLInputElement>) {
        setDetailEdit(e.target.value);
    }

    function handlePrice(e: React.ChangeEvent<HTMLInputElement>) {
        setPriceEdit(parseInt(e.target.value));
    }

    function handleImg(e: React.ChangeEvent<HTMLInputElement>) {
        setImgEdit(e.target.value)
    }
    
    function useEditEffect(dependency: any) {
        useEffect(() => {
        }, [dependency]);
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        console.log(saveEdit);
        saveEdit(
          selectedItem!.id,
          nameEdit,
          detailEdit,
          priceEdit,
          imgEdit
        );
        handleClose();
      }
      
      useEditEffect(nameEdit);
      useEditEffect(detailEdit);
      useEditEffect(priceEdit);
      useEditEffect(imgEdit);

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='edit-name'>
                    <label>Name : </label>
                    <input type='text' value={nameEdit} onChange={handleName} />
                </div>
                <div className='edit-detail'>
                    <label>Detail : </label>
                    <input type='text' value={detailEdit} onChange={handleDetail}/>
                </div>
                <div className='edit-price'>
                    <label>Price : </label>
                    <input type='number' value={priceEdit} onChange={handlePrice} />
                </div>
                <div className='edit-img'>
                    <label>Image : </label>
                    <input type="file" accept="image/*" onChange={handleImg}/> 
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
    
}

export default ModalEdit;
