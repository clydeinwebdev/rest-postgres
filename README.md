# rest-postgres
restful api with postgres

### Steps

* Install Git
* Install NodeJS
* Install Heroku-CLI
* Install express-generator
* Setup Github
* Setup Heroku
* Setup Postgres


### Terminal Logs

```console
$ express --view=ejs ./
$ start .
$ npm install
$ SET DEBUG=rest-postgres:* & npm start
$ git status
$ git add .
$ git config user.email "email"
$ git config user.name "name"
$ git commit -m "first commit"
$ git push
$ git branch
$ git push
$ node --version
$ git status
$ git add .
$ git commit -m "setup heroku config"
$ git push
$ heroku login
$ heroku create rest-postgres
$ git push heroku master
$ heroku open
```

[Setup Postgres on Local Machine](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup)

postgres super user info
C:\Program Files\PostgreSQL\9.6
admin
admin
5432
Stack Builder: C:\Users\Admin01
cmd > psql -U postgres postgres
```cmd > psql -U <database-name> <owner-name>```

```console
$ heroku addons:create heroku-postgresql:hobby-dev
$ heroku pg:wait
$ heroku pg:info
$ heroku pg:psql

psql> create table users(id SERIAL, username VARCHAR(50), password(50));
psql> insert into users (username, password) values('admin',md5('admin'));
psql> insert into users (username, password) values('guest',md5('guest'));
psql> select * from users;
 id | username |             password
----+----------+----------------------------------
  1 | admin    | 21232f297a57a5a743894a0e4a801fc3
  2 | guest    | 084e0343a0486ff05530df6c705c8bb4
(2 rows)
psql> \d
psql> \t
psql> \q

```

### ref

[link 1](http://www.postgresqltutorial.com/install-postgresql/)
[link 2](http://www.postgresqltutorial.com/connect-to-postgresql-database/)
[link 3](https://stackoverflow.com/questions/3582552/postgres-connection-url)
[link 4](http://suite.opengeo.org/docs/latest/dataadmin/pgGettingStarted/pgadmin.html)
[link 5](http://blog.bigbinary.com/2016/01/23/configure-postgresql-to-allow-remote-connection.html)
[link 6](https://www.youtube.com/watch?v=e1MwsT5FJRQ)

postgres
