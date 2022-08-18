import React, { useEffect, useMemo, useState } from "react";
import axiosComment from "../../api/axiosComment";
import DetailComment from "./DetailComment";
import DetailReCommentList from "./DetailReCommentList"

function DetailCommentList({postid, comments, setComments}) {
        return (
            <section>
                {comments?.map((each) => {
                    const id = each.commentId;
                    return (
                        <DetailComment key={id} username={username} contents={contents} postid={postid}/>
                    )
                })}
            </section>
        );
    }

export default DetailCommentList;