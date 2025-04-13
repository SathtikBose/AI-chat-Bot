function InputContainer({ setPrompt, prompt }) {
  return (
    <div className="form-group w-100 bg-dark text-white mb-2">
      <input
        type="text"
        className="form-control bg-dark text-white custom-placeholder"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt..."
      />
    </div>
  );
}

export default InputContainer;
