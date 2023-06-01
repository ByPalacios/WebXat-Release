#FROM node:staging
FROM node:18.16.0-alpine3.17

USER root

RUN apk add \
    netcat-openbsd \
    curl

WORKDIR /usr/src/app

#RUN mkdir ~/ruinett && chmod 777 ~/ruinett

#WORKDIR ~/ruinett

#COPY ./App ./
#COPY ./entrypoint.sh /usr/src/app
#COPY ./status-deamon.sh /usr/src/app
#RUN chmod 777 -R ./
#RUN chmod 777 ./entrypoint.sh
#RUN chmod 777 ./status-deamon.sh

CMD ["./entrypoint.sh"]
