---
title: jackdan9_django
tags: django, python, jackdan
author: jackdan

---
# jcakdan9_django
## Why Django?
- With Django, you can take Web applications from concept to launch in a matter of hours.
- Django takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel.
- Django is free open source.

### Ridiculously fast
- Django was designed to help developers take applications from concept to completion as quickly as possible.

### Fully loaded
- Django includes dozens of extras you can use to handle common Web development tasks.
- Django takes care of user authentication, content administration, site maps, RSS feeds, and many more tasks - right out of the box.

### Reassuringly secure
- Django takes security seriously and helps developers avoid many common security mistakes, such as SQL injection, cross-site scripting, cross-site request forgery and clickjacking.
- Its user authentication system provides a secure way to manage user accounts and passwords.

### Exceedingly scalable
- Some of the busiest sites on the planet use Django's ability to quickly and flexibly scale to meet the heaviest traffic demands.

### Incredibly versatile
- Companies, organizations and governments have used Django to build all sorts of things - from content management systems to social networks to scientific computing platforms.

------

## Install Django
- Before you can use Django, you'll need to install it.
- Our complete installation guide covers all the possibilities; this guide will get you to a simple, minimal installation that'll work while you walk through the introduction.
### Install Python
- Being a Python Web framework, Django requires Python.
- What Python version can I use with Django ?

|   Django version     |  Python versions    |  
|-------- | --------------------------- |
|   1.8  |  2.7, 3.2(unitl the end of 2016), 3.3, 3.4, 3.5   |  
|   1.9.1.10  |  2.7, 3.4, 3.5   |   
|    1.11 |  2.7, 3.4, 3.5, 3.6   |   
|	2.0  |  3.4, 3.5, 3.6   |
|	2.1 | 3.5, 3.6, 3.7	  |

- For each version of Python, only the latest micro release(A.B.C) is officially supported.
- You can find the latest micro version for each series on the [Python download page][1].

- Typically we will support a Python version up to and including the first Django LTS release whose security support ends after security support for that version of Python ends.
- For example, Python 3.3 security support ends September 2017 and Django 1.8 LTS security support ends April 2018.
- Therefore Django 1.8 is the last version to support Python 3.3.

