import { Header } from "../components/Header";
import { Counter } from "../components/Counter";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main>
      <Header heading="Word Counter" subHeading="Free online character and word count tool." />
      <p style={{ textAlign: "center", marginTop: "-30px", marginBottom: "30px" }}>
        Want to see a random joke? <Link to="/joke" style={{ color: "blue", textDecoration: "underline" }}>Click here</Link>.
      </p>
      <Counter />
    </main>
  );
}

