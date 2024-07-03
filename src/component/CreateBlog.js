import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [value, setValue] = useState ('');
  var toolbarOptions = [['bold' ,'italic'], ['link', 'image']];
const module = {
  toolbar: toolbarOptions,
};

  return (
    <>
      <div className="main-page">
        <div className="blog-main">
          <h1>Write Your Blog</h1>
          <label>Title</label>
          <input placeholder="Your Blog Title" type="text" />
          <label>Upload Your Image</label>
          <input type="file" />

          <ReactQuill module={module} theme="snow" value={value} onChange= {setValue} />
        </div>
      </div>

    </>
  );
}


export default CreateBlog
