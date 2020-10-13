FROM cypress/included:5.3.0

# 日本語フォントを追加
RUN apt-get install --no-install-recommends -y fonts-noto fonts-noto-cjk

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./cypress.env.json ./cypress.env.json

RUN npx cypress run