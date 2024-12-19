import React from 'react';
import '../style/Wallet.css';
import { LuRefreshCcw } from "react-icons/lu";
import { IoWalletSharp } from "react-icons/io5";


const Wallet = () => {
  return (
    <>
      <div className="wallet">
        <div className='wallet-current-balance-container'>
            <div className='wallet-current-balance'>₹50,000</div>
            {/* <LuRefreshCcw className='wallet-current-balance-refresh'/> */}
        </div>
        <div className="allet-current-balance-text"><IoWalletSharp/> Wallet balance</div>
        <div className="wallet-button-container">
            <button className='wallet-withdraw-button'>Withdraw</button>
            <button className='wallet-reacharge-button'>Reacharge</button>
        </div>
      </div>
    </>
  )
}

export default Wallet
