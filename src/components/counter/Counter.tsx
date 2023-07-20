import ImageButton from "../imageButton/ImageButton";
import plus from "../../assets/icon/icons8-plus-math-24.png";
import minus from "../../assets/icon/icons8-subtract-24.png";
import "./counter.scss";

interface CounterProps {
  quantity: number;
  incrementQty: () => void;
  decrementQty: () => void;
  theme: string;
}

function Counter({
  quantity,
  incrementQty,
  decrementQty,
  theme,
}: CounterProps) {
  return (
    <div className="counter">
      <h6 className="quantity">{quantity}</h6>
      <div className="counter-buttons">
        <div className="increment" onClick={incrementQty}>
          <ImageButton src={plus} alt="плюс" theme={theme} />
        </div>
        <div className="decrement" onClick={decrementQty}>
          <ImageButton src={minus} alt="мінус" theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
