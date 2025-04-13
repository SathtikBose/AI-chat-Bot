function ChatBox({ text }) {
  return (
    <div
      className="bg-secondary text-white p-2 rounded"
      style={{ maxWidth: "75%" }}
    >
      {text}
    </div>
  );
}

export default ChatBox;
