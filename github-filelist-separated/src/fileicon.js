import React from "react";
import PropTypes from "prop-types";

const FileIcon = ({ file }) => {
  let icon = "fa-file-alt";
  if (file.type === "folder") {
    icon = "fa-folder";
  }
  return <i className={`fa ${icon}`} />;
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileIcon;
