function DetailCommentList({commentList}) {
    return (
        <section>
            {commentList?.map((each) => {
                return (
                    <div key={comment_id}>
                        {commentList.content}
                    </div>
                )
            })}
            <div>목소리 좋아요!</div>
        </section>
    );
}

export default DetailCommentList;