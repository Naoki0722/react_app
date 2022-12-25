# React-App

RailsのフロントにReactを導入したプロジェクトです。

バックエンドがRails、フロントエンドがReactのようなSPA構成にはしていませんので、悪しからず。

そのため、URLは全て `http://localhost:3000`でアクセスできます。

Rails + React勉強用のリポジトリです。ごちゃごちゃしていますが、気になる方はどうぞ。

## Starting Development

```cil
$ docker-compose build --no-cache
$ docker-compose run --rm web yarn install
$ docker-compose run --rm web bundle install
$ docker-compose run --rm web rails db:create
$ docker-compose run --rm web rails db:migrate
$ docker-compose up
```

## GraphQL

playgroundは`http://localhost:3000/graphiql`で確認

* Stack Version

Ruby:3.1.1
Rails:7.0.4
Node:v14.21.1
MySQL

* Libraries

reference Gemfile & package.json