- You can verify that Python is installed by typing **python** from your shell; you should see something like:
```
C:\Users\JackDan9>python
Python 3.4.4 (v3.4.4:737efcadf5a6, Dec 20 2015, 20:20:57) [MSC v.1600 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

------

## Set up a database
- This step is only necessary if you'd like to work with a "large" database engine like PostgreSQL, MySQL, or Oracle.
### Get your database running
- If you plan to use Django's database API functionality, you'll need to make sure a database server is running.
- Django supports many different database servers and is officially supported with [PostgreSQL][2], [MySQL][3], [Oracle][4] and [SQLite][5].

- If you are developing a simple project or something you don't plan to deploy in a production environment, SQLite is generally the simplest option as it doesn't require running a separate sever.
- However, SQLite has many differences from other database, so if you are working on something substantial, it's recommended to develop with the same database as you plan on using in production.

- In addition to the officially supported databases, there are **backends provided by 3rd parties** that allow you to use other databases with Django.
    - [SAP SQL Anywhere][6]
    - [IBM DB2][7]
    - [Microsoft SQL Server][8]
    - [Firebird][9]
    - [ODBC][10]
- The Django version and ORM features supported by these unofficial backends vary considerably.
- Queries regarding the specific capabilities of these unofficial backends, along with any support queries, should be directed to the support channels provided by each 3rd party project.

- In addition to a database backend, you'll need to make sure your Python database bindings are installed.
    - If you're using PostgreSQL, you'll need the [psycopg2][11] package. Refer to the [PostgreSQL notes][12] for further details.
    - If you're using MySQL, you'll need a [DB API driver][13] like **mysqlclient**. See [notes for the MySQL backend][14] for details.
    - If you're using SQLite you might want to read the [SQLite backend notes][15].
    - If you're using Oracle, you'll need a copy of [cx_Oracle][16], but please read the [notes for the Oracle backends][17] for details regarding support versions of both Oracle and **cx_Oracle**.
    - If you're using an unofficial 3rd party backend. please consult the documentation provided for any additional requirements.
- If you plan to use Django's **manage.py migrate** command to automatically create database tables for your models(after first installing Django and creating a project), you'll need to ensure that Django has permission to create and alter tables in the database you're using;
- If you plan to manually create the tables, you can simply grant Django **SELECT**, **UPDATE**, **INSERT** and **DELETE** permission.
- After creating a database user with these permission, you'll specify the details in your project's setting file, see [**DATABASE**][18] for details.

- If you're using Django's [testing framework][19] to test database queries. Django will need permission to create a test database.

------

## Remove any old version of Django
- If you are upgrading your installation of Django from a previous version, you will need to uninstall the old Django version before installing the new version.
- If you installed Django using [pip][20] or **easy_install** previously, installing with [pip][20] or **easy_install** again will automatically take care of the old version, so you don't need to do it yourself.
- If you previously installed Django using **Python setup.py install**, uninstalling is as simple as deleting the **django** directory from you Python **site-packages**.
- To find the directory you need to remove, you can run the following at your shell prompt(not the interactive Python prompt):
- Win(DOS):
```
C:\Users\JackDan9>Python -c "import django; print(django.__path__)"
['C:\\software\\python IDE\\Python34\\lib\\site-packages\\django']
```
- Linux:
```
$ Python -c "import django; print(django.__path__)"
['/usr/local/lib/python3.4/dist-packages/django']
```

------

## Install Django
- You've got three easy options to install Django:
	- Install an official release. This is the best approach for most users.
### Installing an official release with pip
- This is the recommended way to install Django:
	- Install [pip][20].  The easiest is to use the [standalone pip installer][21]. If your distribution already has **pip** installed, you might need to update it if it's outdated, you'll know because installation won't work.
	- Take a look at [virtualenv][22] and [virtualenvwrapper][23]. These tools provide isolated Python environments, which are more practical than installing packages systemwide. They also allow installing packages without administrator privileges. The [contributing tutorial][24] walks through how to create a virtualenv.
	- After you've created and activated a virtual environment enter the command **pip install Django** at the shell prompt.

	- Install a version of Django provided by your operating system distribution.
### Installing a distribution-specific package
- Check the [distribution specific notes][25] to see if your platform/distribution provides official Django packages/installers.
- Distribution-provided packages will typically allow for automatic installation of dependencies and easy upgrade paths; however, these packages will rarely contain the latest release of Django.

	- Install [the latest development version][26].
	- This option is for enthusiasts who want the latest-and-greatest features and aren't afraid of running brand new code.
	- You might encounter new bugs in the development version, but reporting them helps the development of Django.
	- Also, release of third-party packages are less likely to be compatible with the development version than with the latest stable release. 

------

## Verify
- To verify that Django can be seen by Python, type **Python** from your shell. Then at the Python prompt, try to import Django:
```
>>> import django
>>> print(django.get_version())
1.10.6
```
- Of course! You may have anther version of Django installed.

------

## Create a project
- If this is your first time using Django, you'll have to take care of some initial setup.
- Namely, you'll need to auto-generate some code that establishes a Django **project** - a collection of settings for an instance of Django, including database configuration, Django-specific options and application-specific settings.
- **project**:
    - A Python package - i.e. a directory of code - that contains all the settings for an instance of Django. This would include database configuration, Django - specific options and application-specific settings.
- From the command line, **cd** into a directory where you'd like to store your code, then run the following command.
```
> django-admin startproject mysite
```
- This will create a **mysite** directory in your current directory. If it didn't work, see [Problems running django-admin][27].


  [1]: https://www.python.org/downloads/
  [2]: https://www.postgresql.org/
  [3]: https://www.mysql.com/
  [4]: https://www.oracle.com/index.html
  [5]: https://www.sqlite.org/
  [6]: https://www.github.com/sqlanywhere/sqlany-django/
  [7]: https://www.pypi.python.org/pypi/ibm_db/
  [8]: https://www.django-mssql.readthedocs.io/en/latest/
  [9]: https://www.github.com/maxirobaina/django-firebird/
  [10]: https://www.github.com/lionheart/django-pyodbc/
  [11]: http://initd.org/psycopg/
  [12]: https://docs.djangoproject.com/en/2.0/ref/databases/#postgresql-notes
  [13]: https://docs.djangoproject.com/en/2.0/ref/databases/#mysql-db-api-drivers
  [14]: https://docs.djangoproject.com/en/2.0/ref/databases/#mysql-notes
  [15]: https://docs.djangoproject.com/en/2.0/ref/databases/#sqlite-notes
  [16]: https://oracle.github.io/python-cx_Oracle/
  [17]: https://docs.djangoproject.com/en/2.0/ref/databases/#oracle-notes
  [18]: https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-DATABASES
  [19]: https://docs.djangoproject.com/en/2.0/topics/testing/
  [20]: https://pip.pypa.io/en/stable/
  [21]: https://pip.pypa.io/en/latest/installing/#installing-with-get-pip-py
  [22]: https://virtualenv.pypa.io/en/stable/
  [23]: https://virtualenvwrapper.readthedocs.io/en/latest/
  [24]: https://docs.djangoproject.com/en/2.0/intro/contributing/
  [25]: https://docs.djangoproject.com/en/2.0/misc/distributions/
  [26]: https://docs.djangoproject.com/en/2.0/topics/install/#installing-development-version/
  [27]: https://docs.djangoproject.com/en/2.0/faq/troubleshooting/#troubleshooting-django-admin

