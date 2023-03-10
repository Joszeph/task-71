import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {

  const [content, setContent] = useState('')
  
  useEffect(()=>{
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
    .then(response => response.text())
    .then(data => setContent(data))
  },[])

  return (
    <div className="App">
      {/* <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section> */}
      <div class="container is-fullhd">
        {/* <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div> */}
        <Document content={content} title="Terms and Conditions"/>
      </div>
    </div>
  );
}

export default App;
