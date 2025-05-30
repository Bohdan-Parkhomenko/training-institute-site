import React from "react";
import "./FileCard.css";
import DownloadSimple from "../../../../assets/FilesManager/DownloadSimple.svg";
import ShareNetwork from "../../../../assets/FilesManager/ShareNetwork.svg";
import PencilSimple from "../../../../assets/FilesManager/PencilSimple.svg";

const FileCard = ({ selected, onClick }) => {
    return (
        <div className={`file-card ${selected ? "selected" : ""}`} onClick={onClick}>
            {selected && <div className="checkmark">✔</div>}
            <div className="file-icon">📄</div>
            <div className="file-label">Typography</div>
            {selected && (
                <div className="actions">
                    <button><img src={DownloadSimple} alt="DownloadSimple"/></button>
                    <button><img src={ShareNetwork} alt="ShareNetwork"/></button>
                    <button><img src={PencilSimple} alt="ShareNetwork"/></button>
                </div>
            )}
        </div>
    );
};

export default FileCard;
