ls ../projects | while read line ; do sed 's/\$\$\$\$\$/'$line'/g' template.conf > ../configs/$line.conf ; done
#sed 's/\$\$\$\$\$/'$1'/g' template.conf


