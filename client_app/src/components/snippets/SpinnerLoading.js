import React from 'react';

function SpinnerLoading({isShow}) {
  return (
    <div className={`pageLoading ${ isShow ? 'in' : ''}`}></div>
  );
}

export default SpinnerLoading;
