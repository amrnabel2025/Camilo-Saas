import { Field, FieldProps } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Typography,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  name: string;
  placeholder?: string;
  component?: string;
  type?: string;
  label?: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  isPhone?: boolean;
  isSelect?: boolean;
  options?: Option[];
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}


const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder = '',
  component = 'input',
  type = 'text',
  label,
  required = false,
  error,
  touched,
  isPhone = false,
  isSelect = false,
  options = [],
  size = 'small',
  ...props
}) => {
  const renderInput = () => {
    if (isPhone) {
      return (
        <Field name={name}>
          {({ field, form }: FieldProps) => (
            <PhoneInput
              country={'us'}
              value={field.value}
              onChange={(phone) => form.setFieldValue(name, phone)}
              onBlur={() => form.setFieldTouched(name, true)}
              inputStyle={{
                width: '100%',
                height: '50px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.3)',
                paddingLeft: '48px',
                fontSize: '14px',
              }}
              buttonStyle={{
                border: 'none',
                backgroundColor: 'transparent',
              }}
              containerStyle={{ width: '100%' }}
              placeholder={placeholder}
            />
          )}
        </Field>
      );
    }

    if (isSelect) {
      return (
        <Field name={name}>
          {({ field, form }: FieldProps) => (
              <FormControl fullWidth size="small" error={!!error && touched}>
              <Select
                displayEmpty
                value={field.value ?? ''}
                onChange={(e) => form.setFieldValue(name, e.target.value)}
                onBlur={() => form.setFieldTouched(name, true)}
              >
                <MenuItem disabled value="">
                  {placeholder}
                </MenuItem>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {error && touched && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
          )}
        </Field>
      );
    }

    return (
      <Field name={name}>
        {({ field }: FieldProps) => (
          <TextField
          {...field}
          type={type}
          placeholder={placeholder}
          fullWidth
          multiline={component === 'textarea'}
          size={size || 'small'}
          error={!!error && touched}
          helperText={touched && error}
          sx={{
            '& input::placeholder': {
              color: '#111314',
            },
            '& .MuiInputBase-root': {
              backgroundColor: 'white',
              borderRadius: '8px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0,0,0,0.3)',
            },
          }}
          {...props}
        />
        )}
      </Field>
    );
  };

  return (
    <div>
      {label && (
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 1, color: 'black', display: 'block' }}
        >
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}
      {renderInput()}
    </div>
  );
};

export default InputField;
