<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
    <title>Only Happy Faces</title>
    <!-- <link rel="stylesheet" href="using_flask\static\style.css"> -->
    <style>
        /* style.css content */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        header {
            width: 100%;
            background-color: #cbe7cb; /* Green background to match the button */
            color: rgb(47, 47, 47);
            font-family: Lilita one;
            font-size: 60px; /* Increased font size */
            text-align: center;
            padding: 20px 0; /* Adjust padding to accommodate larger text */
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1001; /* Ensure it stays above other content */
        }

        #startButton {
            height: 80px;
            padding: 15px 30px;
            font-size: 25px;
            border-radius: 40px;
            background-color: #6eb570;
            color: white;
            border: none;
            cursor: pointer;
            outline: none;
            transition: background-color 0.3s;
            margin-top: 300px; /* Add margin to compensate for the fixed header */
        }

        .video-container {
            margin-top: 120px;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #f8d7da;
            color: #721c24;
            padding: 10px;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
            display: none;
        }
    </style>
</head>
<body>
    <header>
        Only Happy Faces
    </header>
    <button id="startButton">Start Smile Detection</button>
    <div class="video-container">
        <video id="video" width="640" height="480" autoplay></video>
        <img id="smile-img" src="#" alt="Smile" style="display:none">
    </div>
    <div id="notification" class="notification" style="display: none;">Your message here</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/static/script.js"></script>
</body>
</html>

