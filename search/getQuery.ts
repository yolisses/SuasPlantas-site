import { ParsedUrlQuery } from "querystring";

export function getQuery(
  params: ParsedUrlQuery | undefined
): undefined | Record<string, unknown> {
  const paths = params?.paths;
  if (Array.isArray(paths)) {
    const q = paths.find((p) => p.startsWith("query."));
    return !q ? q : JSON.parse(q.replace(/^query\./, ""));
  }
  return undefined;
}
