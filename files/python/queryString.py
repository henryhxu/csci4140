#!/usr/bin/env python

import os

print('Content-type: text/plain\n')

method = os.environ['REQUEST_METHOD']
queryString = ""
if method == "POST":
    length = int(os.environ['CONTENT-LENGTH'])
    queryString = os.sys.stdin.read(length)
elif method == "GET":
    queryString = os.environ['QUERY_STRING']
else:
    queryString = "Unknown"

print("Query string: \"{}\"".format(queryString))
