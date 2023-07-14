import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const BeerPage = () => {
  const navigate = useNavigate();
  const id = useParams<{ id: string }>().id;

  return (
    <div>
      <h1>Beer Page</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default BeerPage;
