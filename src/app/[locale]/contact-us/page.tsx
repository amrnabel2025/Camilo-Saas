import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const ContactUs = () => {
    const t = useTranslations('ContactUs');

  return (
    <Box
      sx={{
        mx: 2, // equivalent to 'mx-5'
        mt: 6,
        maxWidth: { xs: '100%', lg: '80%', xl: '60%' }, 
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          {t('header')}
      </Typography>
    </Box>
  );
};

export default ContactUs;
