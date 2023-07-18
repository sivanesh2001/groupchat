import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser, signOutWithGoogle } = UserAuth();

  const handleLogOut = async () => {
    try {
      await signOutWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Chatbox</a>
        {currentUser ? (
          <button onClick={handleLogOut} className="mr-2">
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
