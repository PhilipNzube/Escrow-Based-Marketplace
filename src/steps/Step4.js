import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
    const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center" }}>Step 4 Content: Profile Creation</div>
      <Button
        onClick={() => navigate("/")}
        sx={{ mt: 2 }}
        variant="contained"
      >
        Finish
      </Button>
    </>
  );
};

export default Step4;
