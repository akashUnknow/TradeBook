import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FooterApp = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start p-8 bg-gray-100 text-gray-800 gap-8">
      <div>
        <span className="text-xl font-extrabold tracking-wide">TradeBook</span>
        <h1>
          Your data-driven trading companion. Analyze, optimize, and improve
          your trading performance.
        </h1>
      </div>
      <div>
        <h1>Product</h1>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>Email: support@tradebook.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Stay updated</li>
          <li>
            <Input />
            <Button>Subscribe</Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterApp;
