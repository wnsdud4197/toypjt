from django.shortcuts import render

# Create your views here.
def index(request):
    context = {

    }
    return render(request, 'choice/index.html', context)


def startproject(request):
    context = {

    }
    return render(request, 'choice/startproject.html', context)