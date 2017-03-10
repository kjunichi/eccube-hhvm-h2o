FROM hhvm/hhvm

RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8

CMD ["hhvm", "--mode", "server", "-vServer.Type=fastcgi", "-vServer.Port=9000"]

EXPOSE 9000
