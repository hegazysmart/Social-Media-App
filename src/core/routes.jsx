import React from "react";
import { useRoutes } from "react-router-dom";
import Posts from "../pages/posts/Posts";
import AddPosts from "../pages/add-post/AddPost";
import SinglePost from "../pages/single-post/SinglePost"

const Routes = () => {
  return useRoutes([
    { path: "/", element: <AddPosts /> },
    { path: "/posts", element: <Posts /> },
    { path: "/posts/:id", element: <SinglePost /> },
  ]);
};

export default Routes;
