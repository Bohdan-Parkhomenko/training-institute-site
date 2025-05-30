import React, {useRef} from "react";
import "./Toolbar.css";

import DownloadSimple from "../../../../assets/FilesManager/DownloadSimple.svg";
import ShareNetwork from "../../../../assets/FilesManager/ShareNetwork.svg";
import Trash from "../../../../assets/FilesManager/Trash.svg";
import PencilSimple from "../../../../assets/FilesManager/PencilSimple.svg";
import MagnifyingGlassPlus from "../../../../assets/FilesManager/MagnifyingGlassPlus.svg";
import UploadSimple from "../../../../assets/FilesManager/UploadSimple.svg";
import Union from "../../../../assets/FilesManager/Union.svg";

import {useFiles} from "../../../../context/FilesContext";
import {
    addFile,
    renameFile,
    deleteFiles,
    simulateDownload
} from "../../../../utils/fileActions";

const Toolbar = () => {
    const {
        files,
        setFiles,
        selectedFiles,
        setSelectedFiles,
        sortBy,
        sortOrder,
        setSortBy,
        setSortOrder
    } = useFiles();

    const fileInputRef = useRef(null);

    const isAllSelected = selectedFiles.length === files.length && files.length > 0;

    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedFiles([]);
        } else {
            setSelectedFiles(files.map((file) => file.id));
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (!uploadedFile) return;
        addFile(files, setFiles, uploadedFile);
        event.target.value = null;
    };

    const handleDelete = () => {
        deleteFiles(files, setFiles, selectedFiles);
        setSelectedFiles([]);
    };

    const handleRename = () => {
        if (selectedFiles.length !== 1) return alert("Виберіть один файл для перейменування.");
        const fileId = selectedFiles[0];
        const newName = prompt("Нова назва файлу:");
        if (newName) renameFile(files, setFiles, fileId, newName);
    };

    const handleDownload = () => {
        selectedFiles.forEach((id) => {
            const file = files.find((f) => f.id === id);
            if (file) simulateDownload(file);
        });
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const resetSort = () => {
        setSortBy("name");
        setSortOrder("asc");
    };

    return (
        <div className="toolbar">
            <div className="toolbar-left">
                <label className="checkbox-select-all">
                    <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={toggleSelectAll}
                    />
                </label>

                <button onClick={handleUploadClick}><img src={UploadSimple} alt="Upload"/></button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{display: "none"}}
                />
                <button onClick={handleDelete}><img src={Trash} alt="Trash"/></button>
                <button onClick={handleRename}><img src={PencilSimple} alt="Rename"/></button>
                <button onClick={handleDownload}><img src={DownloadSimple} alt="Download"/></button>
                <button><img src={ShareNetwork} alt="Share"/></button>
                <button><img src={MagnifyingGlassPlus} alt="Zoom"/></button>
            </div>
            <div className="filter">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Ім’я</option>
                    <option value="createdAt">Дата</option>
                </select>
                <button onClick={toggleSortOrder}>
                    {sortOrder === "asc" ? "🔼" : "🔽"}
                </button>
                <button onClick={resetSort}>❌</button>
            </div>
        </div>
    );
};

export default Toolbar;
