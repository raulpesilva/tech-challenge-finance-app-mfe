import { Button } from "@/components/shared/Button";
import Loading from "../../assets/icons/loading-icon.svg";

export default function Page() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home</p>

      <Button variant="contained" color="primary">
        Button
      </Button>
      <Button variant="contained" color="secondary">
        Button
      </Button>
      <Button variant="contained" color="tertiary">
        Button
      </Button>
      <Button variant="contained" color="error">
        Button
      </Button>
      <Button variant="contained" color="cta">
        Button
      </Button>

      <Button variant="contained" color="primary" disabled>
        Button
      </Button>
      <Button variant="contained" color="secondary" disabled>
        Button
      </Button>
      <Button variant="contained" color="tertiary" disabled>
        Button
      </Button>
      <Button variant="contained" color="error" disabled>
        Button
      </Button>
      <Button variant="contained" color="cta" disabled>
        Button
      </Button>

      <Button variant="contained" color="primary" loading>
        Button
      </Button>
      <Button variant="contained" color="secondary" loading>
        Button
      </Button>
      <Button variant="contained" color="tertiary" loading>
        Button
      </Button>
      <Button variant="contained" color="error" loading>
        Button
      </Button>
      <Button variant="contained" color="cta" loading>
        Button
      </Button>

      <Button variant="outlined" color="primary">
        Button
      </Button>
      <Button variant="outlined" color="secondary">
        Button
      </Button>
      <Button variant="outlined" color="tertiary">
        Button
      </Button>
      <Button variant="outlined" color="error">
        Button
      </Button>
      <Button variant="outlined" color="cta">
        Button
      </Button>

      <Button variant="outlined" color="primary" disabled>
        Button
      </Button>
      <Button variant="outlined" color="secondary" disabled>
        Button
      </Button>
      <Button variant="outlined" color="tertiary" disabled>
        Button
      </Button>
      <Button variant="outlined" color="error" disabled>
        Button
      </Button>
      <Button variant="outlined" color="cta" disabled>
        Button
      </Button>

      <Button variant="outlined" color="primary" loading>
        Button
      </Button>
      <Button variant="outlined" color="secondary" loading>
        Button
      </Button>
      <Button variant="outlined" color="tertiary" loading>
        Button
      </Button>
      <Button variant="outlined" color="error" loading>
        Button
      </Button>
      <Button variant="outlined" color="cta" loading>
        Button
      </Button>

      <Button variant="contained" color="primary">
        <Loading />
        Button
      </Button>
      <Button variant="outlined" color="primary">
        <Loading />
        Button
      </Button>

      <Button variant="contained" color="primary">
        Button
        <Loading />
      </Button>
      <Button variant="outlined" color="primary">
        Button
        <Loading />
      </Button>

      <Button variant="contained" color="primary">
        <Loading />
      </Button>
      <Button variant="outlined" color="primary">
        <Loading />
      </Button>
    </div>
  );
}
