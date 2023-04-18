const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`;
}

const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
}

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || [];
}

export const saveFolder = async (folderName) => {
    const folders = await getFolders();

    const newFolder = {
        id: generateId(),
        name: folderName,
        pins: []
    }

    folders.push(newFolder);
    await saveFolders(folders);

    return newFolder;
}

export const savePinInFolder = async (folderId, pinId) => {
    const folders = await getFolders();
    const folderIndex = folders.findIndex(function (folder) {
        return folder.id === folderId;
    });

    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders);
    return { ...folders[folderIndex] }
}

export const getPins = async () => {
    return [
        {
            id: '123',
            title: 'Matemática',
            image: 'https://picsum.photos/200/300?52',
            total: 0
        },
        {
            id: '125',
            title: 'Trigonometria',
            image: 'https://picsum.photos/200/300?48',
            total: 0
        },
        {
            id: '129',
            title: 'TypeScript',
            image: 'https://picsum.photos/200/300?65',
            total: 0
        }
    ]
}