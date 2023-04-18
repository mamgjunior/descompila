import { 
    openModalSavePinType, 
    closeModalsType, 
    fetchFoldersSuccessType,
    fetchFoldersInitType,
    openModalCreateFolderType,
    saveFolderSuccessType,
    savePinInFolderSuccessType,
    fetchPinsSuccessType
} from "./types";

export function reducer(state, action) {
    switch (action.type) {
        case openModalSavePinType:
            return {
                ...state,
                type: openModalSavePinType,
                mode: 'savePin',
                activePinId: action.payload
            }
        case closeModalsType:
            return {
                ...state,
                type: closeModalsType,
                mode: null
            }        
        case fetchFoldersInitType:
            return {
                ...state,
                type: fetchFoldersInitType
            }
        case fetchFoldersSuccessType:
            return {
                ...state,
                type: fetchFoldersSuccessType,
                folders: action.payload
            }
        case openModalCreateFolderType:
            return {
                ...state,
                type: openModalCreateFolderType,
                mode: 'createFolder'
            }
        case saveFolderSuccessType:
            return {
                ...state,
                type: saveFolderSuccessType,
                folders: [ ...state.folders, action.payload ]
            }
        case savePinInFolderSuccessType:
            return {
                ...state,
                type: savePinInFolderSuccessType,
                folders: action.payload
            }
        case fetchPinsSuccessType:
            return {
                ...state,
                type: fetchPinsSuccessType,
                pins: action.payload
            }
        default:
            return {
                ...state,
                type: action.type
            }
    }
}