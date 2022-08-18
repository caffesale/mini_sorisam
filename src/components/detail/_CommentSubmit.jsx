import React, { useState } from "react";
// 가짜
function CommnetSubmit({initialValue = ""}) {
    const [message, setMessage] = useState(initialValue);

    function handleSubmit(e) {
        e.preventDefault();
        // onSubmit(message).then(() => setMessage(""))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    type="text" 
                />
                <button>작성하기</button>
            </div>
        </form>
    )
}

export default CommnetSubmit;