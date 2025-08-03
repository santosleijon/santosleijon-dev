# Stage 1: Dependencies
FROM node:21-alpine AS deps
WORKDIR /app

# Install necessary system dependencies
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Stage 2: Builder
FROM node:21-alpine AS builder
WORKDIR /app

# Create and use non-root user for build stage
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set the correct permissions for the app directory
COPY --chown=nextjs:nodejs . .
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Switch to non-root user
USER nextjs

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Stage 3: Runner
FROM node:21-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set user to non-root
USER nextjs

# Expose port
EXPOSE 3000
ENV PORT 3000

# Start the application
CMD ["node", "server.js"]