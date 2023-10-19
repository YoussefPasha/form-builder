# Dockerfile for Next.js 13 with PostgreSQL and Node.js 16.13

# Set the base image
FROM node:18.18.0-alpine AS dependencies

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install PostgreSQL client
RUN apk --no-cache add postgresql-client

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build

FROM node:18.18.0-alpine AS deploy

WORKDIR /app

ENV NODE_ENV production

# Install PostgreSQL client
RUN apk --no-cache add postgresql-client

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package.json ./package.json
COPY --from=dependencies /app/.next/standalone ./
COPY --from=dependencies /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
