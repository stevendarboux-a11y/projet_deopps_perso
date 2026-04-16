# Utilisation d'une image Nginx 
FROM nginx:alpine

# Créer un dossier pour la configuration d'entrée
RUN mkdir -p /etc/nginx/templates

# Supprimer la config par défaut si elle existe
RUN rm -rf /etc/nginx/conf.d/default.conf || true

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers du jeu
COPY index.html script.js style.css /usr/share/nginx/html/

# Le port 80 défaut Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]