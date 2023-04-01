import React, { useEffect, useState } from "react";
import { Head, PostsContainer, Slogan } from "./Posts.styles";
import lampLogo from "../../assets/logo.jpg";
import img0 from "../../assets/free-vector0.jpg";
import img1 from "../../assets/free-vector1.jpg";
import img2 from "../../assets/free-vector2.jpg";
import img3 from "../../assets/free-vector3.jpg";
import img4 from "../../assets/free-vector4.jpg";
import img5 from "../../assets/free-vector5.jpg";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { getPosts } from "../../core/apiCalls";
import Card from "../../components/card/Card";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const images = [img0, img1, img2, img3, img4, img5]

  useEffect(() => {
    setLoading(true);
    getPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Head>
        <img src={lampLogo} alt="Logo" className="logo-sm-app" />
        <Slogan>
          <h1>Connect</h1>
          <p>Social Meddia App</p>
        </Slogan>
        <Link to="/" className="navigate">
          Add new post
        </Link>
      </Head>
      <PostsContainer>
        {posts.length > 0 &&
          posts.map((post, index) => {
            return <Card key={post.id} post={post} img={images[index%6]}/>;
          })}
      </PostsContainer>
    </>
  );
};

export default Posts;
