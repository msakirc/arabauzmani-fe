import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function GridSizer() {
    const theme = useTheme();

    if (useMediaQuery(theme.breakpoints.up('lg'))) {
        return 18;
    }

    if (useMediaQuery(theme.breakpoints.up('md'))) {
        return 9;
    }

    return 3;
}