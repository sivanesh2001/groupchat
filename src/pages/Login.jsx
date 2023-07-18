import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/fa/github";
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { instagram } from 'react-icons-kit/fa/instagram';

const Login = () => {
  const { currentUser, signInWithGoogle } = UserAuth();
  const Navigate = useNavigate();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      Navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div>
      <div className="hero min-h-screen"style={{ backgroundColor: "#E1EBEE", color: "" }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold"> Say Hello..!👋🏻</h1>
            <p className="py-6">
               have a nice convercation with firend and colleagues 
               "Connecting Minds, Sharing Moments, Building Memories."
               🤝💬📸✨
            </p>
            <button onClick={handleLogin} className="btn btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </div>
     <footer className="footer items-center p-4 text-neutral-content fixed bottom-0 w-full" style={{ backgroundColor: "#041E42", color: "white" }}>
        <div className="items-center grid-flow-col">
          <p>Developed by Sivaneshwaran R N </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Icon
                    icon={instagram}
                    size={32}
                    style={{
                      marginRight: '1rem',
                      
                      cursor: 'pointer',
                    }}
                    onClick={ () =>  window.open('https://instagram.com/s.i.v.a__s.i.v.a.n.e.s.h?igshid=MzNlNGNkZWQ4Mg==', '_blank')}
                     
                    
                  />
                  <Icon
                    icon={linkedin}
                    size={32}
                    style={{
                      marginRight: '1rem',
                      
                      cursor: 'pointer',
                    }}
                    onClick={() => window.open('https://www.linkedin.com/in/sivaneshwaran-r-n-31220121b', '_blank')}
                      
                  />
          <Icon
            icon={github}
            size={32}
            style={{
              cursor: "pointer",
            }}
            onClick={() => window.open("https://github.com/", "_blank")}
          />
        </div>
      </footer>
    </div>
  );
};

export default Login;

