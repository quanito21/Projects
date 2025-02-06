This project visualizes data from the datasaurus_dozen.csv file using D3.js.  It compares the "dino" and "star" datasets through three different chart types:

1. Superimposed Scatterplot: Shows both datasets on the same chart, allowing for direct comparison of individual data points.

2. Juxtaposed Bar Chart: Displays the data in side-by-side bars for each dataset, facilitating comparison of aggregated values.

3. Juxtaposed Line Charts: Presents each dataset's trend on separate, adjacent line charts, making it easy to compare overall patterns.

How to run:

1. Save the HTML file (e.g., index.html), the JavaScript file (e.g., script.js), and the datasaurus_dozen.csv file in the same directory.

2. Start a local web server:

    * **Easiest (if you have Python 3):**
        1. Open your command prompt or terminal.
        2. Navigate to the directory containing your files (e.g., `cd C:\Users\Nguyen\Downloads\UNC\Python Projects\D3Project` - replace with your actual path).
        3. Run the command `python -m http.server`.
        4. Open your web browser and go to `http://localhost:8000/` (or `http://127.0.0.1:8000/`).

    * **If you have Node.js and npm:**
        1. Open your command prompt or terminal.
        2. Navigate to the directory containing your files.
        3. If you haven't already, install `http-server` globally: `npm install -g http-server` (or `serve`: `npm install -g serve`).
        4. Run the command `http-server` or `serve`. The terminal will tell you the URL to use (usually something like `http://localhost:8080/`).

    * **Using VS Code's Live Server (Recommended if using VS Code):**
        1. Open the project folder in VS Code.
        2. Install the "Live Server" extension if you haven't already. You can find it in the VS Code extensions marketplace.
        3. Right-click on your HTML file (e.g., `index.html`) in the VS Code explorer.
        4. Select "Open with Live Server."  Live Server will automatically open your HTML file in your default browser.

3. Your HTML file should now load in your browser.

Important Note: Do *not* try to open the HTML file directly by double-clicking it or dragging it into your browser. This will likely not work due to browser security restrictions. You *must* use a local web server as described above.  The "Live Server" extension is the easiest option if you are using VS Code.

Data Source:

The data for this visualization comes from the datasaurus_dozen.csv file, provided as part of the assignment.

D3.js Library:

This project uses the D3.js library.  It is included via CDN in the HTML file.

Code Sources and Inspirations:

*   The general structure of loading data and creating SVGs with margins and axes is based on common D3.js examples and patterns found in various online tutorials and the D3.js documentation.
*   The concept of using tooltips for interactive data display is inspired by various D3.js tooltip examples available online.  I adapted the general idea to fit my specific needs.
*   The flexbox layout for the juxtaposed line charts was inspired by common web development practices for side-by-side element arrangement.

Deviations from Examples:

*   The specific implementation of the scatterplot, bar chart, and line chart, including the data filtering, scales, axes, colors, and tooltip content, are my own design and adaptation to the datasaurus_dozen data. 
*   The juxtaposition of the line charts using two separate SVGs within a flexbox container is a specific design choice to improve the clarity of the comparison.  It combines common D3.js and web layout techniques.