import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";

export const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/user-profile"
        className="flex items-center font-bold bg-white hover:text-orange-500 transition-colors"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500 transition-colors"
      >
        Log Out
      </Button>
    </>
  );
};
