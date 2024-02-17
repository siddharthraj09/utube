const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-md text-xs w-full ">
      <img
        className="h-8 rounded-full"
        src="https://lh3.googleusercontent.com/a/ACg8ocLjZXAOLFbnyAK14-snRuM3P0a4jGvPTghz92ep7W32-w=s432-c-no"
        alt="chatLogo"
      />

      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
