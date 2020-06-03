# Django
## [Django Doc](https://docs.djangoproject.com/en/3.0/)
## [graphen python](https://graphene-python.org/)


## Create New Project
```
django-admin startproject movie .
```

## Create New App
```
django-admin startapp api
```

## Run Server
```
python manage.py runserver
```

## Migrate
```
python manage.py migrate
python manage.py makemigration
```

## Super user
```
python manage.py createsuperuser
```

# Graphql

## 1 Simaple query
```
query {
  allMovies{
    title,
    year
  }
}
```
##### schema
```
import graphene
from graphene_django.types import DjangoObjectType
from .models import Movie

class MovieType(DjangoObjectType):
    class Meta:
        model = Movie

class Query(graphene.ObjectType):
    all_movies = graphene.List(MovieType)
    movie = graphene.Field(MovieType,id=graphene.Int())

    def resolve_all_movies(self, info,**kwargs):
        return Movie.objects.all()
```
## 2 Single Movie
```

query {
  movie(id:1){
    title,
    year
  }
}
```
```
class Query(graphene.ObjectType):
    all_movies = graphene.List(MovieType)
    movie = graphene.Field(MovieType,id=graphene.Int())

    def resolve_all_movies(self, info,**kwargs):
        return Movie.objects.all()
    
    def resolve_movie(self, info,**kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Movie.objects.get(pk=id)
        return None
```

## Graphql Query basic
```
# 1
query {
  allMovies{
    id,
    title,
    year,    
  }
}

# 2
query {
  movie(id:2){
    title,
    year
  }
}

# 3
query {
  movie(title:"Avenger"){
    title,
    year
  }
}

# 4
query {
  allMovies {
    id
    title
    year
    movieAge
  }
}

# 5
query {
  allMovies {
    id
    title
    year
    movieAge
    director {
      name
      surname
    }
  }
}

# 6
query {
  allDirectors{
    name
    surname
  }
}

# 7
query {
  firstMovie: movie(id:1) {
    id
    title
    year
    movieAge
    director {
      name
      surname
    }
  }
   secondMovie: movie(id:2) {
    id
    title
    year
    movieAge
    director {
      name
      surname
    }
  }
}

# 8
query {
  firstMovie: movie(id:1) {
   ...movieData
  }
   secondMovie: movie(id:2) {
   ...movieData
  }
}

fragment movieData on MovieType {
  id
  title
}

# 9 Names
query MoviesAndDirectors {
  allMovies {
    title
    year
    director {
      surname
    }
  }
}

query JustMovies {
  allMovies{
    title
    year
  }
}

```
```
# 10 Variable
query MovieAndDirector($id: Int) {
  movie(id: $id){
    id
    title
    director{
      surname
    }
  }
}
------------
{
  "id": 2
}
```
```
# 11 directive
query MovieAndDirector($id: Int,$showdirector: Boolean = false) {
  movie(id: $id){
    id
    title
    year
    director @skip(if: $showdirector){
      surname
    }
  }
}
-----
Query variable:
{
  "id": 2
}
```

```
# 11 directive
query MovieAndDirector($id: Int,$showdirector: Boolean = true) {
  movie(id: $id){
    id
    title
    year
    director @include(if: $showdirector){
      surname
    }
  }
}
---------
{
  "id": 2,
  "showdirector": true
}
```

