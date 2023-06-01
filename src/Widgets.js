import React from 'react'
import "./Widgets.css"
import{
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';


function Widgets() {
  return (
    <div className = "Widgets">
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon'/>
        <input placeholder='Search Twitter' type='text'/>
      </div>

      <div className='widgets__widgetContainer'>
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1663583653018861575"}/>
        <TwitterTimelineEmbed
        source type = "profile"
        screenName = "kendricklamar"
        options={{height: 400}}/>
        
        <TwitterShareButton
        url = {"https://www.youtube.com/channel/UCe9ZHpF8kcAoUmO2aAB6fzA"}
        options = {{text: "#twitter is awesome", via: "prodbynach"}}
        />
      </div>
    </div>
  )
}

export default Widgets