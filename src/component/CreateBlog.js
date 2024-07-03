import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import Image from 'quill-image-uploader'; // For image uploads

const CreateBlog = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');


  // Configure Quill modules (including image upload)
 

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike', 'image'], // Text formatting
    [{ header: [1, 2,3,4, false] }], // Headings
    ['blockquote', 'code-block'], // Block elements
    [{ list: 'ordered'}, { list: 'bullet' }], // Lists
    [{ script: 'sub'}, { script: 'super' }], // Superscript/subscript
    [{ indent: '-1'}, { indent: '+1' }], // Text indentation
    [{ direction: 'rtl' }], // Text direction
    [{ size: ['small', false, 'large', 'huge'] }], // Text size
    [{ color: [] }, { background: [] }], // Text color and background
    [{ font: [] }], // Font selection
    [{ align: [] }], // Text alignment
    ['clean'], // Clear formatting
    ['link', 'image', 'video', 'formula'], // Essential content elements

  
  ];
   const modules = [{ toolbar: toolbarOptions }];

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    // Logic to send title, featuredImage (if uploaded), and blog content to your backend
    console.log('Blog content:', value);
    console.log('Blog title:', title);
    
  };

  return (
    <>
      <h1>Create Blog</h1>
      <div className="main-page">
        <div className="blog-main">
          <label>Upload Featured Image</label>
          <br />
          <label>Title</label>
          <input
            placeholder="Your Blog Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <ReactQuill
        module={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <button onClick={handleBlogSubmit}>Publish Blog</button>
    </>
  );
};

export default CreateBlog;
