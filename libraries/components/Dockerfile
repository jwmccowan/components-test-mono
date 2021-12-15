# Always create a base
FROM node:16.13.0-alpine as base
WORKDIR /app

### Installer ###
FROM base as installer

# COPY root package.json and yarn.lock
COPY ./package.json \
    ./yarn.lock \
    ./

# COPY any dependent packages into the image (there are none here)

# COPY components package into the image
COPY libraries/components libraries/components

# RUN install yarn from root
RUN yarn install --pure-lockfile --non-interactive

# build any dependant packages (there are none)

# build the components package (we don't actually need to build it, but we do build storybook)
WORKDIR /app/libraries/components
RUN yarn build-storybook -o ./storybook-build

# normally we'd have another stage for prod, where we just add the package.json again and install --production
# because storybook is in devDependencies, we'll just copy the node_modules over
# this is a bit inefficient, but retains the structure if we ever need the Dockerfile to be more robust
FROM base

ENV NODE_ENV=production
WORKDIR /app

RUN npm i -g http-server

# COPY the whole thing over :(
COPY --from=installer /app ./

WORKDIR /app/libraries/components/storybook-build

EXPOSE 80

CMD ["http-server", "-p", "80"]