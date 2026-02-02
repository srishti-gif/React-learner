
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Entry key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}
