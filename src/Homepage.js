import React from 'react'
import Profile from './Profile';

function Homepage() {

    const [title, setTitle] = React.useState('Quotes')
    const [userone, setUserone] = React.useState({
        username: "John Doe",
        imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    })

    const [usertwo, setUsertwp] = React.useState({
        username: "Jane Smith",
        imageUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    })
    //userone,username
    //userone.imageUrl

  return (
    <div>
        <h1>{title}</h1>
        <Profile title={title} user={userone} 
                setTitle={setTitle} />
        <Profile title={title} user={usertwo} 
                setTitle={setTitle} />
    </div>
  )
}

export default Homepage