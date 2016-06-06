#!/bin/bash
s3cmd get s3://demo-awssummit/soundtracks_raw.list.gz
gzip -d soundtracks_raw.list.gz
# gunzip soundtracks_raw.list.gz
