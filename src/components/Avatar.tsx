import avatar from "../assets/profile-pic.jpg";

export default function Avatar() {
  return (
    <div className="Avatar">
      <img src={avatar} className="avatar" alt="profile avatar" />
    </div>
  );
}
