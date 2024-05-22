FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh 
RUN apt-get upgrade -y
RUN apt-get install -y nodejs



COPY package-lock.json package-lock.json
COPY package.json package.json
COPY app/(setup)/page.tsx  app/(setup)/page.tsx

RUN apt-get install -y npm

ENTRYPOINT [ "node", "page.tsx" ]
