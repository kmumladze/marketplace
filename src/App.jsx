import marketplaceLogo from "./assets/marketplace.svg";
import messageLogo from "./assets/message.svg";
import heartLogo from "./assets/heart.svg";
import cartLogo from "./assets/cart.svg";
import login from "./assets/login.svg";

export default function App() {
  return (
    <header className="flex gap-4 justify-around my-4">
      <div className="flex items-center gap-3 border-4 border-blue-500 hover:border-blue-700 p-5 rounded-xl">
        <img
          className="max-w-16"
          src={marketplaceLogo}
          alt="marketplace logo"
        />
        <h3 className="font-mono text-xl font-bold text-stone">Marketplace</h3>
      </div>
      <div className="flex w-9 gap-3">
        <img src={messageLogo} alt="" />
        <img src={heartLogo} alt="" />
        <img src={cartLogo} alt="" />
      </div>
    </header>
  );
}
