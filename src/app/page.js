'use client'

import { Suspense, useState } from "react";
import Posts from "../components/Posts";

export default function Home() {
  const [title, setTitle] = useState("");

  const newPost = async () => {
    console.log("title", title);
    if (title && title !== "") {
      await fetch("http://localhost:8080/posts", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          views: 0,
          title: title,
        })
      }).then(resp => { console.log(resp) });
      setTitle("");
    }
  }
  return (
    <>
      <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
      <button onClick={newPost}>Postar</button>
      <Suspense fallback={<div>Loading</div>}>
        <Posts />
      </Suspense>
    </>
  )
}

