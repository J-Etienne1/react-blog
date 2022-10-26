import React from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const [name, setName] = useState("Mario");
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

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
