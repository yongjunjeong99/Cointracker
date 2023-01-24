import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setMyMoney(event.target.value);
    console.log(setMyMoney);
  };
  return (
    <div>
      <h1>Today Coins Price{""}</h1>
      {loading ? (
        ""
      ) : (
        <div className={styles.coinNumber}>
          Type of Cryptocurrency: {coins.length}
        </div>
      )}
      {loading ? (
        ""
      ) : (
        <input
          className={styles.inputUSD}
          onChange={onChange}
          value={myMoney}
          type="number"
          placeholder="Write your USD"
        />
      )}
      {loading ? (
        <strong className={styles.loading}>Loading...</strong>
      ) : (
        <select className={styles.select}>
          {coins.map((coin, index) => (
            <option className={styles.option} key={index}>
              {coin.name} ({coin.symbol}) : {myMoney / coin.quotes.USD.price} (
              {coin.symbol})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
