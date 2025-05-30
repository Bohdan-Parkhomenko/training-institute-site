import { v4 as uuidv4 } from "uuid";

// Отримати список файлів (фейковий)
export const fetchFiles = () => {
    // Можна повертати одразу мокові файли або читати з localStorage
    return [
        {
            id: "1",
            name: "Document_1.pdf",
            size: 245,
            createdAt: "2025-05-28T10:30:00.000Z"
        },
        {
            id: "2",
            name: "Presentation.pptx",
            size: 3500,
            createdAt: "2025-05-27T09:00:00.000Z"
        },
        {
            id: "3",
            name: "Photo.png",
            size: 820,
            createdAt: "2025-05-29T14:20:00.000Z"
        }
    ];
};


// Додавання файлу
export const addFile = (files, setFiles, uploadedFile) => {
    const newFile = {
        id: uuidv4(),
        name: uploadedFile.name,
        size: Math.round(uploadedFile.size / 1024), // KB
        createdAt: new Date().toISOString(),
    };

    setFiles([newFile, ...files]);
};

// Перейменування
export const renameFile = (files, setFiles, fileId, newName) => {
    const updated = files.map(file =>
        file.id === fileId ? { ...file, name: newName } : file
    );
    setFiles(updated);
};

// Видалення
export const deleteFiles = (files, setFiles, idsToDelete) => {
    const remaining = files.filter(file => !idsToDelete.includes(file.id));
    setFiles(remaining);
};

// Завантаження (заглушка)
export const simulateDownload = (file) => {
    alert(`Симуляція завантаження файлу: ${file.name}`);
};
