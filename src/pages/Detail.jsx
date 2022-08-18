import React, { useState, useEffect, useContext } from "react";
import DetailList from "../components/detail/DetailCommentList";
import DetailCommentSubmit from "../components/detail/DetailCommentSubmit";
import DetailInfo from "../components/detail/DetailInfo";
import axiosComment from "../api/axiosComment";
import AuthContext from "../context/AuthProvider";
import { useParams } from "react-router-dom";

function Detail() {
    const {auth} = useContext(AuthContext);
    const [comments, setComments] = useState();
    const {postid} = useParams();

    
    useEffect(() => {
            let isMounted = true;

            const getComments = async () => {
                try {
                    const response = await axiosComment.get(`${postid}/comment`);
                    isMounted && setComments(response.data);
                }
                catch (err) {
                    console.log(err);
                }
            }
            getComments();
            return () => {
                isMounted = false;
            }
    },[])
    return (
        <div>
            <DetailInfo/>
            { auth.isLogin === true
            ? <DetailCommentSubmit postid={postid} comments={comments} setComments={setComments}/>
            : <></>
            }
            <DetailList postid={postid} comments={comments} setComments={setComments} />
        </div>
    );
}

export default Detail;