import React from "react";
import PropTypes from "prop-types";

function FileName({ file }) {
  return <span>{file.name}</span>;
}

FileName.propTypes = {
  file: PropTypes.object.isRequires
};

export default FileName;
