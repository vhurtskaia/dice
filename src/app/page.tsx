import {Alert, AlertTitle} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Home() {
  return (
      <main >
        <Alert
            variant="filled"
            severity="success"
            icon={<CheckCircleOutlineIcon fontSize="inherit" />}
        >
          You won
        </Alert>

        <Alert variant="filled" severity="error">
          <AlertTitle>You lost</AlertTitle>
          Number was higher
        </Alert>

        <div>

        </div>
      </main>
  );
}