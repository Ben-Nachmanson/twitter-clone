import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        displayName: 'Ben Nachmanson',
        username: 'bananaMan',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        Avatar:
          'https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg',
      });

      setTweetMessage('');
      setTweetImage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
