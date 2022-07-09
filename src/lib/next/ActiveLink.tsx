import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, ReactElement } from "react";
import type { LinkProps } from "next/link";

type Props = Omit<LinkProps, "children"> & {
  children: (isActive: boolean) => ReactElement;
};

export const ActiveLink: FC<Props> = ({ children, ...linkProps }) => {
  const { pathname } = useRouter();
  return <Link {...linkProps}>{children(pathname === linkProps.href)}</Link>;
};
