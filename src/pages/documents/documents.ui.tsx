import { Typography, Container, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { documentQueries, documentTypes } from "~entities/document";

export const DocumentsPage = () => {
  const { data: documentData } = documentQueries.useGetDocuments();

  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-normal text-center mb-8 text-gray-800"
        style={{ fontSize: "clamp(1.5rem, 5vw, 2.4rem)" }}
      >
        Структурные подразделения
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        className="notion-like-embed embed code notion-like-embed  mb-20"
      >
        {documentData?.data.map(
          (document: documentTypes.DocumentSchema, i: number) => (
            <Box
              key={i}
              className="flex items-center rounded-[8px] p-[16px] border border-[#e0e0e0] transition-transform duration-200 hover:translate-y-[-4px] md:flex md:flex-col "
            >
              <Box
                component="img"
                src={document.photo}
                alt={document.title}
                className="w-[64px] h-[64px] rounded-[8px] mr-[16px] object-cover"
              />
              <Box className="md:flex md:flex-col md:items-center md:gap-3">
                <Typography
                  variant="h6"
                  className="font-medium text-primary md:text-center"
                >
                  {document.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {document.subtitle}
                </Typography>

                <RouterLink
                  to={`/document/${document.slug}`}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#1976d2",
                    textDecoration: "none",
                  }}
                >
                  Перейти
                </RouterLink>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Container>
  );
};
