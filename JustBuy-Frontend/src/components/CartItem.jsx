export default function CartItem({ name, price, qty, setCart }) {
  const handleClick = (e) => {
    setCart((prev) => {
      let currEl = prev.find((el) => el.name === name);
      let rest = prev.filter((el) => el.name !== name);
      let operation = e.target.id;
      if (operation === "plus") {
        return [...rest, { name: name, price: price, qty: currEl.qty + 1 }];
      }
      if (operation === "minus") {
        if (currEl.qty > 1) {
          return [...rest, { name: name, price: price, qty: currEl.qty - 1 }];
        } else {
          return [...prev];
        }
      }
      if (operation === "remove") {
        return [...rest];
      }
      return [...prev];
    });
  };

  return (
    <div className="flex justify-evenly items-center min-h-14 border border-b-4 py-3">
      <h1 className="w-6/12 font-bold">{name}</h1>
      <div className="flex items-center">
        <img
          className="cursor-pointer w-6 h-6"
          onClick={handleClick}
          src="minus.svg"
          alt="minus sign"
          id="minus"
        />
        <span className="mx-2 overflow-hidden">{qty}</span>
        <img
          className="cursor-pointer w-6 h-6"
          onClick={handleClick}
          src="plus.svg"
          alt="plus sign"
          id="plus"
        />
      </div>
      <div className="flex items-center">
        <img
          className="cursor-pointer w-6 h-6"
          onClick={handleClick}
          src="trash.svg"
          alt="trash"
          id="remove"
        />
      </div>
    </div>
  );
}
