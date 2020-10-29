import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Todat at 4:45pm" 
          avatar={faker.image.avatar()} 
          comment="Nice blog post!" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Yesterday at 5pm" 
          avatar={faker.image.avatar()} 
          comment="What a nonsense!" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Today at 9:12am" 
          avatar={faker.image.avatar()} 
          comment="Great!" 
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)