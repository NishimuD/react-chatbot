import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// 以下によって画像がモジュールによって扱われる。
import NoProfile from '../assets/img/no-profile.png';
import Ringo from '../assets/img/ringo.png';

const Chat = (props) => {
  const isQuestion = (props.type === "question"); 
  // isQuestionをつかって CSS をきりかえる。
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        // return 文の中での if else の書き方
        {isQuestion ? (
          <Avatar alt="icon" src={Ringo} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
  <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat