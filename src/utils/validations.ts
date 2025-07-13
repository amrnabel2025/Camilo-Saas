import { useTranslations } from "next-intl";
import * as yup from "yup";

const contactUsValidation = (t: ReturnType<typeof useTranslations>) =>
  yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(2, t("form.errors.name_min"))
      .max(50, t("form.errors.name_max"))
      .matches(/^[a-zA-Z\s]+$/, t("form.errors.name_invalid"))
      .required(t("form.errors.name_required")),
    email: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("form.errors.email_invalid")
      )
      .required(t("form.errors.email_required")),

    message: yup
      .string()
      .trim()
      .min(10, t("form.errors.message_min"))
      .max(500, t("form.errors.message_max"))
      .required(t("form.errors.message_required")),
    confirm: yup
      .bool()
      .oneOf([true], t("form.errors.terms_required"))
      .optional(),
  });

const partnerFormValidation = (t: ReturnType<typeof useTranslations>) =>
  yup.object().shape({
    company_name: yup
      .string()
      .trim()
      .max(50, t("errors.company_name_max"))
      .required(t("errors.company_name_required")),

    company_email: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("errors.company_email_invalid")
      )
      .required(t("errors.company_email_required")),

    business_address: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z\u0600-\u06FF\s]+$/,
        t("errors.business_address_invalid")
      )
      .min(3, t("errors.business_address_min"))
      .max(500, t("errors.business_address_max"))
      .required(t("errors.business_address_required")),

    website_url: yup
      .string()
      .trim()
      .matches(/^(https?):\/\/[^\s/$.?#].[^\s]*$/, t("errors.website_invalid"))
      .required(t("errors.website_required")),

    registration_number: yup
      .string()
      .trim()
      .matches(/^\d+$/, t("errors.registration_number_invalid"))
      .min(3, t("errors.registration_number_min"))
      .max(15, t("errors.registration_number_max"))
      .required(t("errors.registration_number_required")),

    industry: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("errors.industry_invalid"))
      .min(2, t("errors.industry_min"))
      .max(30, t("errors.industry_max"))
      .required(t("errors.industry_required")),
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("errors.name_invalid"))
      .min(2, t("errors.name_min"))
      .max(30, t("errors.name_max"))
      .required(t("errors.name_required")),
    position: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("errors.position_invalid"))
      .min(2, t("errors.position_min"))
      .max(30, t("errors.position_max"))
      .required(t("errors.position_required")),

    email: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("errors.email_invalid")
      )
      .required(t("errors.email_required")),
    mobile: yup
      .string()
      .trim()
      .matches(/^\d{8,16}$/, t("errors.phone_invalid")) // Ensures only digits and length between 6-14
      .required(t("errors.phone_required")),

    entity_type: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("errors.entity_invalid"))
      .required(t("errors.entity_required")),

    recaptcha: yup.string().required(t("errors.recaptcha_required")),
    confirm: yup.bool().oneOf([true], t("errors.terms_required")),
  });

const careersValidation = (t: ReturnType<typeof useTranslations>) =>
  yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("errors.name_invalid"))
      .min(2, t("errors.name_min"))
      .max(50, t("errors.name_max"))
      .required(t("errors.name_required")),
    email: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("errors.email_invalid")
      )
      .required(t("errors.email_required")),

    phone_number: yup
      .string()
      .trim()
      .matches(/^\d{8,16}$/, t("errors.phone_invalid"))
      .required(t("errors.phone_required")),

    job_opening: yup.string().trim().required(t("errors.job_opening_required")),

    country: yup.string().trim().required(t("errors.country_required")),

    years_of_experience: yup
      .number()
      .min(0, t("errors.years_of_experience_min"))
      .max(30, t("errors.years_of_experience_max"))
      .required(t("errors.years_of_experience_required")),

    notice_period: yup
      .number()
      .integer(t("errors.notice_period_integer"))
      .max(365, t("errors.notice_period_max"))
      .required(t("errors.notice_period_required")),

    on_site: yup
      .boolean()
      .isTrue(t("errors.on_site_required"))
      .required(t("errors.on_site_required")),

    currency: yup.string().trim().required(t("errors.currency_required")),

    current_salary: yup
      .number()
      .integer(t("errors.current_salary_integer"))
      .min(0, t("errors.current_salary_min"))
      .max(9999999, t("errors.current_salary_max"))
      .required(t("errors.current_salary_required")),

    expected_salary: yup
      .number()
      .integer(t("errors.expected_salary_integer"))
      .min(0, t("errors.expected_salary_min"))
      .max(9999999, t("errors.expected_salary_max"))
      .required(t("errors.expected_salary_required")),

    recaptcha: yup.string().required(t("errors.recaptcha_required")),
  });

export { careersValidation, contactUsValidation, partnerFormValidation };
