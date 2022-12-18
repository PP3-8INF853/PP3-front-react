FROM node:13.12.0-alpine as build
WORKDIR .
ENV PATH node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
