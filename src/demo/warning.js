import { useState } from "react";

function MyComponent({ show }) {
    return show ? <div>Component hiển thị</div> : null;
}

function Warning() {
    const [isShow, setIsShow] = useState(true);
    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>
                { isShow ? "show" : "hide" }
            </button>
            <MyComponent show={isShow} />
        </div>
    )
}

export default Warning;