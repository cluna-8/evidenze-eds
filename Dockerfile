FROM node:18-alpine

WORKDIR /app

# The node_modules boundary and file mounting will be handled by compose
# We install dependencies first, then the host code will be mounted.
COPY package.json package-lock.json* ./
RUN npm install

# Copy everything else (will be overridden by compose volume usually, but good for standalone build)
COPY . .

EXPOSE 5173

# Start Vite with host flag so it's accessible outside container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
