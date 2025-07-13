import { Box, Paper, Typography } from "@mui/material";

const features = [
  {
    title: "Real-time Fleet Intelligence",
    desc: "Advanced GPS tracking with AI-powered analytics provides comprehensive visibility across your entire fleet. Monitor vehicle location, status, and performance metrics from a unified dashboard that evolves with your operational needs.",
    image: "/feature1.png",
    label: "Fleet Tracking",
  },
  {
    title: "Predictive Maintenance Management",
    desc: "Transform reactive maintenance into proactive fleet care. Our AI algorithms analyze vehicle data to predict maintenance needs before they cause downtime, extending asset lifespan and optimizing resource allocation.",
    image: "/feature2.png",
    label: "Predictive Maintenance",
  },
  {
    title: "Driver Performance Optimization",
    desc: "Enhance safety and efficiency through AI-driven driver behavior analysis. Identify training opportunities, recognize top performers, and implement continuous improvement programs based on actionable insights.",
    image: "/feature3.png",
    label: "Driver Performance Analytics",
  },
  {
    title: "Fuel Consumption Intelligence",
    desc: "Reduce fuel costs and emissions with advanced consumption monitoring and optimization. Identify inefficiencies, track fuel usage, and driving behaviors to implement targeted improvement strategies.",
    image: "/feature4.png",
    label: "Eco",
  },
  {
    title: "Compliance & Safety Automation",
    desc: "Streamline regulatory compliance with automated documentation and reporting. Ensure adherence to industry standards while maintaining comprehensive safety protocols across your entire operation.",
    image: "/feature5.png",
    label: "Compliance & Safety",
  },
  {
    title: "Enterprise Analytics & Reporting",
    desc: "Transform fleet data into strategic business intelligence. Generate customizable reports, visualize performance trends, and leverage predictive analytics to drive continuous operational improvement.",
    image: "/feature6.png",
    label: "Dashboard",
  },
];

function FeatureCard({
  title,
  desc,
  image,
  label,
}: {
  title: string;
  desc: string;
  image: string;
  label: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: "1 1 540px",
        maxWidth: 570,
        minWidth: 0,
        borderRadius: 4,
        p: { xs: 2, md: 3 },
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          mb: 2,
          borderRadius: 3,
          overflow: "hidden",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt={label}
          style={{
            width: "100%",
            maxWidth: 570,
            height: "auto",
            display: "block",
            // maxHeight: 320,
          }}
        />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#555", fontSize: 15 }}>{desc}</Typography>
    </Paper>
  );
}

const OurFeatures = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1400,
        mx: "auto",
        py: { xs: 4, md: 8 },
        px: { xs: 1, md: 0 },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 22, md: 32 },
          textAlign: "center",
          mb: 1,
        }}
      >
        Our Designed Features for Enterprise Success
      </Typography>
      <Typography
        sx={{
          color: "#888",
          textAlign: "center",
          fontSize: { xs: 13, md: 16 },
          mb: 4,
        }}
      >
        Innovative Tools That Scale With Your Business
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 8 },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "stretch",
        }}
      >
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </Box>
    </Box>
  );
};

export default OurFeatures;
