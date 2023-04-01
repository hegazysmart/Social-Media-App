import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getComments } from "../../core/apiCalls";
import Loader from "../../components/loader/Loader";
import { CommentsContainer, Head, Slogan } from "./SinglePost.styles";
import lampLogo from "../../assets/logo.jpg";
import img0 from "../../assets/free-vector0.jpg";

const SinglePost = () => {
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState({});

  useEffect(() => {
    setLoading(true);
    getComments(location.state.id).then((res) => {
      setComments(res);
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

      <CommentsContainer>
        <img src={img0} alt="view" />
        <h2>{location.state.title}</h2>
        <p>{location.state.body}</p>
        {comments.length > 0 &&
          comments.map((comment, index) => {
            return (
              <div className="comment">
                <p className="name"><strong>name: </strong>{comment.name}</p>
                <p className="email"><strong>email: </strong>{comment.email}</p>
                <p className="body"><strong>comment: </strong>{comment.body}</p>
              </div>
            );
          })}
      </CommentsContainer>
    </>
  );
};

export default SinglePost;
