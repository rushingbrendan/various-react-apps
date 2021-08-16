sudo apt install apache2 php php-sqlite3 sqlite3

sqlite3 code/lab1.db < setup_db.sql

sudo mkdir /var/www/html/lab1
./copy_code.sh
