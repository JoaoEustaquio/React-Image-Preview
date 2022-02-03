import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  state={
    profileimg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }
  render() {
    const {profileimg} = this.state

    return (
      <div className='page'>
        <div className='container'>
          <h1 className='heading'>Add your Image</h1>
          <div className='img-holder'>
            <img src={profileimg} alt="" id="img" className='img'></img>
          </div>
          <input type="file" name="image-upload" id="input" accept='image/*'/>
          <div className='label'>
            <label htmlFor="input" className='image-upload'>
              <i className='material-icons'>add_photo_alternate</i>
              Choose your photo
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
