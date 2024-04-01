# Sensor Readings Logger

A web application that logs real-time sensor readings from a WebSocket server using socket.io as well, and displays them in a table and a line graph.

## Overview

This project consists of an HTML file (`index.html`) that creates a web interface to display sensor readings received from a WebSocket server. It utilizes Chart.js library to create a real-time line graph plotting temperature against time. The sensor readings are also displayed in a table below the graph.

## Features

- Real-time updates: Sensor readings are received via WebSocket connection and dynamically updated in the table and graph.
- Table view: Displays sensor readings in a table format with columns for time, temperature, and humidity.
- Graph view: Visualizes temperature readings over time with a line graph, plotted against the x-axis (time) and y-axis (temperature).
