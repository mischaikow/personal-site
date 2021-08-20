This repo holds the code behind https://www.mischaikow.com

Some of the techonology here might be overkill, but the site is intended as a learning experience rather than an optimized personal site.

You can also find me on LinkedIn at [Mischaikow] (https://linkedin.com/in/mischaikow).
If you have questions or comments, [leave me a note] (https://www.mischaikow.com/contact)!

# Structure
The site is designed to live on an EC2 instance. The docker-compose.yml file launches two containers described by the Dockerfiles which live in the frontend and backend directories. The backend Docker container runs Node.js. The frontend container is a two-stage build that first builds the React site and then loads the built site onto an Nginx container. The Nginx server acts as a reverse proxy pointing to the built React site and backend API.

# Inspiration & Resources
I used a large range of resources to learn from and power this site. Some of the more important ones include:
- [Full Stack Open] (https://fullstackopen.com)
- [Google] (https://google.com)
- [Stack Overflow] (https://stackoverflow.com)
- [snyk.io's best practices blog post] (https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
- [nomalize.css] (https://github.com/necolas/normalize.css)
- [Skeleton CSS Boilerplate] (http://getskeleton.com)

# To Dos
- Build a connection to my AWS RDS PostgreSQL server to power the blog
- Move away from docker-compose to Kubernetes to manage the docker containers
- Set up auto-renewal for my https certification