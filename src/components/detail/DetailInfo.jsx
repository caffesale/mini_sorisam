import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosComment from "../../api/axiosComment";

function DetailInfo() {
    const [data, setData] = useState([]);
    const { postid } = useParams();

    useEffect(() => {
        const getPostInfo = async () => {
            try{
                const response = await axiosComment.get(`/${postid}`,);

                const username = response.data.username;
                const title = response.data.title;
                const intro = response.data.intro;
                const contents = response.data.contents;
                const cntPostLike = response.data.cntPostLike;
                const filePath = response.data.filePath;
                const img = response.data.img;
                setData({username, title, intro, contents, cntPostLike, filePath, img})
            }
            catch(err){
                console.log(err);
            }
        }
        getPostInfo();
    }, [])

    return (
        <section>
            <figure>
                <img src={data.img} alt="profileImage" />
                <figcaption>{data.intro}</figcaption>
            </figure>
            <div>
                <h2>{data.title}</h2>
                <div>{data.contents}</div>
                <div>{data.cntPostLike}</div>
                <audio controls autoPlay preload="auto">
                    <source src={data.filePath}></source>
                </audio>
            </div>
        </section>
    )
}

export default DetailInfo;