FROM node:18-alpine

WORKDIR /app  

COPY package*.json .

RUN npm install

COPY . .  

RUN npm run build  

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /user/share/nginx/html  

# RUN npm run build  
# EXPOSE 3000 

CMD [ "npm", "start"]