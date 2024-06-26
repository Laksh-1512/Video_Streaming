import React from 'react';

export const commentsdata = [
  {
    name: "Laksh",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem possimus sint molestias corrupti eos voluptate earum numquam laborum non ut optio, eveniet odit distinctio eum nam voluptatibus quidem praesentium sed.",
    replies: [
      {
        name: "Laksh",
        comment: "Nested comment 1",
        replies: [
          {
            name: "Laksh",
            comment: "Nested comment 2",
            replies: [
              {
            name: "Laksh",
            comment: "Nested comment 3",
            replies: []
          }
            ]
          },
          
        ]
      }
    ]
  },
  {
    name: "Laksh",
    comment: "Outer comment",
    replies: []
  },
  {
    name: "Laksh",
    comment: "Another outer comment",
    replies: []
  }
];

export const SingleComment = ({ name, comment, replies }) => {
  return (
    <div>
      <div className='flex'>
        <img className="h-10 w-10 " alt="user_icon" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
        <div className='px-2'>
          <ul className='font-semibold'>{name}</ul>
          <ul className='w-full'>{comment}</ul>
        </div>
      </div>
      {replies.length > 0 && (
        <div className='p-2 w-full'>
          {replies.map((reply, index) => (
            <SingleComment key={index} name={reply.name} comment={reply.comment} replies={reply.replies} />//recursion
          ))}
        </div>
      )}
    </div>
  )
}

const Comments = () => {
  return (
    <div className='bg-slate-600 w-[60%]'>
      <h1 className='font-bold text-2xl px-1 pt-2 pb-2'>Comments:</h1>
      {commentsdata.map((comment, index) => (
        <SingleComment key={index} name={comment.name} comment={comment.comment} replies={comment.replies} />
      ))}
    </div>
  );
};

export default Comments;
