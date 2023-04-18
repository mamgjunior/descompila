import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { closeModalsAction, saveFolderAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";
import { saveFolderInitType, saveFolderSuccessType } from "../../store/types";

function ModalCreateFolder({ open }) {
    const { state, dispatch } = useAppContext();

    const [folderName, setFolderName] = useState('');

    const handleChange = (event) => {
        setFolderName(event.target.value);
    };

    const handleClose = () => {
        dispatch(closeModalsAction());
        setFolderName('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveFolderAction(dispatch, folderName, state.activePinId);
    };

    useEffect(() => {
        if (state.type === saveFolderSuccessType)
            handleClose();
    }, [state.type]);

    return (
        <Modal
            title='Criar pasta'
            show={open}
            controls={[
                {
                    label: 'Criar e salvar',
                    variant: 'secondary',
                    loading: state.type === saveFolderInitType,
                    loadingLabel: 'Criando',
                    type: 'submit',
                    form: 'form-criar-pasta',
                }
            ]}
            onHide={handleClose}
        >
            <form onSubmit={handleSubmit} id="form-criar-pasta">
                <div class="mb-3">
                    <label class="form-label">Nome da pasta</label>
                    <input
                        type="Text"
                        class="form-control"
                        placeholder="Ex: Matemática"
                        value={folderName}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </Modal>
    );
}

export default ModalCreateFolder;