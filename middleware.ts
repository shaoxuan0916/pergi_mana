import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    // TODO: add business details page here to let user can visit without login
    // "/business-profile/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
