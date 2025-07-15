import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
    const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center" }}>Step 2 Content: Profile Creation</div>
      <Button
        onClick={() => navigate("/register/step-3")}
        sx={{ mt: 2 }}
        variant="contained"
      >
        Next
      </Button>
    </>
  );
};

export default Step2;
