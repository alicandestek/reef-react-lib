import React from 'react';
import { BackIcon, DownArrowIcon, PlusIcon } from '../Icons';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  transparent?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
  disabled,
  transparent,
}): JSX.Element => (
  <button type="button" className={`btn btn-reef border-rad ${transparent ? 'btn-reef--transparent' : ''}`} disabled={disabled} onClick={onClick}>
    <span>{children}</span>
  </button>
);

export const EmptyButton: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
}): JSX.Element => (
  <button type="button" className="btn" onClick={onClick}>
    {children}
  </button>
);

// TODO maybe we do not need this one?
export const BackButton = ({ onClick }: ButtonProps): JSX.Element => (
  <EmptyButton onClick={onClick}>
    <BackIcon />
  </EmptyButton>
);

// TODO Move out or refactore!
interface SwitchTokenButton {
  addIcon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface IconButton {
  onClick?: () => void;
}

export const SwitchTokenButton = ({
  addIcon,
  disabled,
  onClick,
}: SwitchTokenButton): JSX.Element => (
  <div className="d-flex justify-content-center">
    <div className="btn-content-field border-rad">
      <button
        type="button"
        className="btn btn-reef border-rad btn-reef--transparent"
        onClick={onClick}
        disabled={disabled}
      >
        {addIcon ? <PlusIcon /> : <DownArrowIcon />}
      </button>
    </div>
  </div>
);

export const IconButton: React.FC<IconButton> = ({
  onClick,
  children,
}): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="btn btn-select border-rad px-2 py-1"
  >
    {children}
  </button>
);

export const ButtonGroup: React.FC<unknown> = ({ children }): JSX.Element => (
  <div className="btn-group">
    {children}
  </div>
);

interface PercentageButton {
  percentage?: number;
  onClick?: () => void;
}
export const PercentageButton: React.FC<PercentageButton> = ({ children, percentage = Number.NaN, onClick }): JSX.Element => (
  <button
    type="button"
    className={`btn ${Number.isNaN(percentage) ? 'btn-reef' : 'btn-secondary'} border-rad me-1`}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
);

export const DangerButton: React.FC<ButtonProps> = ({ children, onClick }): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="btn btn-danger border-rad"
  >
    {children}
  </button>
);
