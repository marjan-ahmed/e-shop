import React from 'react';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="mt-32 bg-gray-900 text-gray-300 pt-16 pb-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-5">
          <h3 className="text-2xl font-extrabold text-white">Eshop</h3>
          <p className="text-sm leading-relaxed text-gray-400">Your destination for quality beauty and electronics. Seamless shopping that blends aesthetics with performance.</p>
          <p className="text-xs text-gray-500">COPYRIGHT © {new Date().getFullYear()} ESHOP INC. ALL RIGHTS RESERVED.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">SHOP</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-white transition" href="#">Beauty</a></li>
            <li><a className="hover:text-white transition" href="#">Electronics</a></li>
            <li><a className="hover:text-white transition" href="#">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">COMPANY</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-white transition" href="#">About Us</a></li>
            <li><a className="hover:text-white transition" href="#">Careers</a></li>
            <li><a className="hover:text-white transition" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">SUPPORT</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-white transition" href="#">FAQ</a></li>
              <li><a className="hover:text-white transition" href="#">Shipping</a></li>
              <li><a className="hover:text-white transition" href="#">Returns</a></li>
            </ul>
        </div>
      </div>
      <div className="mt-16 text-center text-xs text-gray-500 px-6">TERMS OF SERVICE • PRIVACY POLICY</div>
    </footer>
  );
};

export default SiteFooter;
