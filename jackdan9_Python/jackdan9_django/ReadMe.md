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
- If you installed Django using [pip][20] or **easy_install** previously, installing with [pip][21] or **easy_install** again will automatically take care of the old version, so you don't need to do it yourself.
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
	- Install [pip][22].  The easiest is to use the [standalone pip installer][23]. If your distribution already has **pip** installed, you might need to update it if it's outdated, you'll know because installation won't work.
	- Take a look at [virtualenv][24] and [virtualenvwrapper][25]. These tools provide isolated Python environments, which are more practical than installing packages systemwide. They also allow installing packages without administrator privileges. The [contributing tutorial][26] walks through how to create a virtualenv.
	- After you've created and activated a virtual environment enter the command **pip install Django** at the shell prompt.

	- Install a version of Django provided by your operating system distribution.
### Installing a distribution-specific package
- Check the [distribution specific notes][27] to see if your platform/distribution provides official Django packages/installers.
- Distribution-provided packages will typically allow for automatic installation of dependencies and easy upgrade paths; however, these packages will rarely contain the latest release of Django.

	- Install [the latest development version][28].
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
> django-admin startproject jackdan9_django
```
- This will create a **jackdan9_django** directory in your current directory. If it didn't work, see [Problems running django-admin][29].
- **Note**: You'll need to avoid naming projects after built-in Python or Django components. In particular, this means you should avoid using names like **django**(which will conflict with Django itself) or **test**(which conflicts with a built-in Python package).
- **Where should this code live ?**
- If your background is in plain old PHP(with no use of modern frameworks), you're probably used to putting code under the Web server's document root(in a place such as **/var/www**).
- With Django, you don't do that.
- It's not a good idea to put any of this Python code within your web server's document root, because it risks the possibility that people may be able to view your code over the Web.
- That's not good for security.
- Put your code in some directory **outside** of the document root, such as **/home/mycode**.
- Let's look at what **startproject** created:
```
jackdan9_django/
    manage.py
    jackdan9_django/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```
- There files are:
    - The outer **jackdan9_django/** root directory is just a container for your project.
    - Its name doesn't matter to Django; you can rename it to anything you like.
    - **manage.py**: A command-line utility that lets you interact with this Django project in various ways.
    - You can read all the details about **manage.py** in [django-admin and manage.py][30].
    - The inner **jackdan9_django/** directory is the actual Python package for your project. Its name is the Python package name you'll need to use to import anything inside it(e.g. **jackdan9_django.urls**).
    - **jackdan9_django/__init__.py**: An empty file that tells Python that this directory should be considered a Python package.
    - If you're a Python beginner, read [more about package][31] in the official Python docs.
    - **jackdan9_django/setting.py**: Setting/configuration for this Django project.
    - [Django setting][32] will tell you all about how settings work.
    - **jackdan9_django/urls.py**: The URL declarations for this Django project; a "table of contents" of your Django-powered site. You can read more about URLs in [URL dispatcher][33].
    - **jackdan9_django/wsgi.py**: An entry-point for WSGI-compatible web servers to serve your project. See [How to deploy with WSGI][34] for more details.

-----

## The development server
- Let's verify your Django project works. Change into the outer **jackdan9_django** directory, if you haven't already, and run the following commands:
- Linux:
```
$ python manage.py runserver
```
- Windows:
```
>python manage.py runserver
```
- You'll see the following output on the command line:
```
Performing system checks...

System check identified no issues (0 silenced).

You have unapplied migrations; your app may not work properly until they are applied.
Run 'python manage.py migrate' to apply them.

