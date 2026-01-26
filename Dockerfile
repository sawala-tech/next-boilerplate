FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack prepare pnpm@10.x --activate
RUN corepack enable

ARG APP_URL
ARG BASE_URL
ARG API_URL
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET

ENV APP_URL=${APP_URL}
ENV BASE_URL=${BASE_URL}
ENV API_URL=${API_URL}
ENV NEXTAUTH_URL=${NEXTAUTH_URL}
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}

COPY . /app
WORKDIR /app

FROM base AS build
ENV BUILD_STANDALONE true
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV HOSTNAME="0.0.0.0"

CMD [ "node", "server.js" ]
