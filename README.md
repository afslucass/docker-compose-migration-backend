# vizinhos

continuar configurado o ambiente conforme: https://chat.deepseek.com/a/chat/s/0f9e5963-cf1d-402d-a045-984330607ff1

tem q execultar em ambiente linux com docker, o yarn dersao 4 esta quebrando no windows

# Comandos Docker

- docker ps: lista os containers em execucao
- docker build --tag vizinhos .
- docker run --detach -p 3000:3000 vizinhos
- docker stop <name>
- docker exec -it <name> sh

# Comandos Docker Compose

- docker-compose up --build -d
- docker-compose down
