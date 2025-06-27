import { useEffect } from "react";
import { usePageMetadata } from "../PageContext.js";

const OrderPage= () => {
      const { setPageMetadata } = usePageMetadata();
      
        // Set page metadata when component mounts
        useEffect(() => {
          setPageMetadata({
            title: "My Orders",
            subtitle: "Track your purchase and service orders",
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

export default OrderPage;
