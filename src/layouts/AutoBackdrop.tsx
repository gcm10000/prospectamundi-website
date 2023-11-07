import { Backdrop, CircularProgress } from '@mui/material';

let showBackdropFn: (() => void) | null = null;
let hideBackdropFn: (() => void) | null = null;

export function setAutoShowBackdrop(fn: () => void) {
  showBackdropFn = fn;
}

export function setAutoHideBackdrop(fn: () => void) {
  hideBackdropFn = fn;
}

export function showBackdrop() {
  if (showBackdropFn) {
    showBackdropFn();
  }
}

export function hideBackdrop() {
  if (hideBackdropFn) {
    hideBackdropFn();
  }
}

export interface AutoBackdropProps {
  open: boolean;
}

function AutoBackdrop({ open }: AutoBackdropProps) {
    return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
}

export default AutoBackdrop;