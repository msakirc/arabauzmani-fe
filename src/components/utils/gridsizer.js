import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function fullRowSize() {
    const theme = useTheme();

    if (useMediaQuery(theme.breakpoints.up('lg'))) {
        return 18;
    }

    if (useMediaQuery(theme.breakpoints.up('md'))) {
        return 9;
    }

    return 3;
}

function twoThirdSize() {
    const theme = useTheme();

    if (useMediaQuery(theme.breakpoints.up('lg'))) {
        return 12;
    }

    if (useMediaQuery(theme.breakpoints.up('md'))) {
        return 6;
    }

    return 3;
}

function oneThirdSize() {
    const theme = useTheme();

    if (useMediaQuery(theme.breakpoints.up('lg'))) {
        return 6;
    }

    if (useMediaQuery(theme.breakpoints.up('md'))) {
        return 3;
    }

    return 3;
}

export { fullRowSize, twoThirdSize, oneThirdSize }