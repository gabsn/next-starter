import React from 'react';

export const H1: React.FC = ({ children}) => (
  <>
    <h1>
      {children}
    </h1>
    <style jsx>
      {`
        h1 {
          margin: 0;
          font-size: 4rem;
          text-align: center;
        }
      `}
    </style>
  </>
);