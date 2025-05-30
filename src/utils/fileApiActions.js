const API_URL = "http://localhost:5000/api/files";

// Додавання файлу (через FormData)
export const addFile = async (files, setFiles, uploadedFile) => {
    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
        const res = await fetch(`${API_URL}`, {
            method: "POST",
            body: formData
        });

        if (!res.ok) throw new Error("Помилка при завантаженні файлу");

        const newFile = await res.json(); // API повертає { id, name, size, createdAt }
        setFiles([newFile, ...files]);
    } catch (error) {
        console.error(error);
        alert("Не вдалося завантажити файл.");
    }
};

// Перейменування
export const renameFile = async (files, setFiles, fileId, newName) => {
    try {
        const res = await fetch(`${API_URL}/${fileId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: newName})
        });

        if (!res.ok) throw new Error("Помилка при перейменуванні");

        const updated = files.map(file =>
            file.id === fileId ? {...file, name: newName} : file
        );
        setFiles(updated);
    } catch (error) {
        console.error(error);
        alert("Не вдалося перейменувати файл.");
    }
};

// Видалення (масове)
export const deleteFiles = async (files, setFiles, idsToDelete) => {
    try {
        await Promise.all(
            idsToDelete.map(id =>
                fetch(`${API_URL}/${id}`, {method: "DELETE"})
            )
        );

        const remaining = files.filter(file => !idsToDelete.includes(file.id));
        setFiles(remaining);
    } catch (error) {
        console.error(error);
        alert("Не вдалося видалити деякі файли.");
    }
};

// Завантаження (реальне)
export const simulateDownload = async (file) => {
    try {
        const res = await fetch(`${API_URL}/${file.id}/download`);
        if (!res.ok) throw new Error("Помилка при завантаженні");

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error);
        alert("Не вдалося завантажити файл.");
    }
};
