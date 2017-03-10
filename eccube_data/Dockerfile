FROM ubuntu:16.04

RUN apt-get update -y && \
DEBIAN_FRONTEND=noninteractive apt-get install -y git

RUN mkdir -p /var/www/html && cd /var/www/html \
&& git clone https://github.com/EC-CUBE/ec-cube.git
VOLUME /var/www/html

CMD ["tail", "-f" ,"/dev/null"]
