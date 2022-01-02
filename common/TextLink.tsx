import NextLink, { LinkProps } from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { DetailedHTMLProps, PropsWithChildren, AnchorHTMLAttributes } from 'react';
import { DefaultComponentProps, OverridableTypeMap } from '@mui/material/OverridableComponent';

type AProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type AditionalLinkProps = {
  defaultAElement?:boolean
}

type CustomLinkProps =
PropsWithChildren<LinkProps>
& DefaultComponentProps<OverridableTypeMap>
& AProps
& AditionalLinkProps

export function TextLink({ children, defaultAElement, ...rest }:CustomLinkProps) {
  return (
    <NextLink {...rest as PropsWithChildren<LinkProps>}>
      <MuiLink {...rest as DefaultComponentProps<OverridableTypeMap>}>
        {defaultAElement ? (
          <a {...rest as AProps}>
            {children}
          </a>
        ) : children }
      </MuiLink>
    </NextLink>
  );
}
