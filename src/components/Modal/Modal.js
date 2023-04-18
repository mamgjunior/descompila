import ModalBS from 'react-bootstrap/Modal';
import Button from '../Button/Button';

function Modal({ title, children, show, controls = [], onHide }) {
    return (
        <ModalBS show={show} onHide={onHide}>
            <ModalBS.Header closeButton>
                <ModalBS.Title>{title}</ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body>{children}</ModalBS.Body>
            <ModalBS.Footer>
                {
                    controls.map((control, index) => (
                        <Button
                            key={index}
                            {...control}
                        />
                    ))
                }
            </ModalBS.Footer>
        </ModalBS>
    );
}

export default Modal;