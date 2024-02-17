# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Usage

To run the project locally, clone the repository and install dependencies using npm or yarn. Then, start the development server:

```bash
npm install
npm start
```

Open http://localhost:3000 to view it in your browser.


## Project Overview

This project is a video player application with a playlist feature. It allows users to view a list of videos, play them, and reorder them using drag-and-drop functionality. The application also includes a search feature to filter videos in the playlist.

### Project Structure

- **App Component (`App.js`):**
   - Manages state using the `useState` hook for mediaJSONdata (Data for the video playlist)
   - Provides a context (`MyContext.Provider`) for sharing state with child components.
   - Renders a `Navbar` component and the `Playlist` component wrapped in the context provider.

- **Navbar Component (`components/Navbar.js`):**
   - Displays a navigation bar with a logo and title (`Videobite`).
   

- **Playlist Component (`components/Playlist.js`):**
   - Includes a search input field.
   - Manages state for the current playing index, search term, and whether a video is clicked.
   - Implements drag-and-drop reordering of videos in the playlist.
   - Displays the playlist of videos with each item as a `PlayListItem` component.
   - Renders a `ReactPlayer` component for video playback when a video is clicked.

- **PlayListItem Component (`components/PlayListItem.js`):**
   - Displays a thumbnail image of the video.
   - Shows a play icon when hovered over.
   - Uses the `video` prop to display video information (title, description).

### Key Features

- **Drag-and-Drop Functionality:** The `Playlist` component uses `react-beautiful-dnd` for drag-and-drop functionality, allowing users to reorder videos in the playlist by dragging and dropping them.
- **Video Playback:** When a video is clicked in the `playlist`, the `ReactPlayer` component is rendered in the Playlist component to play the selected video. The player includes controls for playing, pausing, and seeking through the video.
- **Responsive Design:** The application is designed to be `responsive`, adjusting its layout and styles based on the `screen size`. This ensures a consistent user experience across different devices and screen sizes.
- **Thumbnail Previews:** Each video in the playlist is represented by a `thumbnail image`, providing users with a visual preview of the video content.
- **Search Functionality :** The  component includes a search input field for searching videos in the playlist.
- ** Context API :**  The application uses the Context API `(MyContext.Provider`) to manage and share state between components, such as the mediaJSONdata and reordering value, without having to pass props manually through every level of the component tree`(Prop drilling)`.



