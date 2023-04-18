import ReactDOM from "react-dom";
import Alert from "react-bootstrap/Alert";

import "./index.css";

function Notification({ message, variant = 'success', onClose }) {
    return ReactDOM.createPortal(
        <div 
            class="notification"
        >
            <Alert
                variant={variant}
                onClose={onClose}
                dismissible
            >
                {message}
            </Alert>
        </div>,
        document.body
    );
}

export default Notification;