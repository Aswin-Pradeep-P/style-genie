export enum Positions {
  TOP = 'top',
  BOTTOM = 'bottom'
}

export type ToastProps = {
  message: string;
  open: boolean;
  type?: ToastTypes;
  position?: Positions.TOP | Positions.BOTTOM;
  onClose: () => void;
  customStyle?: React.CSSProperties;
};

export enum ToastTypes {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  CHIP = 'chip'
}
