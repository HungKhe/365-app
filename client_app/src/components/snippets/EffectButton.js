import React from 'react';

function EffectButton({nameButton, disabled}) {
  return (
    <div className="grBtnEffect">
        <div className="bgEffect"></div>
        <button disabled={disabled} type="submit" className="btnEffect">{nameButton}</button>
    </div>
  );
}

export default EffectButton;
