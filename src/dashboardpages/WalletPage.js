import { useEffect } from "react";
import { usePageMetadata } from "../PageContext.js";

const WalletPage= () => {
      const { setPageMetadata } = usePageMetadata();
      
        // Set page metadata when component mounts
        useEffect(() => {
          setPageMetadata({
            title: "My Wallet",
            subtitle: "Manage your funds and view transaction history",
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

export default WalletPage;
