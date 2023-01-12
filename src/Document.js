import React, { useEffect, useState } from 'react'

const Document = ({title, content}) => {

const[btnDisabled, setBtnDisabled] = useState(true)

useEffect(()=>{
    const text = document.querySelector('.content')
    text.addEventListener('scroll', ()=>{
        if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
            setBtnDisabled(false);
          }
    })
})

  return (
    <div>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <button disabled={btnDisabled}>I Agree</button>
    </div>
  )
}

export default Document