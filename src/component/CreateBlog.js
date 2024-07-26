import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreateBlog = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');


 
 

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
   const modules = {
     toolbar: toolbarOptions,
   };

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    // Logic to send title, featuredImage (if uploaded), and blog content to your backend

    console.log('Blog content:', value);
    console.log('Blog title:', title);
    
  };

  return (
    <>
      <h1 className="create-head">Share Your Thoughts With People's Blog</h1>

      <div className="blog-main">
        <div className="main-page">
          <div className="blog-main">
            <button>
              <label>Add Cover Image</label>
              <input type="file" />
            </button>
            <br />

            <input
              className="title-class"
              placeholder="Your Blog Title Here ..."
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <ReactQuill
          className="quill"
          module={modules}
          theme="snow"
          value={value}
          onChange={setValue}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "color",
            "background",
            "align",
            "code-block",
            "script",
          ]}
        />
      </div>

      <button className="add-blog-btn-2" onClick={handleBlogSubmit}>
        Publish Blog
      </button>
    </>
  );
};

export default CreateBlog;
//get the image from the user and display that image this image will be the cover image of the blog 
//after that user can write the data in the blog and  save that blog data in firebase and create a document and make a collection inside that and save all the blogs data in the Firebase.
//get the blog data from the firebase and display that in the homepage of the blog website.
