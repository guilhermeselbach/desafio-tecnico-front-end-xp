export const buyOrSales = (target, setActionType) => {
  const btnBuy = document.getElementById("btnBuy");
  const inputBuy = document.getElementById("inputBuy");
  const btnSales = document.getElementById("btnSale");
  const inputSales = document.getElementById("inputSale");
  if (target.id === "btnBuy") {
    setActionType("buy");
    btnBuy.classList.add("active");
    btnBuy.style.backgroundColor = "#21d4fd";
    inputBuy.style.display = "block";
    btnSales.classList.remove("active");
    btnSales.style.backgroundColor = "#fff";
    inputSales.style.display = "none";
  }
  if (target.id === "btnSale") {
    setActionType("sale");
    btnBuy.classList.remove("active");
    btnBuy.style.backgroundColor = "#fff";
    inputBuy.style.display = "none";
    btnSales.classList.add("active");
    btnSales.style.backgroundColor = "#21d4fd";
    inputSales.style.display = "block";
  }
};
