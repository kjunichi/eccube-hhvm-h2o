FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    cmake bison ruby git g++ zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/h2o/h2o \
&& cd h2o \
&& cmake -DWITH_BUNDLED_SSL=on . \
&& make install

COPY h2o.conf /usr/local/etc/h2o.conf
COPY server.key /usr/local/etc/h2o/server.key
COPY server.crt /usr/local/etc/h2o/server.crt

CMD ["/usr/local/bin/h2o", "-c", "/usr/local/etc/h2o.conf"]
EXPOSE 443
