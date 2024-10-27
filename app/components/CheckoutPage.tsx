import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import CartSidebar from '../components/CartSidebar';


interface ShippingInfo {
  name: string;
  address: string;
  postalCode: string;
}

const CheckoutPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    address: '',
    postalCode: '',
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const publicKey = 'pk_test_3482cbb9d63533fa361d8717a083573650d77510';
  const amount = 14935248; // Total amount in kobo for Paystack

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSuccess = (reference: Record<string, any>): void => {
    console.log('Payment successful!', reference);
    alert('Payment successful! Thank you for your purchase.');
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className=" min-h-screen flex">
      {/* Left side: checkout steps */}
      <div className="w-3/5 p-8 ">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="space-y-8">

          {/* Step 1: Email Entry */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold">1. Enter Your Email</h2>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 p-2 mt-2 rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Step 2: Shipping Information */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold">2. Shipping</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
                value={shippingInfo.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full border p-2 rounded"
                value={shippingInfo.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className="w-full border p-2 rounded"
                value={shippingInfo.postalCode}
                onChange={handleInputChange}
              />
            </form>
          </div>

          {/* Step 3: Payment */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold">3. Payment Method</h2>
            <PaystackButton
              amount={amount}
              email={email}
              publicKey={publicKey}
              onSuccess={handlePaymentSuccess}
              text="Proceed to Payment"
              className="w-full bg-black text-white py-2 mt-4 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right side: Cart summary */}
      <div className="w-2/5 p-8 bg-gray-50">
        <button onClick={() => setIsCartOpen(true)} className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">
          Open Cart
        </button>
        {isCartOpen && <CartSidebar onClose={handleCloseCart} />}

        <div className="mt-4 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>₦149,352.48</p>
          </div>
          <button className="w-full bg-black text-white py-2 mt-4 rounded-lg">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
