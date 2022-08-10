import avatar from "./profile-pic.jpg";
import "./App.css";


export default function Avatar() {
  return (
    <div className="Avatar">
      <img src={avatar} className="avatar" alt="profile avatar" />
    </div>
  );
}
