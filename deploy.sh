npm install
npm run build
rm -rf /var/www/genomevis-jbrowse-wrapper/*
cp -r dist/. /var/www/genomevis-jbrowse-wrapper
systemctl reload nginx
echo "deploy complete"
