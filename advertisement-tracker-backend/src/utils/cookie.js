const isProduction = process.env.APP_MODE === "production";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  domain: process.env.COOKIE_DOMAIN || undefined,
  path: "/",
  maxAge: 24 * 60 * 60 * 1000, // 1 day
};

const setAuthCookie = (res, token) => {
  res.cookie("token", token, COOKIE_OPTIONS);
};

const clearAuthCookie = (res) => {
  res.clearCookie("token", {
    ...COOKIE_OPTIONS,
    maxAge: undefined,
  });
};

module.exports = { setAuthCookie, clearAuthCookie };
