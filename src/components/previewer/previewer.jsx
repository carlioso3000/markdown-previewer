






function Previewer({ content }) {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}

export default Previewer;
