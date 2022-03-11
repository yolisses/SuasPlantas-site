import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import { api } from '../api/api';

export function authenticate(ctx:GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  const { 'suasplantas.token': token } = parseCookies(ctx);
  console.log(token);
  if (token) { api.defaults.headers.common.Authorization = token; }
  return token || undefined;
}
