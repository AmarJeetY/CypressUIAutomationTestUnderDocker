FROM cypress/included:6.1.0

WORKDIR /usr/src/app

COPY . /usr/src/app/AutomationTests

WORKDIR /usr/src/app/AutomationTests

#RUN npm install

ENV CI=1

RUN npm ci

RUN npx cypress verify

EXPOSE 8091