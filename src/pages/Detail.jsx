import React, { useState, useEffect } from "react";
import DetailList from "../components/detail/DetailCommentList";
import DetailCommentSubmit from "../components/detail/DetailCommentSubmit";
import DetailInfo from "../components/detail/DetailInfo";
import axiosComment from "../api/axiosComment";

// Detail props로 내려오나? 
function Detail(props) {
    const [comments, setComments] = useState();

        useEffect(() => {
            let isMounted = true;
            const CancelToken = axiosComment.CancelToken;
            const source = CancelToken.source();
            
            const getComments = async () => {
                try {
                    const response = await axiosComment.get(`${props.postid}/comment`, {
                        cancelToken:  source.token
                    });
                    console.log(response.data);
                    isMounted && setComments(response.data);
                }
                catch (err) {
                    console.log(err);
                }
            }
            getComments();
            return () => {
                isMounted = false;
                source.cancel('Operation canceled by the user');
            }
        },[comments])

    return (
        <div>
            <DetailInfo postid={props.postid} comments={comments} setComments={setComments}/>
            <DetailCommentSubmit postid={props.postid} comments={comments} setComments={setComments}/>
            <DetailList postid={props.postid} comments={comments} setComments={setComments}/>
        </div>
    );
}

export default Detail;