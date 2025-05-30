import React from "react";
import "./FileCard.css";

import DownloadSimple from "../../../../assets/FilesManager/DownloadSimple.svg";
import ShareNetwork from "../../../../assets/FilesManager/ShareNetwork.svg";
import PencilSimple from "../../../../assets/FilesManager/PencilSimple.svg";

import { useFiles } from "../../../../context/FilesContext";
import { renameFile, simulateDownload } from "../../../../utils/fileActions";

const formatSize = (size) => {
    if (size < 1024) return `${size} KB`;
    return `${(size / 1024).toFixed(1)} MB`;
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
};

const FileCard = ({ name, size, createdAt, selected, onClick, id }) => {
    const { files, setFiles } = useFiles();

    const handleDownload = (e) => {
        e.stopPropagation();
        const file = files.find((f) => f.id === id);
        if (file) simulateDownload(file);
    };

    const handleRename = (e) => {
        e.stopPropagation();
        const newName = prompt("Нова назва файлу:", name);
        if (newName && newName !== name) {
            renameFile(files, setFiles, id, newName);
        }
    };

    return (
        <div className={`file-card ${selected ? "selected" : ""}`} onClick={onClick}>
            {selected && <div className="checkmark">✔</div>}
            <div className="file-icon">📄</div>
            <div className="file-label">{name}</div>
            <div className="file-meta">
                <span>{formatSize(size)}</span>
                <span>{formatDate(createdAt)}</span>
            </div>
            {selected && (
                <div className="actions">
                    <button onClick={handleDownload}><img src={DownloadSimple} alt="Download" /></button>
                    <button><img src={ShareNetwork} alt="Share" /></button>
                    <button onClick={handleRename}><img src={PencilSimple} alt="Edit" /></button>
                </div>
            )}
        </div>
    );
};

export default FileCard;
