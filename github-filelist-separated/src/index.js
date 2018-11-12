import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import FileListItem from "./filelistitem";
import testFiles from "./testfiles";
import "./index.css";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array
};

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById("root")
);
