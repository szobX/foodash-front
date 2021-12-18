#!/bin/bash

if $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH; then
    cat $ENV_FILE_PROD > .env
else
    cat $ENV_FILE_DEV > .env
fi