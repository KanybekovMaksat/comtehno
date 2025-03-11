import { useState } from "react";
import { Drawer, Box, Typography, Button, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import { pathLinks } from "~shared/lib";

export const FeatBack = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Плавающая кнопка */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "orange",
          color: "white",
          padding: 16,
          borderRadius: 50,
          zIndex: 100,
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <ChatIcon sx={{ fontSize: 30 }} />
      </div>

      {/* Боковое окно с чатом */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          {/* Заголовок и кнопка закрытия */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img style={{ width: 40 }} src="/public/comtehno.png" alt="" />
              <Typography
                style={{
                  backgroundColor: "#0F766E",
                  color: "white",
                  padding: 6,
                  borderRadius: 8,
                  fontSize: 20,
                }}
                variant="h3"
              >
                Comtehno
              </Typography>
            </div>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div>
                <span style={{ marginRight: 10 }}>Добрый день</span>
                <WavingHandIcon sx={{ color: "orange" }} />
              </div>
              <p>
                Если вам нужна информация о выборе направления или курса, мы
                готовы помочь.
              </p>
              <div>
                <span>
                  Пишите в чат и наш менеджер расскажет обо всех особенностях и
                  ответит на любые вопросы
                </span>
                <PanToolAltIcon
                  sx={{
                    color: "orange",
                    fontSize: 30,
                    transform: "rotate(180deg)",
                  }}
                />
              </div>
            </div>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                mt: 2,
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                color="success"
                href={pathLinks.whatsapp}
                target="_blank"
              >
                <WhatsAppIcon sx={{ fontSize: 30, marginRight: "6px" }} />
                <span>Whattsap</span>
              </Button>
              <Button
                variant="contained"
                color="primary"
                href={pathLinks.telegram}
                target="_blank"
              >
                <TelegramIcon sx={{ fontSize: 30, marginRight: "6px" }} />
                <span>Telegram</span>
              </Button>
              <Button
                variant="contained"
                color="warning"
                href={pathLinks.botUlug}
                target="_blank"
              >
                <AndroidOutlinedIcon
                  sx={{ fontSize: 30, marginRight: "6px" }}
                />
                <span>Bot-Ulug</span>
              </Button>
            </Box>
          </div>
        </Box>
      </Drawer>
    </>
  );
};
