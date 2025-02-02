import React from 'react';
import { BackIcon, DownArrowIcon, PlusIcon } from '../Icons';

interface ButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
}): JSX.Element => (
  <button type="button" className="btn btn-reef border-rad" onClick={onClick} data-bs-dismiss="modal">
    {children}
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
        className="btn btn-field border-rad hover-border"
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
    className="btn btn-select border-rad px-2 py-1"
    onClick={onClick}
    data-bs-dismiss="modal"
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
    {children}
  </button>
);
