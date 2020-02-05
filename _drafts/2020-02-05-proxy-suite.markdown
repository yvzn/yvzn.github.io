```powershell
$proxy = ([System.Net.WebRequest]::GetSystemWebproxy()).GetProxy('https://www.google.fr')
Invoke-WebRequest http://www.google.fr -Proxy $proxy -ProxyUseDefaultCredentials
```
