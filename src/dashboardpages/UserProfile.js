import { useEffect } from "react";
import { usePageMetadata } from "../PageContext.js";

const UserProfile = () => {
      const { setPageMetadata } = usePageMetadata();
      
        // Set page metadata when component mounts
        useEffect(() => {
          setPageMetadata({
            title: "User Profile",
            subtitle: "Manage your account and view activity",
          });
      
          // Reset metadata when component unmounts (optional, to avoid stale data)
          return () => {
            setPageMetadata({ title: "Dashboard", subtitle: "" });
          };
        }, [setPageMetadata]);
  return (
    <>
      <div style={{ textAlign: "center" }}>Step 2 Content: Profile Creation</div>
    </>
  );
};

export default UserProfile;
