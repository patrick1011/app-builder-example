# Introduction

Yuzu is an (even) faster way to build internal tools.

# The Motivation

Retool has dramatically reduced the time neccessary for developers to build internal applications.  However in an effort to appeal to semi-technical users (rather than exclusively to engineers) the experience of using Retool is not truly developer-first.  Yuzu serves developers better by...

- Allowing them to work in an IDE of their choosing (where they are maximally productive).
- Replacing a visual UI builder with code (JSX/React).
- Engineering quality deployment processes (with Git for version control).
- Open Source core.

# This Repo

This repo demonstrates what a Yuzu app might look like.  The app would reproduce the functionality of the Retool demo app (see the 4 min demo video at the top of https://retool.com/).

# What is Yuzu (the product)?

Yuzu is an open source React framework for creating CRUD applications with a simple UI layer.  This includes...

- React components for displaying + interacting with data (Tables, Text Inputs, Charts etc). 
- A state-management system (essentially a port of Redux) which automatically ties the state of every UI component (text input values, selected table rows etc) above to part of the state-tree.
- An API for querying data from data sources (DBs, SaaS applications).  Queries are called inline in frontend code but executed by the same server process that serves the page.
- End-user authentication, security, etc 

# What is Yuzu (the company)?

The company maintains the open source project and develops a web platform for hosting Yuzu applications similar to Vercel/Next.JS.