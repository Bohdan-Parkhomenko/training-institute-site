import Toolbar from "./components/Toolbar/Toolbar";
import FileGrid from "./components/FileGrid/FileGrid";
import Pagination from "./components/Pagination/Pagination";
import './FilesManager.css'
import { FilesProvider } from "../../context/FilesContext";

const FilesManager = () => {
    return (
        <FilesProvider>
            <div className="app-container">
                <Toolbar />
                <FileGrid />
                <Pagination />
            </div>
        </FilesProvider>
    );
};

export default FilesManager;
