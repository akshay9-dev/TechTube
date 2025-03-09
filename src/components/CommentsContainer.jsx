import React from "react";

const commentData = [
  {
    name: "Akshay Shahane",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Akshay Shahane",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    replies: [
      {
        name: "Akshay Shahane",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Akshay Shahane",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            replies: [
              {
                name: "Akshay Shahane",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                replies: [
                  {
                    name: "Akshay Shahane",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                  {
                    name: "Akshay Shahane",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                  {
                    name: "Akshay Shahane",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                    replies: [
                      {
                        name: "Akshay Shahane",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                        replies: [],
                      },
                      {
                        name: "Akshay Shahane",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                        replies: [
                          {
                            name: "Akshay Shahane",
                            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                            replies: [],
                          },
                          {
                            name: "Akshay Shahane",
                            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Akshay Shahane",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                        replies: [],
                      },
                      {
                        name: "Akshay Shahane",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Shahane",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                  {
                    name: "Akshay Shahane",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                  {
                    name: "Akshay Shahane",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Akshay Shahane",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Shahane",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Akshay Shahane",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Akshay Shahane",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://openclipart.org/image/2000px/247319"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies?.length > 0 && ( // ✅ Only render replies if they exist
        <div className="pl-5 border-l-2 border-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
