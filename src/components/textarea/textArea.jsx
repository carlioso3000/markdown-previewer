import { useState } from 'react';



function TextArea({ value, onChange }) {
  return (
    <textarea id="editor" value={value} onChange={onChange}></textarea>
  )
}

export default TextArea;
