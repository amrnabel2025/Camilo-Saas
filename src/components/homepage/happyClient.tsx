import { Box, Button, Paper, Typography } from "@mui/material";
import {
  CarSVG,
  HeroLineSVG,
  SittingsSVG,
  StarsSVG,
  TimerSVG,
} from "../../../public/SVGs";

const Results = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-around",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        gap: { xs: 6, md: 4 },
        background: "linear-gradient(90deg, #fff7e6 0%, #fff 100%)",
      }}
    >
      {/* Left Side */}
      <Box sx={{ flex: 1, minWidth: 320 }}>
        {/* Heading with accent */}
        <Box sx={{ position: "relative", mb: 2 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.7rem", md: "48px" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Measurable Results for
            <br />
            Enterprise Fleet Operations
          </Typography>
          {/* Yellow accent line */}
          <HeroLineSVG />
        </Box>
        {/* Subheading */}
        <Typography
          sx={{
            color: "#878787",
            mb: 4,
            fontSize: { xs: 14, md: 20 },
            lineHeight: "30px",
          }}
        >
          Optimize Performance, Enhance Safety, and
          <br />
          Reduce Operational Costs.
        </Typography>
        {/* 2x2 Flexbox of Stat Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 2,
                background:
                  "linear-gradient(110deg, rgba(215, 155, 27, 0.12) -0.09%, rgba(254, 248, 161, 0.12) 97.44%)",
                borderRadius: 3,
                minHeight: 110,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#E9B838",
                    mr: 1,
                    fontSize: { xs: 20, md: 38 },
                  }}
                >
                  20%
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: "18px" }}>
                Reduction
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#666", fontSize: 13, width: "50%", mt: -4 }}
                >
                  in operational costs through advanced analytics and route
                  optimization.
                </Typography>
                <SittingsSVG />
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 2,
                bgcolor: "#fffbe6",
                borderRadius: 3,
                minHeight: 110,
                background:
                  "linear-gradient(110deg, rgba(215, 155, 27, 0.12) -0.09%, rgba(254, 248, 161, 0.12) 97.44%)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#E9B838",
                    mr: 1,
                    fontSize: { xs: 20, md: 38 },
                  }}
                >
                  95%
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: "18px" }}>
                Satisfaction
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#666", fontSize: 13, width: "50%", mt: -4 }}
                >
                  customer satisfaction rate with real-time tracking and service
                  reliability.
                </Typography>
                <StarsSVG />
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 2,
                bgcolor: "#fffbe6",
                borderRadius: 3,
                minHeight: 110,
                background:
                  "linear-gradient(110deg, rgba(215, 155, 27, 0.12) -0.09%, rgba(254, 248, 161, 0.12) 97.44%)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#E9B838",
                    mr: 1,
                    fontSize: { xs: 20, md: 38 },
                  }}
                >
                  30%
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: "18px" }}>
                Improvement
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#666", fontSize: 13, width: "50%", mt: -4 }}
                >
                  in fleet management efficiency and asset utilization.
                </Typography>
                <CarSVG />
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 2,
                bgcolor: "#fffbe6",
                borderRadius: 3,
                minHeight: 110,
                background:
                  "linear-gradient(110deg, rgba(215, 155, 27, 0.12) -0.09%, rgba(254, 248, 161, 0.12) 97.44%)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#E9B838",
                    mr: 1,
                    fontSize: { xs: 20, md: 38 },
                  }}
                >
                  40%
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: "18px" }}>
                Increase
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#666", fontSize: 13, width: "50%", mt: -4 }}
                >
                  in driver retention and safety compliance.
                </Typography>
                <TimerSVG />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Right Side: Just an image */}
      <Box
        sx={{
          flex: 1,
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end", lg: "center" },
          justifyContent: "space-around",
          position: "relative",
          mt: { xs: 4, md: 0 },
          minHeight: 850,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end", lg: "flex-end" },
            width: "100%",
            maxWidth: 500,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#E9B838",
              color: "#000",
              borderRadius: "8px",
            }}
          >
            Become a Client
          </Button>
        </Box>
        {/* Replace this with your image */}
        <img
          src="/result-img.png"
          alt="Results visual"
          style={{
            width: "100%",
            maxWidth: 500,
            borderRadius: 24,
            background: "#f5e1a1",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Results;
