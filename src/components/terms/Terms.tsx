"use client";
import { usePathname, useRouter } from "@/libs/i18n/navigation";
import { handleLanguageSwitch } from "@/utils/helpers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export default function Main() {
  const t = useTranslations("Legal");
  const Terms = useTranslations("Header");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        mx: "auto",
        my: { xs: 0, md: 2 },
      }}
    >
      <Box
        dir="ltr"
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",
          mt: 2,
        }}
      >
        <Box component="a" href={`/${locale}`}>
          <ArrowBackIcon sx={{ color: "#027669", cursor: "pointer" }} />
        </Box>

        <Button
          onClick={() => handleLanguageSwitch(locale, pathname, router)}
          sx={{
            borderRadius: "8px",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "rgba(255, 255, 255, 0.35)",
            color: "#FFFFFF",
            px: { xs: 1, md: 2 },
            minWidth: 0,
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.45)" },
            gap: 1,
          }}
        >
          <LanguageIcon fontSize="small" sx={{ color: "#027669" }} />
          <Typography
            sx={{
              display: {
                xs: "none",
                md: "block",
                color: "#027669",
              },
            }}
          >
            {Terms("language")}
          </Typography>
        </Button>
      </Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: "26px", md: "58px" },
          fontWeight: "bold",
          lineHeight: { xs: "54px", md: "87px" },
          color: "#00796b",
          textAlign: "center",
          whiteSpace: "nowrap",
          mb: "50px",
        }}
      >
        {t("page_title")}
      </Typography>
      <Container>
        <Stack gap="64px" alignItems="flex-start" sx={{ width: "100%" }}>
          {/* Section: Last Update */}
          <Stack gap="16px" alignItems="flex-start" sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "24px",
                color: "#090909",
                width: "100%",
              }}
            >
              {t("TermsAndConditions.lastUpdate")}
            </Typography>
          </Stack>

          {/* Section 1: Company Details */}
          <Stack gap="16px" alignItems="flex-start" sx={{ width: "100%" }}>
            <Box sx={{ pt: "8px", pb: "8px", width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "bold",
                  lineHeight: { xs: "36px", md: "48px" },
                  color: "#090909",
                  whiteSpace: "nowrap",
                }}
              >
                {t("TermsAndConditions.companyDetails.title")}
              </Typography>
            </Box>
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                {t("TermsAndConditions.companyDetails.legalName")}
                <br />
                {t("TermsAndConditions.companyDetails.crNumber")}
                <br />
                <Box
                  component="a"
                  href="mailto:mashrouk.support@amk.com.sa"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    underline: "none",
                    color: "#000",
                  }}
                >
                  {t("TermsAndConditions.companyDetails.contact")}
                </Box>
              </Typography>
            </Box>
          </Stack>

          {/* Section 2: Key Clauses */}
          <Stack gap="16px" alignItems="flex-start" sx={{ width: "100%" }}>
            <Box sx={{ pt: "8px", pb: "8px", width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "bold",
                  lineHeight: { xs: "36px", md: "48px" },
                  color: "#090909",
                  whiteSpace: "nowrap",
                }}
              >
                {t("TermsAndConditions.keyClauses.title")}
              </Typography>
            </Box>

            {/* Acceptance Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.acceptance.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.acceptance.description")}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw("TermsAndConditions.keyClauses.acceptance.points")
                  .map((point: string) => (
                    <Typography
                      key={`acceptance-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mt: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.acceptance.disclaimer")}
              </Typography>
            </Box>

            {/* Eligibility Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.eligibility.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.eligibility.description")}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw("TermsAndConditions.keyClauses.eligibility.points")
                  .map((point: string) => (
                    <Typography
                      key={`eligibility-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
            </Box>

            {/* Modifications Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.modifications.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.modifications.description")}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw("TermsAndConditions.keyClauses.modifications.points")
                  .map((point: string) => (
                    <Typography
                      key={`modifications-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mt: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.modifications.disclaimer")}
              </Typography>
            </Box>

            {/* Jurisdiction Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.jurisdiction.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.jurisdiction.description")}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw("TermsAndConditions.keyClauses.jurisdiction.points")
                  .map((point: string) => (
                    <Typography
                      key={`jurisdiction-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
            </Box>

            {/* User Responsibility Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.userResponsibility.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t(
                  "TermsAndConditions.keyClauses.userResponsibility.description"
                )}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw(
                    "TermsAndConditions.keyClauses.userResponsibility.points"
                  )
                  .map((point: string) => (
                    <Typography
                      key={`userResponsibility-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
            </Box>

            {/* Ride Booking Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.rideBooking.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.rideBooking.description")}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw("TermsAndConditions.keyClauses.rideBooking.points")
                  .map((point: string) => (
                    <Typography
                      key={`rideBooking-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
            </Box>

            {/* Independent Drivers Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.independentDrivers.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t(
                  "TermsAndConditions.keyClauses.independentDrivers.description"
                )}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw(
                    "TermsAndConditions.keyClauses.independentDrivers.points"
                  )
                  .map((point: string) => (
                    <Typography
                      key={`independentDrivers-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>
            </Box>

            {/* Employed Drivers Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.employedDrivers.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.employedDrivers.description")}
              </Typography>
              <Stack component="ul" sx={{ pl: 2 }}>
                {t
                  .raw("TermsAndConditions.keyClauses.employedDrivers.points")
                  .map((point: string) => (
                    <Typography
                      key={`employedDrivers-${point.slice(0, 20)}`}
                      component="li"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "24px",
                        color: "#090909",
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
              </Stack>

              {/* Safety Requirements */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {t(
                    "TermsAndConditions.keyClauses.employedDrivers.safetyRequirements.title"
                  )}
                </Typography>

                {/* Passengers Safety */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {t(
                      "TermsAndConditions.keyClauses.employedDrivers.safetyRequirements.passengers.title"
                    )}
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2 }}>
                    {t
                      .raw(
                        "TermsAndConditions.keyClauses.employedDrivers.safetyRequirements.passengers.points"
                      )
                      .map((point: string) => (
                        <Typography
                          key={`passengers-${point.slice(0, 20)}`}
                          component="li"
                          variant="body1"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "normal",
                            lineHeight: "24px",
                            color: "#090909",
                            mb: 1,
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                  </Stack>
                </Box>

                {/* Drivers Safety */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {t(
                      "TermsAndConditions.keyClauses.employedDrivers.safetyRequirements.drivers.title"
                    )}
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2 }}>
                    {t
                      .raw(
                        "TermsAndConditions.keyClauses.employedDrivers.safetyRequirements.drivers.points"
                      )
                      .map((point: string) => (
                        <Typography
                          key={`drivers-${point.slice(0, 20)}`}
                          component="li"
                          variant="body1"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "normal",
                            lineHeight: "24px",
                            color: "#090909",
                            mb: 1,
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                  </Stack>
                </Box>
              </Box>

              {/* Liability Limits */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {t(
                    "TermsAndConditions.keyClauses.employedDrivers.liabilityLimits.title"
                  )}
                </Typography>

                {/* Not Liable */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {t(
                      "TermsAndConditions.keyClauses.employedDrivers.liabilityLimits.notLiable.title"
                    )}
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2 }}>
                    {t
                      .raw(
                        "TermsAndConditions.keyClauses.employedDrivers.liabilityLimits.notLiable.points"
                      )
                      .map((point: string) => (
                        <Typography
                          key={`notLiable-${point.slice(0, 20)}`}
                          component="li"
                          variant="body1"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "normal",
                            lineHeight: "24px",
                            color: "#090909",
                            mb: 1,
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                  </Stack>
                </Box>

                {/* Max Liability */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {t(
                      "TermsAndConditions.keyClauses.employedDrivers.liabilityLimits.maxLiability.title"
                    )}
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2 }}>
                    {t
                      .raw(
                        "TermsAndConditions.keyClauses.employedDrivers.liabilityLimits.maxLiability.points"
                      )
                      .map((point: string) => (
                        <Typography
                          key={`maxLiability-${point.slice(0, 20)}`}
                          component="li"
                          variant="body1"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "normal",
                            lineHeight: "24px",
                            color: "#090909",
                            mb: 1,
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                  </Stack>
                </Box>
              </Box>

              {/* Accident Procedures */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {t(
                    "TermsAndConditions.keyClauses.employedDrivers.accidentProcedures.title"
                  )}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "normal",
                    lineHeight: "24px",
                    color: "#090909",
                    mb: 2,
                  }}
                >
                  {t(
                    "TermsAndConditions.keyClauses.employedDrivers.accidentProcedures.description"
                  )}
                </Typography>
                <Stack component="ul" sx={{ pl: 2 }}>
                  {t
                    .raw(
                      "TermsAndConditions.keyClauses.employedDrivers.accidentProcedures.steps"
                    )
                    .map((step: string) => (
                      <Typography
                        key={`accident-${step.slice(0, 20)}`}
                        component="li"
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "normal",
                          lineHeight: "24px",
                          color: "#090909",
                          mb: 1,
                        }}
                      >
                        {step}
                      </Typography>
                    ))}
                </Stack>
              </Box>
            </Box>

            {/* Service Termination Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.serviceTermination.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                {t(
                  "TermsAndConditions.keyClauses.serviceTermination.description"
                )}
              </Typography>
            </Box>

            {/* Governing Law Section */}
            <Box sx={{ pt: 0, pb: "16px", width: "100%" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {t("TermsAndConditions.keyClauses.governingLaw.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                {t("TermsAndConditions.keyClauses.governingLaw.description")}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
