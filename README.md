# api_rest_tecno

API REST se enfoca exclusivamente en proporcionar datos, generalmente en formato 
JSON, sin incluir elementos de presentación. Esto plantea la pregunta: ¿qué ocurre con la 
capa visual en una arquitectura basada en REST? La respuesta es que se trata de un 
servicio independiente, separado de la lógica del servidor. Esta capa visual, a menudo 
implementada como una aplicación frontend, consume los datos de la API REST mediante 
solicitudes HTTP dirigidas a rutas específicas, definidas durante la creación o desarrollo del 
servidor. Este enfoque fomenta un mayor desacoplamiento entre las capas y permite una 
mayor flexibilidad en el desarrollo de aplicaciones modernas, además, permite ser 
consumido por más de un programa frontend que disponga estos datos mediante distintos 
diseños según la necesidad. 

Un ejemplo de esto último podría ser una API Rest que contenga la información con los 
productos publicados en una plataforma de marketplace y que cada usuario autenticado 
pueda consultar sus productos publicados para reutilizarlos en una tienda en línea 
personalizada, evitando así crear un servicio backend nuevo, que necesite además estar 
sincronizado y dejando únicamente la necesidad de contar un con programa frontend que 
obtenga y muestre esa información para generar un flujo de compra.

API Rest 
 
Una API REST (Representational State Transfer) es un estilo de arquitectura ampliamente 
utilizado en el desarrollo de aplicaciones web y servicios. Este enfoque permite a los 
sistemas interactuar entre sí de manera coherente y eficiente, asegurando que las 
solicitudes y respuestas sean entendidas independientemente de las plataformas 
involucradas. Más que un protocolo o estándar, REST establece principios arquitectónicos 
que guían el diseño de servicios web. 

iniciamos sobre la carpeta del proyecto en src
npm init -y
npm run dev
Instalamos la dependencia: 
npm install node
npm install nodemon --save-dev  
npm install express
npm install dotenv
npm install firebase
npm install dotenv
npm install jsonwebtoken

Derechos reservados 2025 -Maria Fernandez- Talento Teck.
