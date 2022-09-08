import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button>
        <Loader />
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        className={styles.logButton}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    );
  }

  return (
    <button className={styles.logButton} onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
