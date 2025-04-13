import BounceLoader from "react-spinners/BounceLoader";

function Loading() {
  return (
    <div className="sweet-loading w-20 h-20">
      <BounceLoader color="#00ff5d" size={35} speedMultiplier={2} />
    </div>
  );
}

export default Loading;
