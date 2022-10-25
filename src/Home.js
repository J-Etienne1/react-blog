import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const [name, setName] = useState("Mario");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resourse");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null)
      })
      .catch((err) => {
        setIsPending(false)
        setError(err.message);
      });
    // console.log("useEffect ran");
    // console.log(name);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      /> */}
      {/* <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;