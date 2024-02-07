// Test.js
import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Test = () => {
  // eslint-disable-next-line
  const [fileData, setFileData] = useState(null);

  const docs = [{
    uri: require("./Hello.pptx")
  }]

  // const loadLocalFile = () => {
  //   const filePath = './Hello.pptx'; // Adjust the path based on your folder structure

  //   fetch(filePath)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const reader = new FileReader();

  //       reader.onload = (e) => {
  //         setFileData(e.target.result);
  //       };

  //       reader.readAsDataURL(blob);
  //     })
  //     .catch((error) => console.error('Error loading file:', error));
  // };

  return (
    <div>
      {/* <button onClick={loadLocalFile} style={{ height: '500px', width: '500px', background: 'red' }}>
        Load Hello.PPT
      </button> */}
      <DocViewer
        documents={docs}
        style={{width:'100vw',height:'100vh'}}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  );
};

export default Test;
