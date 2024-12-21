import React, { useState } from 'react';
import '../style/Recharge.css';
import { IoWalletSharp } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";


const Recharge = () => {

    const [rechargeAmount, setRechargeAmount] = useState(100);
    const [rechargeBonus, setRechargeBonus] = useState(115);

    const amount = [
        { id: 1, bonus: 115, amount: 100},
        { id: 2, bonus: 120, amount: 200},
        { id: 3, bonus: 125, amount: 500},
        { id: 4, bonus: 130, amount: 1000},
        { id: 5, bonus: 135, amount: 3000},
        { id: 6, bonus: 140, amount: 5000},
        { id: 7, bonus: 145, amount: 10000},
        { id: 8, bonus: 150, amount: 20000},
        { id: 9, bonus: 160, amount: 50000},
    ]


  return (
    <>
      <div className="recharge">
        <div className="recharge_wallet-card">
            <div className='recharge_wallet-card-text'>
                <span><IoWalletSharp/></span>
                <div>Balance</div>
            </div>
            <div className='recharge_wallet-card-amount'>
                <div>₹50,000 </div>
                <span><BiRefresh/></span>
            </div>
            <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734772618/tc%20Lottery/TotalAssetsBg_jtin0f.png" alt="" />
        </div>

        {/* Recharge amount */}
        <div className="recharge-amount">
            <div className="recharge-amount-heading">
                <span><IoWalletSharp/></span>
                <div>Recharge Amount</div>
            </div>
            <div className="recharge-amount-container">
                {amount.map((i)=>(
                <div key={i.id} onClick={()=> [setRechargeAmount(i.amount), setRechargeBonus(i.bonus)]}>

                <div className={`recharge-amount-container-card-${rechargeAmount == i.amount ? "active" : "desible"}`} >
                    <div>{i.amount < 1000 ? i.amount : `${i.amount/1000}K`}</div>
                    <div className='recharge-amount-container-card-bonus'>
                        <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734772642/tc%20Lottery/gift_yiorp8.png" alt="" />
                        <span>{i.bonus}%</span>
                    </div>
                </div>
                </div>
                ))}
            </div>
        </div>

        <div className="you-get-amount">
            <div className="you-get-amount-heading">
                <div>You get</div>
                <span>+{(rechargeAmount*rechargeBonus)/100 + 15}</span>
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734779419/tc%20Lottery/bar-bg_z17qet.png" alt="" />
            </div>
        </div>

        <div className="recharge-total-amount">
            <div className="recharge-total-amount-card">
                <div>You pay</div>
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734784569/tc%20Lottery/Lever_ituhob.png" alt="" />
                <span>+{rechargeAmount}</span>
            </div>
            <div className="recharge-total-amount-card">
                <div>Recharge bonus</div>
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734784569/tc%20Lottery/Lever_ituhob.png" alt="" />
                <span>+{(rechargeAmount*(rechargeBonus-100))/100}</span>
            </div>
            <div className="recharge-total-amount-card">
                <div>First recharge bonus</div>
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1734784569/tc%20Lottery/Lever_ituhob.png" alt="" />
                <span>+15</span>
            </div>
        </div>

        <button className='recharge-button'>Recharge Now</button>
      </div>
    </>
  )
}

export default Recharge
