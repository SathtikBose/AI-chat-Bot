import ChatBox from "./ChatBox";
import UserAvatar from "./UserAvatar";
import BotAvatar from "./BotAvatar";
import Error from "./ErrorContainer";

function Container({ startingChat, isError }) {
  return (
    <div
      className="container bg-dark text-white rounded p-3 overflow-auto"
      style={{ maxHeight: "70vh" }}
    >
      {isError && <Error />}
      {!isError &&
        startingChat.map((message, index) => (
          <div
            key={index}
            className={`d-flex gap-2 ${
              message.chat === "user"
                ? "justify-content-end"
                : "justify-content-start"
            }`}
          >
            {message.chat === "user" ? <UserAvatar /> : <BotAvatar />}
            <ChatBox text={message.message} />
          </div>
        ))}
    </div>
  );
}

export default Container;
