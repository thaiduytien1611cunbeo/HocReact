import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Histories from "./Histories";

function MoneyTransfer() {
  const [histories, setHistories] = useState([]);
  const [money, setMoney] = useState("");

  const total = useMemo(() => {
    return histories.reduce((total, current) => {
      return total + current;
    }, 0);
  }, [histories]);

  const handleHistories = useCallback(() => {
    setHistories([]);
  }, []);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setHistories([...histories, money]);
          setMoney("");
        }}
      >
        <input
          type="number"
          placeholder="Nhập số tiền..."
          value={money}
          onChange={(e) => {
            setMoney(+e.target.value);
          }}
        />
      </form>

      <Histories
        histories={histories}
        total={total}
        handleHistories={handleHistories}
      />
    </div>
  );
}

export default MoneyTransfer;
