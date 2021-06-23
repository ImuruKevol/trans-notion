yarn build
sudo rm -rf /usr/share/nginx/html/*
sudo mv out/* /usr/share/nginx/html/
sudo chcon -Rt httpd_sys_content_t /usr/share/nginx/html
la -Z /usr/share/nginx/html