December 23, 2017 - 15:50:53
Django version 1.10.6, using settings 'jackdan9_django.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
- **Note**: Ignore the warning about unapplied database migrations for now; we'll deal with the database shortly.
- You've started the Django development server, a lightweight Web server written purely in Python. We've included this with Django so you can develop things rapidly, without having to deal with configuring a production server - such as Apache - until you're ready for production.
- Now's a good time to note: **don't** use this server in anything resembling a production environment. It's intended only for use while developing.(We're in the business of making Web frameworks, not Web servers.)
- Now that the server's running, visit http://127.0.0.1:8000/ or http://localhost:8000/ with your Web browser. You'll see a "Congratulations!" page, with a rocket taking off. It worked!
> Changing the port:
> By default, the [**runserver**][35] command  starts the development server on the internal IP at port 8000.
> If you want to change the server's port, pass it as a command-line argument. For instance, this command starts the server on port 8080:
```
$ python manage.py runserver 8080
```
> If you want to change the server's IP, pass it along with the port. For example, to listen on all available public IPs(which is useful if you are runing Vagrant or want to show off your work on other computers on the network), use:
```
$ python manage.py runserver 0:8000
```
> **0** is a shortcut for **0.0.0.0**. Full docs for the development server can be found in the **runserver** reference.

> Automatic reloading of runserver
> The development server automatically reloads Python code for each request as needed. You don't need to restart the server for code changes to take effect. However, some actions like adding files don't trigger a restart, so you'll have to restart the server in these cases.

------

## Creating the Polls app
- Now that your environment -a "project" - is set up, you're set to start doing work.
- Each application you write in Django consists of a Python package that follows a certain convention. Django comes with a utility that automatically generates the basic directory structure of an app, so you can focus on writing code rather than creating directories.

> **Projects vs .apps**
> What's the difference between a project and an app ? An app is a Web application that does something - e.g. a Weblog system, a database of public records or a simple poll app.
> A project is a collection of configuration and apps for a particular website. A project can contain multiple apps. An app can be in multiple projects.

- Your apps can live anywhere on your [Python path][36]. In this tutorial, we'll create our poll app right next to your **manage.py** file so that it can be imported as its own top-level module, rather than a sub module of **jackdan9_django**.
- To create your app, make sure you're the same directory as **manage.py** and type this command.
```
$ python manage.py startapp jackdan9_polls
```
- That'll create a directory **polls**, which is laid out like this:
```
jackdan9_polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```
- This directory structure will house the poll application.

------

## Write your first view
- Let's write the first view. Open the file **polls/views.py** and put the following Python code in it.
> polls/views.py
```
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the jackdan9_polls index.")
```
- This is the simplest view possible in Django. To call the view, we need to map it to a URL - and for this we need a URLconf.
- To create a URLconf in the polls directory, create a file called **urls.py**. Your app directory should now look like:
```
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    urls.py
    views.py
```
- In the **polls/urls.py** file include the following code:
> polls/urls.py
```
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```
- The next step is to point the root URLconf at the **polls.urls** module. In **jackdan9_django/urls.py**, add an import for **django.urls.include** and insert an [**include()**][37] in the **urlpatterns** list, so you have:
> mysite/urls.py
```
from django.urls import include, path
from django.contrib import admin

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```
- The [include][37] function allows referencing other URLconfs. Whenever Django encounters [include][37], it chops off whatever part of the URL matched up to that point and sends the remaining string to the included URLconf for further processing.
- The idea behind [include][37] is to make it easy to plug-and-play URLs. Since polls are in their own URLconf(**jackdan9_polls/urls.py**), they can be placed under "jackdan9_polls/", or under "/fun_polls/", or under "/content/polls/", or any other path root, and the app will still work.

> When to use [include()][37]
> You should always use [include()][37] when you include other URL patterns. **admin.site.urls** is the only exception to this.

- You have now wired an **index** view into the URLconf. Lets verify it's working, run the following command.
```
$ python manage.py runserver
```
- Go to http://localhost:8000/jackdan9_polls/ in your browser, and you should see the text "Hello, world. You're at the jackdan9_polls index.", which you defined in the **index** view.
- The [path()][38] function is passed four arguments, two required: **route** and **view**, and two optional: **kwargs**, and **name**. At this point, it's worth reviewing what these arguments are for.

