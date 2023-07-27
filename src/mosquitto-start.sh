#!/bin/bash

# Check if Mosquitto is installed
if ! command -v mosquitto &> /dev/null
then
    # Install Mosquitto
    sudo apt-get update
    sudo apt-get install mosquitto
fi

# Start Mosquitto broker using mosquitto.conf
mosquitto -c src/mosquitto.conf