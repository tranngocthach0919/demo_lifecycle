import { useEffect, useState } from "react";

function Updating() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log('Count updated:', count);
        }, 500)
    }, [count]); // Effect chạy lại mỗi khi count thay đổi

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Updating;