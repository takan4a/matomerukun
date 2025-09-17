import { LinkButton } from "./children/LinkButton";

export const App = () => {
  const title: string = "Hello World!";

  return (
    <div className="App">
      <h1>{title}</h1>
      <LinkButton text="ボタン" link="/test" />
    </div>
  );
}


