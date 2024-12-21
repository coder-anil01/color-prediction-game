import React from 'react';
import '../style/Wallet.css';
import { IoWalletSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Wallet = () => {
  return (
    <>
      <div className="wallet">
        <div className='wallet-current-balance-container'>
            <div className='wallet-current-balance'>₹50,000</div>
        </div>
        <div className="allet-current-balance-text"><IoWalletSharp/> Wallet balance</div>
        <div className="wallet-button-container">
            <NavLink to='/withdraw' className='wallet-withdraw-button'>Withdraw</NavLink>
            <NavLink to='/recharge' className='wallet-reacharge-button'>Reacharge</NavLink>
        </div>
      </div>
    </>
  )
}

export default Wallet
