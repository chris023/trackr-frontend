import { createMuiTheme } from '@material-ui/core/'

const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiTableRow: {
      root: {
        cursor: 'pointer',
      },
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
  },
})

export default Theme
