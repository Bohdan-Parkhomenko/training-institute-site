import React from "react";
import "./Toolbar.css";

import Checkbox from "../../../../assets/FilesManager/CheckBoxOutlineBlankOutlined.svg";
import DownloadSimple from "../../../../assets/FilesManager/DownloadSimple.svg";
import ShareNetwork from "../../../../assets/FilesManager/ShareNetwork.svg";
import Trash from "../../../../assets/FilesManager/Trash.svg";
import PencilSimple from "../../../../assets/FilesManager/PencilSimple.svg";
import MagnifyingGlassPlus from "../../../../assets/FilesManager/MagnifyingGlassPlus.svg";
import UploadSimple from "../../../../assets/FilesManager/UploadSimple.svg";
import Union from "../../../../assets/FilesManager/Union.svg";

const Toolbar = () => (
    <div className="toolbar">
        <button><img src={Checkbox} alt="Checkbox"/></button>
        <button><img src={UploadSimple} alt="Checkbox"/></button>
        <button><img src={Trash} alt="Trash"/></button>
        <button><img src={PencilSimple} alt="ShareNetwork"/></button>
        <button><img src={DownloadSimple} alt="DownloadSimple"/></button>
        <button><img src={ShareNetwork} alt="ShareNetwork"/></button>
        <button><img src={MagnifyingGlassPlus} alt="MagnifyingGlassPlus"/></button>

        <div className="filter">
            <select>
                <option>Value</option>
            </select>
            <button><img src={Union} alt="Union"/></button>
            <button>❌</button>
        </div>
    </div>
);

export default Toolbar;
