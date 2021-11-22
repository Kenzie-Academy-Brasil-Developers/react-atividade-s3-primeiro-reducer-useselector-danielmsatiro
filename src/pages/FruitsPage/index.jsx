import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";

const FruitsPage = () => {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <div>
      <input onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>Adicionar fruta</button>

      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </div>
  );
};

export default FruitsPage;
