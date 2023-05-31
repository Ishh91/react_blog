import "./Settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" >
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
             src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
        alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Ishant"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="ishant@gmail.com"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="*********"
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          
        </form>
      </div>
      
      <Sidebar/>
    </div>
  )
}
