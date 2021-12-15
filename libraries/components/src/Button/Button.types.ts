import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { useButton } from "@react-aria/button";

type UseButtonProps = Parameters<typeof useButton>[0];

export interface ButtonProps extends UseButtonProps, Pick<MuiButtonProps, 'color' | 'variant' | 'ref' | 'sx' | 'startIcon' | 'endIcon'> {
    className?: string;
    isDisabled?: boolean;
}
