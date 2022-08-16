import React, { useEffect, useMemo, useState } from "react";
import axiosComment from "../../api/axiosComment";
import DetailReCommentList from "./DetailReCommentList"

function DetailCommentList({postid}) {
    const [comments, setComments] = useState();

    // 리렌더링 이슈 있을 수 있음
    useEffect(() => {
        let isMounted = true;
        const CancelToken = axiosComment.CancelToken;
        const source = CancelToken.source();
        
        const getComments = async () => {
            try {
                const response = await axiosComment.get(`${postid}/comment`, {
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
        <section>
            {comments?.map((each) => {
                const id = each.commentId;
                return (
                    <div key={id}>
                        {each.contents}
                        <DetailReCommentList recommentList={comments.recomments}/>
                    </div>
                )
            })}
            <div>목소리 좋아요!</div>
        </section>
    );
}

export default DetailCommentList;