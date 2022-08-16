import React, { useContext } from "react";
import DetailCommentList from "../components/detail/DetailCommentList";
import DetailCommentSubmit from "../components/detail/DetailCommentSubmit";
import DetailInfo from "../components/detail/DetailInfo";
import AuthContext from "../context/AuthProvider";


// Detail props로 내려오나? 
function Detail(props) {
    const {auth} = useContext(AuthContext);
    return (
        <div>
            <DetailInfo />
            { auth.loginStatus 
            ? <DetailCommentSubmit postid={props.postid}/>
            : <></>
            }
            <DetailList />
        </div>
    );
}

export default Detail;