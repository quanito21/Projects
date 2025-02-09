Airline Delay Dashboard
Overview
This project visualizes flight delays for various airlines. The dashboard is designed using D3.jsand incorporates interactive elements to enhance user engagement and data exploration. It includes a bar chart to display the number of delays for each airline, with the ability to filter data based on the selected airport.

Instructions to Load the Project
Download the Project Files

Download all the project files, including index.html, Airline_Delay_Cause.csv, and any other resources provided.

Set Up a Local Server

You can use the Live Server extension in Visual Studio Code (VS Code) to run the project locally.

Using Live Server Extension
Install Visual Studio Code (VS Code)

If you don't have VS Code installed, download and install it from here.

Install Live Server Extension

Open VS Code.

Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window or by pressing Ctrl+Shift+X.

Search for "Live Server" and click the Install button on the "Live Server" extension by Ritwick Dey.

Open the Project Folder

Open VS Code.

Go to File > Open Folder and select the folder containing your project files.

Start Live Server

In VS Code, right-click on the index.html file in the Explorer view and select Open with Live Server.

Alternatively, you can click the Go Live button in the bottom-right corner of the VS Code window.

Your default web browser should open and navigate to http://127.0.0.1:5500/index.html, displaying the Airline Delay Dashboard.

Interaction Design
Interactions Implemented
Details on Demand (Tooltip)

Interaction: When users hover over a bar representing an airline, a tooltip appears showing detailed information about the airline, airport, number of flights, delays, and reasons for delays.

Support: This interaction provides users with instant access to detailed data without cluttering the main visualization. It enhances the exploratory experience by allowing users to delve deeper into specific data points.

Example: Hover over a bar for "American" to see details such as "Flights: 200, Delays: 30, Carrier Delay: 10, Weather Delay: 5".

Data Filtering (Dropdown)

Interaction: A dropdown menu allows users to filter the data by selecting a specific airport. The bar chart updates to display delays for airlines operating at the selected airport.

Support: This interaction helps users focus on relevant data by filtering out unnecessary information. It aids in comparative analysis across different airports.

Example: Select "Los Angeles International Airport" from the dropdown to see delays for airlines operating at LAX.

Visual Encoding (Bar Chart)

Interaction: The bar chart encodes the number of delays for each airline as the height of the bars, making it easy to compare delays across different airlines.

Support: This visual encoding allows users to quickly grasp the distribution of delays and identify airlines with the highest or lowest delays.

Example: The chart shows taller bars for airlines with more delays, such as "Delta" with 50 delays compared to "Southwest" with 20 delays.

Rationale for Interaction Choices
Enhanced User Engagement: By integrating interactive elements, the dashboard becomes more engaging and encourages users to explore the data.

Improved Data Accessibility: The interactions provide multiple ways to access and interpret the data, making the dashboard more user-friendly.

Clear Data Storytelling: The interactions help to tell a clear and compelling data story by highlighting important aspects of the data, such as high delay rates for certain airlines or airports.