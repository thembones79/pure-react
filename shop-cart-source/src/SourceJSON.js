import React from "react";





const SourceJSON = ({dataFeed, handleDataChange}) => {
  return(
     <textarea
        id="editor"
        value={dataFeed}
        onChange={handleDataChange}
      />
  );
}



export default SourceJSON;