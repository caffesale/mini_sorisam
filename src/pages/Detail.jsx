import React from "react";
import DetailList from "../components/detail/DetailCommentList";
import DetailCommentSubmit from "../components/detail/DetailCommentSubmit";
import DetailInfo from "../components/detail/DetailInfo";


// Detail props로 내려오나? 
function Detail(props) {
    return (
        <div>
            <DetailInfo postid={props.postid}/>
            <DetailCommentSubmit postid={props.postid}/>
            <DetailList postid={props.postid}/>
        </div>
    );
}

export default Detail;