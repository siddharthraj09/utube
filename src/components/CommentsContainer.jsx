import CommentList from "./CommentList";

const commentData = [
  {
    name: "Siddharth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
    replies: [],
  },
  {
    name: "Siddharth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
    replies: [],
  },
  {
    name: "Siddharth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
    replies: [
      {
        name: "Siddharth",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
        replies: [],
      },

      {
        name: "Siddharth",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
        replies: [
          {
            name: "Siddharth",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
            replies: [
              {
                name: "Siddharth",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
                replies: [
                  {
                    name: "Siddharth",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Siddharth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
    replies: [],
  },
  {
    name: "Siddharth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus pharetra ligula at pellentesque. Aenean pretium massa in sodales facilisis.",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div className="my-5 p-2">
      <h1 className="text-2xl font bold">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
