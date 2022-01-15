import NextLink, { LinkProps } from 'next/link';
import { DetailedHTMLProps, PropsWithChildren, AnchorHTMLAttributes } from 'react';

type AProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type AditionalLinkProps = {
  defaultAElement?:boolean
}

type CustomLinkProps =
PropsWithChildren<LinkProps>
& AProps
& AditionalLinkProps

export function Link({ children, defaultAElement, ...rest }:CustomLinkProps) {
  return (
    <NextLink {...rest as PropsWithChildren<LinkProps>}>
      <a tabIndex={-1} {...rest as AProps}>
        {children}
      </a>
    </NextLink>
  );
}
