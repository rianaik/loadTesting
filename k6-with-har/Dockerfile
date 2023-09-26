FROM python:3.6


RUN pip3 install gitlab-har-recorder --extra-index-url https://gitlab.com/api/v4/projects/22441624/packages/pypi/simple

WORKDIR /opt

#CMD /usr/local/bin/gl-har-recorder start -f -p 9000 -o test.har

COPY start.sh /usr/local/bin

RUN chmod +x /usr/local/bin/start.sh && \
    mkdir /opt/har-data

EXPOSE 9000

ENTRYPOINT "/usr/local/bin/start.sh"
