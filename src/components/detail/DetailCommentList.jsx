import React, { useEffect, useMemo, useState } from "react";
import axiosComment from "../../api/axiosComment";
import DetailReCommentList from "./DetailReCommentList"

function DetailCommentList({postid, comments, setComments}) {
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