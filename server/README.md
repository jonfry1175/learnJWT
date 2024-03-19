LANGKAH LANGKAH PEMBUATAN API

1. npm init -y
- untuk membuat package.json, package.json berfungsi untuk menyimpan informasi package/modul dalam aplikasi kita.
- NPM = node package manager

2. npm install <package_name>
- untuk menginstall modul dari npm
- npm install express pg sequelize dotenv cors bcrypt
- npm install nodemon sequelize-cli --save-dev

3. Membuat file app.js dan .gitignore, .env
- gitignore berfungsi untuk tidak memasukkan node_modules ke dalam GitHub repository.
- env berfungsi untuk meletakan variable yang akan di gunakan dalam environment tertentu.

4. Membuat _routing dan controllers__

5. npx nodemon app.js
- untuk menjalankan


KONFIGURASI POSTGRES MENGGUNAKAN SEQUELIZE

1. npx sequelize-cli init
- untuk membuat initiation awal sequelize

2. Konfigurasi database di dalam config.json

3. npx sequelize-cli db:create
- untuk membuat database lewat sequelize tanpa query manual

4. npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string

- untuk membuat class dan juga migrations

5. npx sequelize-cli model:generate --name Book --attributes title:string,description:string,imageUrl:string,releaseYear:integer,price:string,totalPage:integer,thickness:string,CategoryId:integer,UserId:integer

- untuk membuat class dan juga migrations

6. npx sequelize-cli model:generate --name Category --attributes name:string,UserId:integer

- untuk membuat class dan juga migrations


7. npx sequelize-cli db:migrate 
- untuk melakukan migrations
- agar table di buat



![diagram](/docs/diagram.pdf)