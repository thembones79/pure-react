import React from "react";
import PropTypes from "prop-types";
import Time from "./time";
import FileIcon from "./fileicon";
import FileName from "./filename";
import CommitMessage from "./commitmessage";

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <td className="file-icon">
      <FileIcon file={file} />
    </td>
    <td className="file-name">
      <FileName file={file} />
    </td>
    <td className="commit-message">
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;
