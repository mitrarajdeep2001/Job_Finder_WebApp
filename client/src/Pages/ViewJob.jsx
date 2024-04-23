import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewJob = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/post/getPost/${id}`
      );
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(post);
  return <div className="bg-[#f7fdfd] dark:bg-slate-900">
    
  </div>;
};

export default ViewJob;
