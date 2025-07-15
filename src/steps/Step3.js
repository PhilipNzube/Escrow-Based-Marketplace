import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
    const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center" }}>Step 3 Content: Profile Creation</div>
      <Button
        onClick={() => navigate("/register/step-4")}
        sx={{ mt: 2 }}
        variant="contained"
      >
        Next
      </Button>
    </>
  );
};

export default Step3;
