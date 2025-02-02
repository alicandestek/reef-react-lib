import React from 'react';

export const Danger: React.FC<unknown> = ({ children }): JSX.Element => (
  <div className="alert alert-danger mt-2 border-rad" role="alert">
    {children}
  </div>
);
