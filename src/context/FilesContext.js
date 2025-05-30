import { createContext, useContext, useState, useEffect } from "react";
// 🔁 Підключи потрібну версію нижче:
import { fetchFiles } from "../utils/fileActions"; // для мокових даних
// import { fetchFiles } from "../utils/fileApiActions"; // для API

const FilesContext = createContext();

export const FilesProvider = ({ children }) => {
    const [files, setFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const loadFiles = async () => {
            const data = await fetchFiles();
            setFiles(data);
        };
        loadFiles();
    }, []);

    const toggleFileSelection = (fileId) => {
        setSelectedFiles((prev) =>
            prev.includes(fileId)
                ? prev.filter((id) => id !== fileId)
                : [...prev, fileId]
        );
    };

    const sortedFiles = [...files].sort((a, b) => {
        const valA = sortBy === "name" ? a.name.toLowerCase() : new Date(a.createdAt);
        const valB = sortBy === "name" ? b.name.toLowerCase() : new Date(b.createdAt);

        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const contextValue = {
        files,
        setFiles,
        selectedFiles,
        setSelectedFiles,
        toggleFileSelection,
        page,
        setPage,
        totalPages,
        setTotalPages,
        sortedFiles,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
    };

    return (
        <FilesContext.Provider value={contextValue}>
            {children}
        </FilesContext.Provider>
    );
};

export const useFiles = () => useContext(FilesContext);
