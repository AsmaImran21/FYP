from django.http import HttpResponse
from django.shortcuts import render
def homePage(request):
    return render(request,"homepage.html")

def aboutUs(request):
    return render(request,"aboutus.html")

def homePageUnreg(request):
    return render(request,"homepageunregistered.html") 

def event(request):
    return render(request,"event.html")





#appCategory
def appcategories(request):
    return render(request,"app-categories.html")





#webCategory
def webcategory(request):
    return render(request,"web-category.html")





#rndcategory
def rndcategories(request):
    return render(request,"rnd-categories.html")





#hardwarecategory
def hardwarecategories(request):
    return render(request,"hardware-categories.html")

def projects(request):
    return render(request,"projects.html")

def projectview(request):
    return render(request,"projectview.html")

def login(request):
    return render(request,"login.html")

def homestudent(request):
    return render(request,"homeStudent.html")

def userprofile(request):
    return render(request,"userprofile.html")

def uploadproject(request):
    return render(request,"project-upload-form.html")

def uploadproject2(request):
    return render(request,"upload-form-continue.html")

def projectviewregistered(request):
    return render(request,"projectviewregistered.html")

def aboutusreg(request):
    return render(request,"aboutusreg.html")

def reportproblemform(request):
    return render(request,"report-problem-form.html")

def homepmo(request):
    print(request.user.id)
    return render(request,"homepmo.html")

#change password forms
def changepassword1(request):
    return render(request,"changepassword1.html")

def changepassword2(request):
    return render(request,"changepassword2.html")

def changepassword3(request):
    return render(request,"changepassword3.html")

def homeadmin(request):
    return render(request,"homeadmin.html")

def requestedprojectslist(request):
    return render(request,"requested-projects-list.html")

def problemslist(request):
    return render(request,"problems-list.html")

def problemview(request):
    return render(request,"problem-view.html")

def pmoprojectview(request):
    return render(request,"pmoprojectview.html")

def adminprojectview(request):
    return render(request,"adminprojectview.html")
    
def hiddenprojectlist(request):
    return render(request,"hiddenprojectslist.html")

def aboutusadmin(request):
    return render(request,"aboutusadmin.html")

def reportsubmit(request):
    return render(request,"reportsubmit.html")


def rndunregis(request):
    return render(request,"rndunregis.html")

def hardwarecategoriesunreg(request):
    return render(request,"hardwarecategoriesunreg.html")

def appcategoriesunreg(request):
    return render(request,"app-categoriesunreg.html")

def userprofileunreg(request):
    return render(request,"userprofileotherunreg.html")

def userprofilepmo(request):
    return render(request,"userprofileotherspmo.html")
def userhisprofilepmo(request):
    return render(request,"userprofilepmo.html")
def userprofilestudent(request):
    return render(request,"userprofileotherstudent.html")

def userprofileadmin(request):
    return render(request,"userprofileothersadmin.html")

def eventreg(request):
    return render(request,"eventreg.html")

def projectsreg(request):
    return render(request,"projectsreg.html")




#webcategory
def webcategoryunreg(request):
    return render(request,"web-categoryunreg.html")
def webcategorypmo(request):
    return render(request,"web-categorypmo.html")

def webcategoryadmin(request):
    return render(request,"web-categoryadmin.html")


    #logout
def logoutstudent(request):
    return render(request,"logoutStudent.html")
def logoutpmo(request):
    return render(request,"logoutPmo.html")
def logoutadmin(request):
    return render(request,"logoutAdmin.html")



def adminpmosignupform(request):
    return render(request,"adminpmosignup.html")

def studentsignupform(request):
    return render(request,"studentsignup.html")

#adduser
def adduser(request):
    return render(request,"adduser.html")
def adduserStd(request):
    return render(request,"adduser(fyp-std).html")
def adduserpmo(request):
    return render(request,"adduser(pmo).html")

#adminuserlist
def adminuserlist(request):
    return render(request,"admin-userlist.html")

def OTHERSPROJECTPMO(request):
    return render(request,"1.html")

def adminprojectview(request):
    return render(request,"adminprojectview.html")

def appcategoriespmo(request):
    return render(request, "app-categoriespmo.html")
def randdcategoriespmo(request):
    return render(request, "rnd-categoriespmo.html")
def hardwarecategoriespmo(request):
    return render(request, "rnd-categoriespmo.html")
def eventPmo(request):
    return render(request, "eventpmo.html")
def aboutUsPmo(request):
    return render(request, "aboutuspmo.html")
def userprofilepmo(request):
    return render(request,"userprofileotherspmo.html")
def projectsregPmo(request):
    return render(request,"projectsregPmo.html")

#menubar
def menubar(request):
    return render(request,"menubar.html")
