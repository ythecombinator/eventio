FROM mhart/alpine-node:10 as base
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn install
COPY . .
RUN rm -rf ~/.npm && npm prune --production

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PORT=3000
COPY --from=base /usr/src .
EXPOSE 9001
CMD ["node", "server.js"]
