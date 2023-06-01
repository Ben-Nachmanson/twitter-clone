import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { collection, onSnapshot } from 'firebase/firestore';
import db from './firebase';
import FlipMove from 'react-flip-move';
import { Flip } from '@mui/icons-material';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Render posts */}
      <FlipMove>
      {posts.map((post) => (
        <Post
        key = {post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.Avatar}
          image={post.image}
        />   
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
