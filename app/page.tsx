import styles from "./page.module.css";
import Hero from "./components/Hero";
import Container from "./components/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Hero title={"CUBE"} subTitle={"アウトプットしていくサイト"} imageOn />
      </Container>
    </>
  );
}
