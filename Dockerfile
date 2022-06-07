FROM nginx:alpine
COPY site /usr/share/nginx/html
COPY d.conf /etc/nginx/conf.d/default.conf
