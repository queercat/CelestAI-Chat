FROM node
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx
COPY --from=0 /app/dist /app/static
COPY nginx.conf /etc/nginx/nginx.conf
