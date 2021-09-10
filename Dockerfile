FROM node:latest as build

WORKDIR /usr/sorting-visualiser

COPY ./sorting-visualiser /usr/sorting-visualiser

RUN npm install

RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/sorting-visualiser/dist/sorting-visualiser /usr/share/nginx/html

# Expose default port that is given by Heroku
WORKDIR /
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'