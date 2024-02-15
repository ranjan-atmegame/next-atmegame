import { cookies, headers } from "next/headers";
import { _getGuestUser } from "@/api/auth";
import { JWT } from "@/utils/Constants";

export const getDevice = () => {
  const headersList = headers();
  return headersList.get("user-agent").includes("Mobile");
};

export const getAuth = () => {
  const jwtString = cookies().get(JWT)?.value;
  if (!jwtString) {
    return _getGuestUser();
  }

  return JSON.parse(jwtString);
};

// SEO
export const getRobot = (indexPages) => {
  const headerList = headers();
  const host = `https://${headerList.headers.host}`;
  if (!headerList.headers.host.includes("www")) {
    return {
      robots: { index: false, follow: false },
      host,
    };
  }

  if (indexPages) {
    return {
      robots: { index: true, follow: true },
      host,
    };
  }

  return {
    robots: { index: false, follow: true },
    host,
  };
};
