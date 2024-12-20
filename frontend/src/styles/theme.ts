export const theme = {
    colors: {
        primary: '#0066B3',
        secondary: '#003E6C',
        accent: '#FF9F1C',
        text: '#2C2C2C',
        textLight: '#6C6C6C',
        background: '#F5F7FA',
        white: '#FFFFFF',
        error: '#DC3545',
        success: '#28A745',
        border: '#E1E4E8'
    },
    typography: {
        fontFamily: "'Inter', 'Roboto', sans-serif",
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem'
        },
        fontWeight: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        lineHeight: '1.5'
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem'
    },
    borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px'
    },
    shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.05)'
    },
    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1280px'
    }
};
