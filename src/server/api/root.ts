import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { publicProcedure } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  notify: publicProcedure.mutation(async (opts) => {
    console.log("notify", opts.input);
  })
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
