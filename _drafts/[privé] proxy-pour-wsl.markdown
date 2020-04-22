# Pour WSL / Debian

```bash
vi ~/.bashrc
```

Puis ajouter

```bash
	http_proxy=http://<<user>>:<<mot_de_passe>>@proxy.acme.local:8080
	https_proxy=$http_proxy
	HTTP_PROXY=$http_proxy
	HTTPS_PROXY=$http_proxy
	export http_proxy
	export https_proxy
	export HTTP_PROXY
	no_proxy=localhost,127.0.0.1
	export no_proxy
```

## Pour apt-get

```bash
sudo vi /etc/apt/apt.conf
```
Puis ajouter 

```
Acquire::http::Proxy "http://<<user>>:<<mot_de_passe>>@proxy.acme.local:8080"
```
