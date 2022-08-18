import React, { useEffect, useMemo, useState } from "react";
import axiosComment from "../../api/axiosComment";
import DetailComment from "./DetailComment";
import DetailReCommentList from "./DetailReCommentList"

function DetailCommentList({postid, comments, setComments}) {
    
    console.log(comments);
    return (
            <section>
                {comments?.map((each) => {
                    const id = each.commentId;
                    const username = each.username;
                    const contents = each.contents;
                    return (
                        <DetailComment key={id} commentId={id} username={username} contents={contents} postid={postid} comments={comments} setComments={setComments}/>
                    )
                })}
            </section>
        )
    }

export default DetailCommentList;