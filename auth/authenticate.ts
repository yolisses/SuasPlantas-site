import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import { api } from '../api/api';

export function authenticate(ctx:GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  const { authToken } = parseCookies(ctx);
  if (authToken) { api.defaults.headers.common.Authorization = authToken; }
  return authToken || undefined;
}
