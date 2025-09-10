"use client";
import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { formatCurrency } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, clearCart } = useStore();
  const router = useRouter();
  const total = cart.reduce((s, it) => s + it.qty * it.product.price, 0);

  const [method, setMethod] = useState<'card' | 'wallet' | 'cod'>('card');

  // Card fields
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Wallet fields
  const [walletProvider, setWalletProvider] = useState<'jazzcash' | 'easypaisa'>('jazzcash');
  const [walletUsername, setWalletUsername] = useState('');
  const [walletPhone, setWalletPhone] = useState('');

  if (!cart.length) return <div className="p-8 max-w-4xl mx-auto">Your cart is empty.</div>;

  const validate = () => {
    if (method === 'card') {
      if (!cardName.trim()) return 'Cardholder name is required';
      const nums = cardNumber.replace(/\s+/g, '');
      if (!/^[0-9]{12,19}$/.test(nums)) return 'Enter a valid card number (12-19 digits)';
      if (!/^[0-9]{3,4}$/.test(cardCvv)) return 'Enter a valid CVV';
      if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(cardExpiry)) return 'Expiry must be MM/YY';
    }
    if (method === 'wallet') {
      if (!walletUsername.trim()) return 'Wallet username is required';
      if (!/^[0-9]{9,15}$/.test(walletPhone.replace(/[^0-9]/g, ''))) return 'Enter a valid mobile number';
    }
    return null;
  };

  const onPlace = () => {
    const err = validate();
    if (err) { alert(err); return; }

    // Build a friendly summary
  const summary = `You are about to pay ${formatCurrency(total + 9)} using ${method === 'card' ? 'Card' : method === 'wallet' ? `${walletProvider === 'jazzcash' ? 'JazzCash' : 'EasyPaisa'} (user: ${walletUsername})` : 'Cash on Delivery'}. Continue?`;
    if (!window.confirm(summary)) return;

    // Simulate payment processing delay
    setTimeout(() => {
      clearCart();
      // success -> thank you page
      router.push('/checkout/thank-you');
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4 mb-6">
          {cart.map(it => (
            <div key={it.product.id} className="flex items-center gap-4">
              <img src={it.product.images[0]} alt={it.product.title} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1">
                <div className="font-semibold">{it.product.title}</div>
                <div className="text-sm text-gray-500">Qty: {it.qty}</div>
              </div>
              <div className="font-semibold">{formatCurrency(it.product.price * it.qty)}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Payment method</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border rounded-md">
                <input type="radio" name="payment" checked={method === 'card'} onChange={() => setMethod('card')} className="accent-indigo-600" />
                <div>
                  <div className="font-medium">Card (Visa / MasterCard)</div>
                  <div className="text-sm text-gray-500">Enter card details below.</div>
                </div>
              </label>

              {method === 'card' && (
                <div className="mt-3 grid grid-cols-1 gap-3">
                  <input className="border px-3 py-2 rounded-md" placeholder="Cardholder name" value={cardName} onChange={e => setCardName(e.target.value)} />
                  <input className="border px-3 py-2 rounded-md" placeholder="Card number (xxxx xxxx xxxx)" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                  <div className="flex gap-3">
                    <input className="border px-3 py-2 rounded-md flex-1" placeholder="MM/YY" value={cardExpiry} onChange={e => setCardExpiry(e.target.value)} />
                    <input className="border px-3 py-2 rounded-md w-28" placeholder="CVV" value={cardCvv} onChange={e => setCardCvv(e.target.value)} />
                  </div>
                </div>
              )}

              <label className="flex items-center gap-3 p-3 border rounded-md">
                <input type="radio" name="payment" checked={method === 'wallet'} onChange={() => setMethod('wallet')} className="accent-indigo-600" />
                <div>
                  <div className="font-medium">Mobile Wallet (JazzCash / EasyPaisa)</div>
                  <div className="text-sm text-gray-500">Provide your wallet details below to receive a payment prompt.</div>
                </div>
              </label>

              {method === 'wallet' && (
                <div className="mt-3 grid grid-cols-1 gap-3">
                  <div className="flex gap-2">
                    <button onClick={() => setWalletProvider('jazzcash')} type="button" className={`px-3 py-2 rounded-md ${walletProvider==='jazzcash'?'bg-indigo-600 text-white':'bg-gray-100'}`}>JazzCash</button>
                    <button onClick={() => setWalletProvider('easypaisa')} type="button" className={`px-3 py-2 rounded-md ${walletProvider==='easypaisa'?'bg-indigo-600 text-white':'bg-gray-100'}`}>EasyPaisa</button>
                  </div>
                  <input className="border px-3 py-2 rounded-md" placeholder="Wallet username" value={walletUsername} onChange={e => setWalletUsername(e.target.value)} />
                  <input className="border px-3 py-2 rounded-md" placeholder="Mobile number" value={walletPhone} onChange={e => setWalletPhone(e.target.value)} />
                </div>
              )}

              <label className="flex items-center gap-3 p-3 border rounded-md">
                <input type="radio" name="payment" checked={method === 'cod'} onChange={() => setMethod('cod')} className="accent-indigo-600" />
                <div>
                  <div className="font-medium">Cash on Delivery (COD)</div>
                  <div className="text-sm text-gray-500">Pay with cash when the order arrives.</div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Order summary</h3>
            <div className="p-4 bg-neutral-50 rounded-md">
              <div className="flex items-center justify-between"><div>Subtotal</div><div>{formatCurrency(total)}</div></div>
              <div className="flex items-center justify-between mt-2"><div>Shipping</div><div>{formatCurrency(9)}</div></div>
              <div className="flex items-center justify-between mt-2 font-semibold text-lg"><div>Total</div><div>{formatCurrency(total + 9)}</div></div>
            </div>

            <div className="mt-4 flex justify-end">
              <button onClick={onPlace} className="px-6 py-3 rounded-md bg-indigo-600 text-white">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
