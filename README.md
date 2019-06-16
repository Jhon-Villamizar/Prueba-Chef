# Prueba-Chef
Consumo de Api Héroes con Angular 8.

## Contenido

En este repositorio se encuentran 2 carpetas principales
* Service-Heroes: Contiene el servidor en NodeJs que se conecta a base de datos mongo, y permite hacer un CRUD. Este servidor debe estar corriendo ya que a el se hacen las peticiones necesarias para la vista.
Para ejecutarlo es necesario tener instalado [NODEJS](https://nodejs.org/es/) en la maquina donde se necesite a ejecutar este servidor.
Luego de esto en una consola y posicionados en el directorio se deben correr los siguientes comando en el orden indicado:

```bash
npm install
npm run dev
```
* Api-Heroes: Contiene la vista donde se consume desde Angular 8 el servicio de NodeJs que se acaba de correr, Para ejecutarlo es necesario tener instalado [NODEJS](https://nodejs.org/es/) en la maquina donde se necesite a ejecutar esta vista. Luego de esto en una consola y posicionados en el directorio se deben correr los siguientes comando en el orden indicado:

```bash
npm install
ng serve
```
## Tecnologías
* Este proyecto contiene un Backend con NodeJs con JavaScript.
* Base de Datos Mongo desplegada en Internet.
* Frontend con Framework Angular 8  con estilos en sass.