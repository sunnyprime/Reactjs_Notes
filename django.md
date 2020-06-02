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


