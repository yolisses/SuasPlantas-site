import { NextRequest, NextResponse } from "next/server";
import qs from "query-string";

export const middleware = async (req: NextRequest) => {
  return NextResponse.rewrite(
    req.nextUrl.pathname.replace(/\/$/, "") +
      `/query.${JSON.stringify(
        qs.parse(req.nextUrl.search, { arrayFormat: "bracket" })
      )}`
  );
};
