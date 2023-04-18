import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { useAppContext } from "../../store/AppContext";
import {
    closeModalsAction,
    openModalCreateFolder,
    savePinInFolderAction
} from "../../store/actions";
import { fetchFoldersAction } from "../../store/actions";
import { useEffect, useState } from "react";

function ModalSavePin({ open }) {
    const { state, dispatch } = useAppContext();
    const [itensLoading, setItensLoading] = useState({});

    const handleClose = () => {
        dispatch(closeModalsAction());
    }

    const handleClickCreateFolder = () => {
        dispatch(openModalCreateFolder());
    }

    const handleClick = async (folderId) => {
        setItensLoading((prevState) => {
            return {
                ...prevState,
                [folderId]: true
            }
        });

        await savePinInFolderAction(dispatch, state.activePinId, folderId);

        setItensLoading((prevState) => {
            return {
                ...prevState,
                [folderId]: false
            }
        });
    }

    const foldersNormalized = state.folders.map(folder => {
        return ({
            ...folder,
            saved: folder.pins.includes(state.activePinId)
        })
    });

    useEffect(() => {
        fetchFoldersAction(dispatch);
    }, []);

    return (
        <Modal
            title='Salvar Pin'
            show={open}
            controls={[
                {
                    label: 'Criar pasta',
                    variant: 'secondary',
                    loading: false,
                    loadingLabel: 'Criando',
                    onClick: handleClickCreateFolder,
                }
            ]}
            onHide={handleClose}
        >
            <ul class="list-group list-group-flush">
                {
                    foldersNormalized.map((folder, folderIndex) => (
                        <li class="list-group-item" key={folderIndex}>
                            <div class="row">
                                <div class="col col-xs-8" >{folder.name}</div>
                                <div class="col col-xs-4 text-end" >
                                    <Button
                                        label={folder.saved ? 'Salvo' : 'Salvar'}
                                        loadingLabel='Salvando'
                                        onClick={() => handleClick(folder.id)}
                                        variant={folder.saved ? 'secondary' : 'primary'}
                                        disabled={folder.saved}
                                        loading={itensLoading[folder.id]}
                                    />
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Modal>
    );
}

export default ModalSavePin;