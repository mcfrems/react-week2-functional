import React from 'react'

function Profile(props) {

    //create state for title
    const [myTitle, setMyTitle] = React.useState(props.title)

  return (
    <div className="profile-container">
        <h1>{myTitle}</h1>
        <img src={props.user.imageUrl} 
        clasName="profile-image"/>
        <p>{props.user.imageUrl}</p>
        <button onClick ={()=> props.setTitle("hello")}>Change Parent's Title</button>
        <button onClick ={()=> props.setMyTitle(props.user.username)}>Change My Title</button>
    </div>
  )
}

export default Profile