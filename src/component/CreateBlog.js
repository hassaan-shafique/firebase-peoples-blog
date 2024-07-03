import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import "quill/dist/quill.core.css";

const CreateBlog = () => {
  const [value, setValue] = useState ('');
 const toolbarOptions = [
   ["bold", "italic", "underline", "strike"], // toggled buttons
   ["blockquote", "code-block"],
   ["link", "image", "video", "formula"],

   [{ header: 1 }, { header: 2 }], // custom button values
   [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
   [{ script: "sub" }, { script: "super" }], // superscript/subscript
   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
   [{ direction: "rtl" }], // text direction

   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
   [{ header: [1, 2, 3, 4, 5, 6, false] }],

   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
   [{ font: [] }],
   [{ align: [] }],

   ["clean"], // remove formatting button
 ];

 
   const modules=[
    {
     toolbar: toolbarOptions,
   },
  ];

  return (
    <>
      <div className="main-page">
        <div className="blog-main">
          <h1>Write Your Blog</h1>
          <label>Title</label>
          <input placeholder="Your Blog Title" type="text" />
          <label>Upload Your Image</label>
          <input type="file" />
        </div>
      </div>
      <ReactQuill
        module={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </>
  );
}


export default CreateBlog
