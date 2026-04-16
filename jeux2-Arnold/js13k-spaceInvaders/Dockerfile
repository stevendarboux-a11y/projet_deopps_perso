# Stage 1: Build
FROM node:18-alpine as builder

WORKDIR /app

# Installer les dépendances de build pour node-gyp et parcel
RUN apk add --no-cache python3 make g++ util-linux

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Afficher le contenu du dossier src pour debug
RUN echo "=== Checking src directory ===" && ls -la src/

# Essayer le build avec output verbeux
RUN npm run build

# Vérifier le résultat du build
RUN echo "=== Checking build directory ===" && ls -la build/

# Stage 2: Serve
FROM nginx:alpine

# Créer un dossier pour la configuration d'entrée
RUN mkdir -p /etc/nginx/templates

# Supprimer la config par défaut si elle existe
RUN rm -rf /etc/nginx/conf.d/default.conf || true

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers compilés du jeu depuis le stage builder
COPY --from=builder /app/build /usr/share/nginx/html

# Vérifier que les fichiers ont bien été copiés
RUN ls -la /usr/share/nginx/html/

# Le port 80 défaut Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
