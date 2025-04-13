import BounceLoader from "react-spinners/BounceLoader";

function Button({ prompt, isLoading }) {
  return (
    <div className="w-70">
      <button
        type="submit"
        disabled={!prompt || isLoading}
        className="btn btn-primary w-100"
      >
        {isLoading ? (
          <BounceLoader color="#ffffff" size={20} speedMultiplier={1.5} />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
}

export default Button;
