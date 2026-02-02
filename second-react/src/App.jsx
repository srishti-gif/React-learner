import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const cards = data.map((item) => <Entry key={item.id} {...item} />);

  return (
    <>
      <Header />
      <main className="container">{cards}</main>
    </>
  );
}
