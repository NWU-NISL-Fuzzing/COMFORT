Dim password,IE,dom,form,Shell
password = ".*9mYUc?2isT_&Zcy"
Set IE = CreateObject("InternetExplorer.Application")
ie.FullScreen=0
IE.Visible = True
IE.Navigate "http://47.241.14.25:8830/notebooks/main.ipynb"
Do while IE.ReadyState<> 4 or IE.busy
wscript.sleep 1000
loop
islogin = "false"
hasClass("password_input")
if islogin = "true" Then
	IE.document.getElementById("password_input").value=password
	IE.document.getElementById("login_submit").click
	wscript.sleep 1000
	IE.Navigate "http://47.241.14.25:8830/notebooks/main.ipynb"
end If


Function hasClass(elementId)
	Set elements=ie.Document.all
	for i=0 to elements.length-1
		if elements(i).id=elementId then 
			islogin = "true"
			exit for
		End If
	Next
End Function