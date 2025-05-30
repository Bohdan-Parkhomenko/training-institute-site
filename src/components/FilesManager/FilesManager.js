import Toolbar from "./components/Toolbar/Toolbar";
import FileGrid from "./components/FileGrid/FileGrid";
import Pagination from "./components/Pagination/Pagination";
import './FilesManager.css'

const FilesManager = () => {

    return (
        <div className="app-container">
            <Toolbar/>
            <FileGrid/>
            <Pagination/>
        </div>
    );
};

export default FilesManager;
