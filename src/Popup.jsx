import { Dialog } from "@mui/material";

export default function Popup({ open, close }) {
  return (
    <Dialog
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      open={open}
      onClose={close}
      maxWidth="xl"
    >
      <div className="popup"></div>
    </Dialog>
  );
}
