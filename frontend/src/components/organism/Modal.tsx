// src/components/molecules/ReusableModal.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

interface ReusableModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  backgroundImage?: string;
}

export const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Guardar",
  backgroundImage,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Box
        sx={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <DialogTitle
          sx={{
            color: backgroundImage ? "#fff" : "inredsherit",
            textAlign: "center",
            mb: 0,
            pb: 0,
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button
            sx={
              backgroundImage
                ? { background: "#7c4dff", color: "white" }
                : { color: "#7c4dff" }
            }
            onClick={onClose}
          >
            Cerrar
          </Button>
          {onConfirm && (
            <Button variant="contained" onClick={onConfirm}>
              {confirmText}
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
};
