import {
    openModalSavePinType,
    closeModalsType,
    fetchFoldersInitType,
    fetchFoldersSuccessType,
    openModalCreateFolderType,
    saveFolderInitType,
    saveFolderSuccessType,
    savePinInFolderInitType,
    savePinInFolderSuccessType,
    fetchPinsInitType,
    fetchPinsSuccessType
} from "./types";

import * as pinService from "../services/pinService";

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
);

export const openModalSavePinAction = (pinId) => ({
    type: openModalSavePinType,
    payload: pinId
});

export const closeModalsAction = () => ({
    type: closeModalsType
});

export const fetchFoldersInitAction = () => ({
    type: fetchFoldersInitType
});

export const fetchFoldersSuccessAction = (folders) => ({
    type: fetchFoldersSuccessType,
    payload: folders
});

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinService.getFolders();
    dispatch(fetchFoldersSuccessAction(folders));
}

export const openModalCreateFolder = () => ({
    type: openModalCreateFolderType
});

export const saveFolderInitAction = () => ({
    type: saveFolderInitType
});

export const saveFolderSuccessAction = (folder) => ({
    type: saveFolderSuccessType,
    payload: folder
});

export const saveFolderAction = async (dispatch, folderName, pinId) => {
    dispatch(saveFolderInitAction());
    await sleep(1000);
    const newFolder = await pinService.saveFolder(folderName);
    const folder = await pinService.savePinInFolder(newFolder.id, pinId);
    dispatch(saveFolderSuccessAction(folder));
}

export const savePinInFolderInitAction = () => ({
    type: savePinInFolderInitType
});

export const savePinInFolderSuccessAction = (folders) => ({
    type: savePinInFolderSuccessType,
    payload: folders,
});

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
    dispatch(savePinInFolderInitAction());
    await sleep(1000);
    await pinService.savePinInFolder(folderId, pinId);
    const folders = await pinService.getFolders();
    dispatch(savePinInFolderSuccessAction(folders));
}

export const fetchPinsInitAction = () => ({
    type: fetchPinsInitType    
});

export const fetchPinsSucessAction = (pinsData) => ({
    type: fetchPinsSuccessType,
    payload: pinsData
});

export const fetchPinsAction = async (dispatch) => {
    dispatch(fetchPinsInitAction());
    const pinsData = await pinService.getPins();
    dispatch(fetchPinsSucessAction(pinsData));
}