docker-compose down
docker-compose -f docker-compose.dev.yml up -d
sudo docker run -it --rm --name certbot \
    -v "/etc/letsencrypt:/etc/letsencrypt" \
    -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
    -v `pwd`/html:/usr/share/nginx/html \
    certbot/certbot certonly --webroot -w /usr/share/nginx/html -d dev-api.sita.grappus.com
docker-compose -f docker-compose.dev.yml down
docker-compose up -d