# react-graphql-github-vanilla

[![Build Status](https://travis-ci.org/the-road-to-graphql/react-graphql-github-vanilla.svg?branch=master)](https://travis-ci.org/the-road-to-graphql/react-graphql-github-vanilla) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-graphql/react-graphql-github-vanilla.svg)](https://greenkeeper.io/)

A simple React application consuming the GitHub GraphQL API with plain HTTP requests.

## Features

* React 16 with create-react-app
* GitHub GraphQL API
* Consuming GraphQL with plain JS
* no Apollo/Relay
  * [are you curious about Apollo though?](https://github.com/rwieruch/react-graphql-github-apollo)

## Installation

* `git clone git@github.com:the-road-to-graphql/react-graphql-github-vanilla.git`
* cd react-graphql-github-vanilla
* npm install
* [add your own REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN in .env file](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
  * scopes/permissions you need to check: admin:org, repo, user, notifications
* npm start
* visit `http://localhost:3000`