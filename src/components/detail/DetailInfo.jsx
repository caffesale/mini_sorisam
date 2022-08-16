import React from "react";
import { useParams } from "react-router-dom";
import axiosComment from "../../api/axiosComment";

function DetailInfo() {
    // props로 내려오나 아니면 params로 따야하나?
    const { postid } = useParams();

    const getComments = async () => {
        try{
            const response = await axiosComment.get(`/${postid}`,
                {
                    withCredentials: true
                });
            const {img, intro, title, contents, cntPostLike, filePath} = response.result;
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <section>
            <figure>
                <img src={img} alt="profileImage" />
                <figcaption>{intro}</figcaption>
            </figure>
            <div>
                <h2>{title}</h2>
                <div>{contents}</div>
                <div>{cntPostLike}</div>
                <audio controls>
                    <source src={filePath}></source>
                </audio>
            </div>
        </section>
    )
}

export default DetailInfo;