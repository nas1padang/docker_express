# pull node
FROM node:14

# working direktory
WORKDIR /app

# ambil dari local folder ke working direktory
COPY package*.json ./

# jalankan npm install
RUN npm install

# copy dari semua folder
COPY . .

# jalankan
CMD ["npm", "start"]
