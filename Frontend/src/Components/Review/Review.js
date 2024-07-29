import React, { useState } from 'react';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';


const DefaultComponent = () => {
  const [comments, setComments] = useState([
    {
      userId: '02b',
      comId: '017',
      fullName: 'Lily',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'I think you have a point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: [],
      image: null
    }
  ]);

  const [rating, setRating] = useState(0);

  const handleCommentSubmit = (data) => {
    console.log('check submit, ', data);
    setComments([...comments, data]);
  };

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="review-container">
      <div className="comments-section">
        <CommentSection
          currentUser={{
            currentUserId: '01a',
            currentUserImg: 'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            currentUserFullName: 'Riya Negi'
          }}
          logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
          }}
          commentData={comments}
          onSubmitAction={handleCommentSubmit}
          currentData={(data) => {
            console.log('current data', data);
          }}
        />
      </div>
    </div>

  
  );
};

export default DefaultComponent;
