import React, { useState } from "react";
import FileCard from "../FileCard/FileCard";
import "./FileGrid.css";

const FileGrid = () => {
    const files = new Array(12).fill("Typography");
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="file-grid">
            {files.map((file, index) => (
                <FileCard
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}
                />
            ))}
        </div>
    );
};

export default FileGrid;
