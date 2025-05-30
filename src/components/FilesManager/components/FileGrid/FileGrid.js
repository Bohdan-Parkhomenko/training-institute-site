import { useFiles } from "../../../../context/FilesContext";
import FileCard from "../FileCard/FileCard";
import "./FileGrid.css";

const FileGrid = () => {
    const { sortedFiles, selectedFiles, toggleFileSelection } = useFiles();

    return (
        <div className="file-grid">
            {sortedFiles.map((file) => (
                <FileCard
                    key={file.id}
                    id={file.id}
                    name={file.name}
                    size={file.size}
                    createdAt={file.createdAt}
                    selected={selectedFiles.includes(file.id)}
                    onClick={() => toggleFileSelection(file.id)}
                />
            ))}
        </div>
    );
};

export default FileGrid;
