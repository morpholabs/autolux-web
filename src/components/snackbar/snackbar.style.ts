import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    close: {
        padding: theme.spacing(0.5),
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
}));