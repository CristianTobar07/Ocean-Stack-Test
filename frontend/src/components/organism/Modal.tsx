// src/components/molecules/ReusableModal.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface ReusableModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
}

export const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Guardar",
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button sx={{ color: "#7c4dff" }} onClick={onClose}>
          Cancelar
        </Button>
        {onConfirm && (
          <Button variant="contained" onClick={onConfirm}>
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
