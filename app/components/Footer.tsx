// app/components/Footer.tsx
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 NGLANE. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
