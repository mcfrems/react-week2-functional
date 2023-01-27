import React from 'react'

function Header() {

    //create state for username
    const [username, setUsername] = React.useState("John Doe")
    //create state for image
    const [imageUrl, setImageUrl] = React.useState("https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

const changeUser = () => {
    //console.log('change')
    if (username === "John Doe") {
        //change state
        setUsername("Jane Smith")
        setImageUrl()
    }
    else {
        setUsername("John Doe")
        setImageUrl("https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
    }
}

  return (
    <div className="header-container">
        <div className="header-profile">
            <p>{username}</p>
            <img className="profile-img"
                src={imageUrl} />
        </div>
        <button onClick={changeUser}>Change Name</button>



    </div>
  )
}

export default Header