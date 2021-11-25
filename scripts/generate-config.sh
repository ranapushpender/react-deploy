ls /projects | while read line ; do sed 's/\$\$\$\$\$/'$line'/g' /scripts/template.conf > /etc/nginx/conf.d/$line.conf ; done
nginx -s reload


