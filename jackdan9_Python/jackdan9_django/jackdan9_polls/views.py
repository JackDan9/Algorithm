# _*_ charset: utf-8 _*_
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello World. You are at the jackdan9_polls index.");
