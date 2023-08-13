import './App.css';
import React, { useState } from 'react';
import TextArea from './components/textarea/textArea';
import Previewer from './components/previewer/previewer';
import {marked} from 'marked';

function App() {
  const [text, setText] = useState(`# Heading H1
## Heading H2
### Heading H3
#### Heading H4
inline code: \`const x = 1;\`
block code:
\`\`\`
const x = 1;
const y = 2;
\`\`\`
  ### List elements
  - Carl
  - Jonny
  - Moon
  - Door
> Cita en bloque
!Imagen
**Texto en negrita**
#### Create links [github](https://github.com/andydlindsay)
`

);



  const handleChange = (event) => {
    setText(event.target.value);
  }




  return (
    <div className='app'>
      <TextArea value={text} onChange={handleChange} />
      <Previewer content={marked(text)} />
    </div>
  );
}

export default App;
