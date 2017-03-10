FROM ubuntu:16.04

RUN apt-get update -y && \
DEBIAN_FRONTEND=noninteractive apt-get install -y git

VOLUME /var/www/html
RUN cd /var/www/html \
&& git clone https://github.com/EC-CUBE/ec-cube.git

CMD ["true"]
