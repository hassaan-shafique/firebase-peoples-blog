import React from 'react'

const CreateBlog = () => {
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
    </>
  );
}

export default CreateBlog
