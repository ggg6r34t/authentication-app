import { Box, Divider, Typography } from "@mui/material";

function Separator() {
  return (
    <Box position="relative" py={0.25}>
      <Divider sx={{ backgroundColor: "#01e95e" }} />
      <Box
        px={1.5}
        lineHeight={1}
        sx={{
          backgroundColor: "#080518",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      >
        <Typography
          variant="button"
          color="#01e95e"
          fontWeight="medium"
          textTransform="lowercase"
        >
          or
        </Typography>
      </Box>
    </Box>
  );
}

export default Separator;