- **[path()][38] argument: route**
- **route** is a string that contains a URL pattern. When processing a request, Django starts at the first pattern in **urlpatterns** and makes its way down the list, comparing the requested URL against each pattern until it finds one that matches.

- Pattern don't search GET and POST parameters, or the domain name. For example, in a request to **https://www.example.com/myapp**, the URLconf will look for **myapp/**. In a request to **https://www.example.com/myapp/?page=3**, the URLconf will also look for **myapp/**.

- **[path()][38] argument: view**
- When Django finds a matching pattern, it calls the specified view function with an **[HttpRequest][39]** object as the first argument and any "captured" values from the route as keyword arguments. We'll give an example of this in a bit.

- **[path()][38] argument: kwargs**
- Arbitrary keyword arguments can be passed in a directory to the target view. We aren't going to use this feature of Django in the tutorial.

- **[path()][38] argument: name**
- Naming your URL lets you refer to it unamebiguously from elewhere in Django, especially from within templates. This powerful feature allows you to make global changes to the URL patterns of your project while only touching a single file.
- When you're comfortable with the basic request and response flow. read part 2 of this tutorial to start working with the database.

------

## Database setup
- Now, open up **jackdan9_django/settings.py**. It's a normal Python module-level variables representing Django settings.
- By default, the configuration uses SQLite. If you're new to databases, or you're just interest in trying Django, this is the easiest choice. SQLite is included in Python, so you won't need to install anything else to support your database. When starting your first real project, however, you may want to use a more scalable database like PostgreSQL, to avoid database-switching headaches down to road.
- If you wish to use another database, install the appropriate `database bindings` and change the following keys in the **DATABASES 'default'** item to match your database connection settings:
- **DATABASES**:
    - Default: `{}` (Empty dictionary)
    - A dictionary containing the settings for all databases to be used with Django. It is a nested dictionary whose contents map a database alias to a dictionary containing the options for an individual database.
    - The **DATABASES** setting must configure a **default** database; any number of additional database may also be specified.
    - The simple possible settings file is for a single-database setup using SQLite. This can be configured using the following:
    - `DATABASES = { 'default' : { 'ENGINE': 'django.db.backends.sqlite3', 'NAME': 'mydatabase' } }`
    - When connecting to other database backends, such as MySQL, Oracle, or PostgreSQL, additional connection parameters will be required. See the

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
  [21]: https://pip.pypa.io/en/stable/
  [22]: https://pip.pypa.io/en/stable/
  [23]: https://pip.pypa.io/en/latest/installing/#installing-with-get-pip-py
  [24]: https://virtualenv.pypa.io/en/stable/
  [25]: https://virtualenvwrapper.readthedocs.io/en/latest/
  [26]: https://docs.djangoproject.com/en/2.0/intro/contributing/
  [27]: https://docs.djangoproject.com/en/2.0/misc/distributions/
  [28]: https://docs.djangoproject.com/en/2.0/topics/install/#installing-development-version/
  [29]: https://docs.djangoproject.com/en/2.0/faq/troubleshooting/#troubleshooting-django-admin
  [30]: https://docs.djangoproject.com/en/2.0/ref/django-admin/
  [31]: https://docs.python.org/3/tutorial/modules.html#tut-packages
  [32]: https://docs.djangoproject.com/en/2.0/topics/settings/
  [33]: https://docs.djangoproject.com/en/2.0/topics/http/urls/
  [34]: https://docs.djangoproject.com/en/2.0/topics/settings/
  [35]: https://docs.djangoproject.com/en/2.0/ref/django-admin/#django-admin-runserver
  [36]: https://docs.python.org/3/tutorial/modules.html#tut-searchpath
  [37]: https://docs.djangoproject.com/en/2.0/ref/urls/#django.urls.include
  [38]: https://docs.djangoproject.com/en/2.0/ref/urls/#django.urls.path
  [39]: https://docs.djangoproject.com/en/2.0/ref/request-response/#django.http.HttpRequest