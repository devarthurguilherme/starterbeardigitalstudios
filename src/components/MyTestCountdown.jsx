import { useState, useEffect} from "react";

export const MyTestCountdown = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(count);
    }, [count]);

  return (
    <div>{count}</div>
  )
}
