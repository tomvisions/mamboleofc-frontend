FROM 955552760689.dkr.ecr.us-east-1.amazonaws.com/node-base:16-al2
LABEL maintainer="Tom Cruickshank <tomc@tomvisions.com>"
COPY ["./entrypoint.sh", "/usr/bin"]
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
