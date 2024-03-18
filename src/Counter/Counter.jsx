import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggleLike, setToggleLike] = useState(false);
  const Increment = () => {
    if (count >= 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }
  };
  const Decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const toggleChange = () => {
    setToggleLike(!toggleLike);
  };
  return (
    <>
      <h1>This is counter App</h1>
      <p>
        Counter Value is : <strong>{count}</strong>
      </p>
      <button
        style={{ marginRight: "10px", background: "#213547", color: "white" }}
        onClick={Increment}
      >
        Increment
      </button>
      <button
        style={{ background: "#213547", color: "white" }}
        onClick={Decrement}
      >
        Decrement
      </button>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <p>like the Counter App : </p>
        {toggleLike ? (
          <FaHeart
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={toggleChange}
          />
        ) : (
          <CiHeart
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={toggleChange}
          />
        )}
      </div>
    </>
  );
};
export default Counter;
